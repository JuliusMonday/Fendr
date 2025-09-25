const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  farmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1']
    },
    price: {
      amount: {
        type: Number,
        required: [true, 'Price is required']
      },
      unit: {
        type: String,
        required: [true, 'Price unit is required']
      },
      currency: {
        type: String,
        default: 'NGN'
      }
    },
    subtotal: {
      type: Number,
      required: [true, 'Subtotal is required']
    }
  }],
  pricing: {
    subtotal: {
      type: Number,
      required: [true, 'Subtotal is required']
    },
    deliveryFee: {
      type: Number,
      default: 0
    },
    serviceFee: {
      type: Number,
      default: 0
    },
    tax: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      required: [true, 'Total is required']
    },
    currency: {
      type: String,
      default: 'NGN'
    }
  },
  delivery: {
    method: {
      type: String,
      enum: ['pickup', 'delivery'],
      required: [true, 'Delivery method is required']
    },
    address: {
      type: String,
      required: function() { return this.delivery.method === 'delivery'; }
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    },
    scheduledDate: {
      type: Date,
      required: [true, 'Scheduled delivery date is required']
    },
    scheduledTime: {
      type: String,
      required: [true, 'Scheduled delivery time is required']
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'in-transit', 'delivered', 'cancelled'],
      default: 'pending'
    },
    trackingNumber: {
      type: String
    }
  },
  payment: {
    method: {
      type: String,
      enum: ['paystack', 'flutterwave', 'bank-transfer', 'cash-on-delivery'],
      required: [true, 'Payment method is required']
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionId: {
      type: String
    },
    paidAt: {
      type: Date
    }
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending'
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  },
  timeline: [{
    status: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    notes: {
      type: String
    },
    updatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  }],
  rating: {
    quality: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    },
    delivery: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    },
    communication: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    },
    overall: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    },
    review: {
      type: String,
      maxlength: [500, 'Review cannot exceed 500 characters']
    }
  }
}, {
  timestamps: true
});

// Generate order number before saving
orderSchema.pre('save', function(next) {
  if (!this.orderNumber) {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    this.orderNumber = `FEND-${timestamp}-${random}`.toUpperCase();
  }
  next();
});

// Create indexes
orderSchema.index({ orderNumber: 1 });
orderSchema.index({ buyer: 1 });
orderSchema.index({ farmer: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Order', orderSchema);