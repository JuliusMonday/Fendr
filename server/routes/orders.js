const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/orders
// @desc    Get all orders (user's own orders or admin)
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    let query = {};

    // If user is not admin, show only their orders
    if (req.user.role !== 'admin') {
      if (req.user.role === 'buyer') {
        query.buyer = req.user.id;
      } else if (req.user.role === 'farmer') {
        query.farmer = req.user.id;
      }
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;

    const orders = await Order.find(query)
      .populate('buyer', 'name email phone')
      .populate('farmer', 'name email phone')
      .populate('products.product', 'name images')
      .skip(startIndex)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Order.countDocuments(query);

    res.json({
      success: true,
      count: orders.length,
      total,
      orders
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/orders/:id
// @desc    Get single order by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('buyer', 'name email phone location')
      .populate('farmer', 'name email phone location')
      .populate('products.product', 'name images category price');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user is authorized to view this order
    if (req.user.role !== 'admin' && 
        order.buyer._id.toString() !== req.user.id && 
        order.farmer._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this order'
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private/Buyer
router.post('/', protect, authorize('buyer'), async (req, res) => {
  try {
    const { products, delivery, notes } = req.body;

    // Validate products
    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Products are required'
      });
    }

    // Calculate totals and validate products
    let subtotal = 0;
    const orderProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.product);
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.product} not found`
        });
      }

      if (product.status !== 'active') {
        return res.status(400).json({
          success: false,
          message: `Product ${product.name} is not available`
        });
      }

      if (product.quantity.available < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient quantity for ${product.name}`
        });
      }

      const itemSubtotal = product.price.amount * item.quantity;
      subtotal += itemSubtotal;

      orderProducts.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
        subtotal: itemSubtotal
      });
    }

    // Calculate additional fees
    const deliveryFee = delivery.method === 'delivery' ? 1000 : 0; // Simple delivery fee calculation
    const serviceFee = subtotal * 0.02; // 2% service fee
    const tax = 0; // No tax for now
    const total = subtotal + deliveryFee + serviceFee + tax;

    // Create order
    const order = await Order.create({
      buyer: req.user.id,
      farmer: orderProducts[0].product.farmer, // Assuming all products from same farmer for now
      products: orderProducts,
      pricing: {
        subtotal,
        deliveryFee,
        serviceFee,
        tax,
        total,
        currency: 'NGN'
      },
      delivery,
      notes
    });

    // Update product quantities
    for (const item of orderProducts) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { 'quantity.available': -item.quantity }
      });
    }

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/orders/:id/status
// @desc    Update order status
// @access  Private
router.put('/:id/status', protect, async (req, res) => {
  try {
    const { status, notes } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check authorization
    const isBuyer = order.buyer.toString() === req.user.id;
    const isFarmer = order.farmer.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';

    if (!isBuyer && !isFarmer && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this order'
      });
    }

    // Validate status transition
    const validTransitions = {
      'pending': ['confirmed', 'cancelled'],
      'confirmed': ['processing', 'cancelled'],
      'processing': ['shipped', 'cancelled'],
      'shipped': ['delivered', 'cancelled'],
      'delivered': ['refunded'],
      'cancelled': [],
      'refunded': []
    };

    if (!validTransitions[order.status].includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Cannot transition from ${order.status} to ${status}`
      });
    }

    // Update order status
    order.status = status;
    order.timeline.push({
      status,
      notes,
      updatedBy: req.user.id
    });

    await order.save();

    res.json({
      success: true,
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   PUT /api/orders/:id/rating
// @desc    Rate an order
// @access  Private/Buyer
router.put('/:id/rating', protect, authorize('buyer'), async (req, res) => {
  try {
    const { quality, delivery, communication, overall, review } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user is the buyer
    if (order.buyer.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to rate this order'
      });
    }

    // Check if order is delivered
    if (order.status !== 'delivered') {
      return res.status(400).json({
        success: false,
        message: 'Order must be delivered before rating'
      });
    }

    // Update rating
    order.rating = {
      quality,
      delivery,
      communication,
      overall,
      review
    };

    await order.save();

    // Update farmer's average rating
    const farmerOrders = await Order.find({
      farmer: order.farmer,
      status: 'delivered',
      'rating.overall': { $exists: true }
    });

    const totalRating = farmerOrders.reduce((sum, o) => sum + o.rating.overall, 0);
    const averageRating = totalRating / farmerOrders.length;

    // Update farmer rating (you would need to add rating field to User model)

    res.json({
      success: true,
      message: 'Order rated successfully',
      order
    });
  } catch (error) {
    console.error('Rate order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;