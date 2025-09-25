const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/farmers/dashboard
// @desc    Get farmer dashboard statistics
// @access  Private/Farmer
router.get('/dashboard', protect, authorize('farmer'), async (req, res) => {
  try {
    const farmerId = req.user.id;

    // Get farmer's products
    const products = await Product.find({ farmer: farmerId });
    
    // Get farmer's orders
    const orders = await Order.find({ farmer: farmerId });

    // Calculate statistics
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.status === 'active').length;
    const totalOrders = orders.length;
    const completedOrders = orders.filter(o => o.status === 'delivered').length;
    const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'confirmed').length;

    // Calculate revenue
    const totalRevenue = orders
      .filter(o => o.status === 'delivered')
      .reduce((sum, order) => sum + order.pricing.total, 0);

    // Calculate average rating
    const ratedOrders = orders.filter(o => o.rating && o.rating.overall);
    const averageRating = ratedOrders.length > 0 
      ? ratedOrders.reduce((sum, o) => sum + o.rating.overall, 0) / ratedOrders.length 
      : 0;

    // Get recent orders
    const recentOrders = await Order.find({ farmer: farmerId })
      .populate('buyer', 'name')
      .populate('products.product', 'name')
      .sort({ createdAt: -1 })
      .limit(5);

    // Get top products by views
    const topProducts = await Product.find({ farmer: farmerId })
      .sort({ views: -1 })
      .limit(5);

    res.json({
      success: true,
      statistics: {
        totalProducts,
        activeProducts,
        totalOrders,
        completedOrders,
        pendingOrders,
        totalRevenue,
        averageRating: Math.round(averageRating * 10) / 10
      },
      recentOrders,
      topProducts
    });
  } catch (error) {
    console.error('Get farmer dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/farmers/products
// @desc    Get farmer's products
// @access  Private/Farmer
router.get('/products', protect, authorize('farmer'), async (req, res) => {
  try {
    const products = await Product.find({ farmer: req.user.id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Get farmer products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/farmers/orders
// @desc    Get farmer's orders
// @access  Private/Farmer
router.get('/orders', protect, authorize('farmer'), async (req, res) => {
  try {
    const orders = await Order.find({ farmer: req.user.id })
      .populate('buyer', 'name email phone')
      .populate('products.product', 'name images')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    console.error('Get farmer orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/farmers/analytics
// @desc    Get farmer analytics
// @access  Private/Farmer
router.get('/analytics', protect, authorize('farmer'), async (req, res) => {
  try {
    const farmerId = req.user.id;
    const { period = 'month' } = req.query;

    let groupBy;
    let dateFormat;

    switch (period) {
      case 'week':
        groupBy = { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } };
        dateFormat = '%Y-%m-%d';
        break;
      case 'month':
        groupBy = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
        dateFormat = '%Y-%m';
        break;
      case 'year':
        groupBy = { $dateToString: { format: '%Y', date: '$createdAt' } };
        dateFormat = '%Y';
        break;
      default:
        groupBy = { $dateToString: { format: '%Y-%m', date: '$createdAt' } };
        dateFormat = '%Y-%m';
    }

    // Sales analytics
    const salesData = await Order.aggregate([
      { $match: { farmer: farmerId, status: 'delivered' } },
      {
        $group: {
          _id: groupBy,
          totalSales: { $sum: '$pricing.total' },
          orderCount: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Product performance
    const productPerformance = await Order.aggregate([
      { $match: { farmer: farmerId, status: 'delivered' } },
      { $unwind: '$products' },
      {
        $group: {
          _id: '$products.product',
          totalQuantity: { $sum: '$products.quantity' },
          totalRevenue: { $sum: '$products.subtotal' },
          orderCount: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      {
        $project: {
          productName: '$product.name',
          totalQuantity: 1,
          totalRevenue: 1,
          orderCount: 1
        }
      },
      { $sort: { totalRevenue: -1 } }
    ]);

    // Order status distribution
    const orderStatusDistribution = await Order.aggregate([
      { $match: { farmer: farmerId } },
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
        salesData,
        productPerformance,
        orderStatusDistribution
      }
    });
  } catch (error) {
    console.error('Get farmer analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/farmers/profile
// @desc    Get farmer profile
// @access  Private/Farmer
router.get('/profile', protect, authorize('farmer'), async (req, res) => {
  try {
    const farmer = await User.findById(req.user.id).select('-password');
    
    // Get additional farmer statistics
    const productCount = await Product.countDocuments({ farmer: req.user.id });
    const orderCount = await Order.countDocuments({ farmer: req.user.id });
    const completedOrderCount = await Order.countDocuments({ 
      farmer: req.user.id, 
      status: 'delivered' 
    });

    res.json({
      success: true,
      farmer: {
        ...farmer.toObject(),
        statistics: {
          productCount,
          orderCount,
          completedOrderCount
        }
      }
    });
  } catch (error) {
    console.error('Get farmer profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;