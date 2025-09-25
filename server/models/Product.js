const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: [
      'grains', 'vegetables', 'fruits', 'tubers', 'legumes', 
      'livestock', 'dairy', 'poultry', 'fisheries', 'others'
    ]
  },
  price: {
    amount: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    unit: {
      type: String,
      required: [true, 'Price unit is required'],
      enum: ['kg', 'ton', 'bag', 'crate', 'piece', 'bunch', 'liter', 'dozen']
    },
    currency: {
      type: String,
      default: 'NGN'
    }
  },
  quantity: {
    available: {
      type: Number,
      required: [true, 'Available quantity is required'],
      min: [0, 'Quantity cannot be negative']
    },
    unit: {
      type: String,
      required: [true, 'Quantity unit is required'],
      enum: ['kg', 'ton', 'bag', 'crate', 'piece', 'bunch', 'liter', 'dozen']
    },
    minimumOrder: {
      type: Number,
      required: [true, 'Minimum order quantity is required'],
      min: [1, 'Minimum order must be at least 1']
    }
  },
  farmer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Product image'
    }
  }],
  quality: {
    grade: {
      type: String,
      enum: ['A', 'B', 'C'],
      default: 'B'
    },
    certification: {
      type: String,
      enum: ['organic', 'conventional', 'good-agricultural-practice', 'none'],
      default: 'none'
    },
    harvestDate: {
      type: Date,
      required: [true, 'Harvest date is required']
    },
    expiryDate: {
      type: Date
    }
  },
  availability: {
    isAvailable: {
      type: Boolean,
      default: true
    },
    readyForPickup: {
      type: Boolean,
      default: false
    },
    deliveryOptions: [{
      type: String,
      enum: ['pickup', 'delivery', 'both']
    }]
  },
  location: {
    state: {
      type: String,
      required: [true, 'State is required']
    },
    lga: {
      type: String,
      required: [true, 'LGA is required']
    },
    address: {
      type: String,
      required: [true, 'Address is required']
    }
  },
  tags: [{
    type: String,
    trim: true
  }],
  views: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be negative'],
      max: [5, 'Rating cannot exceed 5']
    },
    count: {
      type: Number,
      default: 0
    }
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'sold', 'expired'],
    default: 'active'
  }
}, {
  timestamps: true
});

// Create indexes for better search performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ 'farmer': 1 });
productSchema.index({ 'location.state': 1 });
productSchema.index({ status: 1 });
productSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Product', productSchema);