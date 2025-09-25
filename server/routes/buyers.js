const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/buyers/dashboard
// @desc    Get buyer dashboard statistics
// @access  Private/Buyer
router.get('/dashboard', protect, authorize('buyer'), async (req, res) => {
  try {
    const buyerId = req.user.id;

    // Get buyer's orders
    const orders = await Order.find({ buyer: buyerId });

    // Calculate statistics
    const totalOrders = orders.length;
    const completedOrders = orders.filter(o => o.status === 'delivered').length;
    const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'confirmed').length;
    const cancelledOrders = orders.filter(o => o.status === 'cancelled').length;

    // Calculate total spent
    const totalSpent = orders
      .filter(o => o.status === 'delivered')
      .reduce((sum, order) => sum + order.pricing.total, 0);

    // Get favorite categories
    const orderProducts = orders.flatMap(order => 
      order.products.map(p => p.product.toString())
    );
    
    const products = await Product.find({ _id: { $in: orderProducts } });
    const categoryCount = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    const favoriteCategories = Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([category, count]) => ({ category, count }));

    // Get recent orders
    const recentOrders = await Order.find({ buyer: buyerId })
      .populate('farmer', 'name')
      .populate('products.product', 'name images')
      .sort({ createdAt: -1 })
      .limit(5);

    // Get recommended products based on order history
    const recommendedProducts = await Product.find({
      category: { $in: favoriteCategories.map(c => c.category) },
      status: 'active'
    })
    .populate('farmer', 'name location')
    .sort({ views: -1 })
    .limit(10);

    res.json({
      success: true,
      statistics: {
        totalOrders,
        completedOrders,
        pendingOrders,
        cancelledOrders,
        totalSpent
      },
      favoriteCategories,
      recentOrders,
      recommendedProducts
    });
  } catch (error) {
    console.error('Get buyer dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/buyers/orders
// @desc    Get buyer's orders
// @access  Private/Buyer
router.get('/orders', protect, authorize('buyer'), async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id })
      .populate('farmer', 'name email phone location')
      .populate('products.product', 'name images category price')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    console.error('Get buyer orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/buyers/favorites
// @desc    Get buyer's favorite products
// @access  Private/Buyer
router.get('/favorites', protect, authorize('buyer'), async (req, res) => {
  try {
    // This would require a favorites collection in the database
    // For now, return an empty array
    res.json({
      success: true,
      favorites: []
    });
  } catch (error) {
    console.error('Get buyer favorites error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/buyers/recommendations
// @desc    Get product recommendations for buyer
// @access  Private/Buyer
router.get('/recommendations', protect, authorize('buyer'), async (req, res) => {
  try {
    const buyerId = req.user.id;

    // Get buyer's order history
    const orders = await Order.find({ buyer: buyerId, status: 'delivered' });
    const orderedProducts = orders.flatMap(order => 
      order.products.map(p => p.product.toString())
    );

    // Get categories from ordered products
    const products = await Product.find({ _id: { $in: orderedProducts } });
    const categories = [...new Set(products.map(p => p.category))];

    // Get recommended products from same categories
    const recommendedProducts = await Product.find({
      category: { $in: categories },
      status: 'active',
      _id: { $nin: orderedProducts }
    })
    .populate('farmer', 'name location')
    .sort({ rating: -1, views: -1 })
    .limit(20);

    // Get trending products (high views, recent)
    const trendingProducts = await Product.find({
      status: 'active',
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // Last 30 days
    })
    .populate('farmer', 'name location')
    .sort({ views: -1 })
    .limit(10);

    res.json({
      success: true,
      recommendations: {
        basedOnHistory: recommendedProducts,
        trending: trendingProducts
      }
    });
  } catch (error) {
    console.error('Get buyer recommendations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/buyers/analytics
// @desc    Get buyer analytics
// @access  Private/Buyer
router.get('/analytics', protect, authorize('buyer'), async (req, res) => {
  try {
    const buyerId = req.user.id;
    const { period = 'month' } = req.query;

    let groupBy;
    switch (period) {
      case 'week':
        groupBy = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };
        break;
      case 'month':
        groupBy = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
        break;
      case 'year':
        groupBy = { $dateToString: { format: '%Y', date: '$createdAt' } };
        break;
      default:
        groupBy = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
    }

    // Spending analytics
    const spendingData = await Order.aggregate([
      { $match: { buyer: buyerId, status: 'delivered' } },
      {
        $group: {
          _id: groupBy,
          totalSpent: { $sum: '$pricing.total' },
          orderCount: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Category spending
    const categorySpending = await Order.aggregate([
      { $match: { buyer: buyerId, status: 'delivered' } },
      { $unwind: '$products' },
      {
        $lookup: {
          from: 'products',
          localField: 'products.product',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      {
        $group: {
          _id: '$product.category',
          totalSpent: { $sum: '$products.subtotal' },
          orderCount: { $sum: 1 }
        }
      },
      { $sort: { totalSpent: -1 } }
    ]);

    // Order status distribution
    const orderStatusDistribution = await Order.aggregate([
      { $match: { buyer: buyerId } },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      success: true,
      analytics: {
        spendingData,
        categorySpending,
        orderStatusDistribution
      }
    });
  } catch (error) {
    console.error('Get buyer analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/buyers/profile
// @desc    Get buyer profile
// @access  Private/Buyer
router.get('/profile', protect, authorize('buyer'), async (req, res) => {
  try {
    const buyer = await User.findById(req.user.id).select('-password');
    
    // Get additional buyer statistics
    const orderCount = await Order.countDocuments({ buyer: req.user.id });
    const completedOrderCount = await Order.countDocuments({ 
      buyer: req.user.id, 
      status: 'delivered' 
    });

    // Calculate total spent
    const orders = await Order.find({ 
      buyer: req.user.id, 
      status: 'delivered' 
    });
    const totalSpent = orders.reduce((sum, order) => sum + order.pricing.total, 0);

    res.json({
      success: true,
      buyer: {
        ...buyer.toObject(),
        statistics: {
          orderCount,
          completedOrderCount,
          totalSpent
        }
      }
    });
  } catch (error) {
    console.error('Get buyer profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;