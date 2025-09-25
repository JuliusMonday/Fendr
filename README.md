# Fendr - Defending Farmers, Feeding Nations

A Nigerian digital marketplace that connects smallholder farmers directly to buyers (schools, restaurants, households, and markets).

## 🌾 About Fendr

Fendr is revolutionizing agriculture in Nigeria by creating a direct digital marketplace that eliminates costly middlemen, ensuring farmers get fair prices while buyers receive fresh, quality produce at competitive rates.

### 🎯 Key Features

- **Direct Marketplace**: Connect farmers directly with buyers
- **Fair Pricing**: Eliminate middlemen for better prices
- **Real-time Analytics**: Market intelligence and price alerts
- **Secure Payments**: Integrated payment systems
- **Logistics Support**: Seamless delivery network
- **Quality Assurance**: Product verification and ratings

## 🚀 Tech Stack

### Frontend
- **React 18** - User interface
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File uploads

### Integrations
- **Paystack/Flutterwave** - Payment processing
- **Africa's Talking/Twilio** - SMS/USSD services
- **Email Services** - Notifications

## 📦 Project Structure

```
fendr/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and static files
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── config/            # Configuration files
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Main server file
│   ├── .env.example       # Environment variables template
│   └── package.json
└── package.json           # Root package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fendr
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp server/.env.example server/.env
   ```
   Edit the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/fendr
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=30d
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the application**
   ```bash
   # Start both client and server
   npm run dev
   
   # Or start separately
   npm run client    # Frontend on http://localhost:3000
   npm run server    # Backend on http://localhost:5000
   ```

## 🎨 Design System

### Brand Colors
- **Primary**: #f59e0b (Warm golden-orange)
- **Secondary**: #111827 (Deep charcoal)
- **Accent**: #04966a (Fresh green)

### Typography
- **Headings**: Poppins (bold sans-serif)
- **Body**: Inter (clean sans-serif)

### Design Principles
- Clean and minimal interface
- Farmer-friendly design
- Trustworthy appearance
- Rounded corners and soft shadows
- Grid layouts with generous spacing
- Smooth animations and transitions

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updateprofile` - Update profile
- `POST /api/auth/changepassword` - Change password

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Farmer only)
- `PUT /api/products/:id` - Update product (Farmer only)
- `DELETE /api/products/:id` - Delete product (Farmer only)

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order (Buyer only)
- `PUT /api/orders/:id/status` - Update order status
- `PUT /api/orders/:id/rating` - Rate order (Buyer only)

### Farmers
- `GET /api/farmers/dashboard` - Farmer dashboard
- `GET /api/farmers/products` - Farmer's products
- `GET /api/farmers/orders` - Farmer's orders
- `GET /api/farmers/analytics` - Farmer analytics
- `GET /api/farmers/profile` - Farmer profile

### Buyers
- `GET /api/buyers/dashboard` - Buyer dashboard
- `GET /api/buyers/orders` - Buyer's orders
- `GET /api/buyers/recommendations` - Product recommendations
- `GET /api/buyers/analytics` - Buyer analytics
- `GET /api/buyers/profile` - Buyer profile

## 🔧 Features Implementation

### Hero Section
- Full-width farm imagery with overlay
- Compelling tagline and subtext
- Call-to-action buttons for farmers and buyers
- Smooth animations and transitions

### About Section
- Two-column layout with description
- Key statistics in cards
- Impact metrics visualization

### Solution Section
- Step-by-step process cards
- Icon-based feature representation
- Clear value proposition

### Core Features
- Split view for Farmers vs Buyers
- Detailed feature lists with icons
- Role-specific functionality

### Impact Section
- Infographic cards for different impact areas
- Statistical data visualization
- Social and economic metrics

### Vision Roadmap
- Timeline-based progression
- Short, medium, and long-term goals
- Strategic planning visualization

### CTA Section
- Bold call-to-action over dark background
- Role-specific getting started buttons
- Conversion-focused design

## 🌐 Deployment

### Frontend Deployment
```bash
cd client
npm run build
```
Deploy the `build` folder to your hosting service.

### Backend Deployment
1. Set up production environment variables
2. Deploy to your preferred hosting service (Heroku, AWS, DigitalOcean, etc.)
3. Ensure MongoDB is properly configured for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Nigerian smallholder farmers
- Agricultural development organizations
- Digital marketplace innovators
- The open-source community

---

**Defending Farmers, Feeding Nations** 🌾🇳🇬