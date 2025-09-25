import React from 'react';
import { FaSeedling, FaChartLine, FaHandshake, FaMobile, FaSearch, FaShoppingCart, FaTruck, FaBox, FaUsers, FaLeaf, FaGlobeAfrica } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl animate-fade-in">
            Defending Farmers, Feeding Nations
          </h1>
          <p className="mb-8 text-xl md:text-2xl animate-slide-up">
            Connecting Nigerian smallholder farmers directly to buyers for fair prices and fresh food without middlemen
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-slide-up">
            <button className="text-lg btn-primary">For Farmers</button>
            <button className="text-lg text-white border-white btn-outline hover:bg-white hover:text-fendr-secondary">For Buyers</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <h2 className="mb-6 text-4xl font-bold text-fendr-secondary">About Fendr</h2>
              <p className="mb-6 text-lg text-gray-700">
                Fendr is revolutionizing agriculture in Nigeria by creating a direct digital marketplace that connects smallholder farmers with buyers. We eliminate costly middlemen, ensuring farmers get fair prices while buyers receive fresh, quality produce at competitive rates.
              </p>
              <p className="text-lg text-gray-700">
                Our platform empowers farmers with technology, provides transparent pricing, and builds sustainable agricultural ecosystems that benefit entire communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="p-6 bg-white shadow-lg rounded-xl card-hover">
                <div className="mb-2 text-3xl font-bold text-fendr-primary">₦3.5T</div>
                <p className="text-gray-600">Wasted annually due to inefficient supply chains</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-xl card-hover">
                <div className="mb-2 text-3xl font-bold text-fendr-accent">40%</div>
                <p className="text-gray-600">Post-harvest losses in Nigerian agriculture</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-xl card-hover">
                <div className="mb-2 text-3xl font-bold text-fendr-primary">70%</div>
                <p className="text-gray-600">Of Nigeria's food comes from smallholder farmers</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-xl card-hover">
                <div className="mb-2 text-3xl font-bold text-fendr-accent">50M+</div>
                <p className="text-gray-600">Smallholder farmers across Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-fendr-secondary">How Fendr Works</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Simple, transparent, and efficient process for farmers and buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-fendr-primary bg-opacity-10">
                <FaMobile className="text-3xl text-fendr-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fendr-secondary">Easy Listing</h3>
              <p className="text-gray-600">Farmers list produce with photos, prices, and delivery options in minutes</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-fendr-accent bg-opacity-10">
                <FaChartLine className="text-3xl text-fendr-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fendr-secondary">Price Alerts</h3>
              <p className="text-gray-600">Real-time market prices and alerts help farmers maximize profits</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-fendr-primary bg-opacity-10">
                <FaHandshake className="text-3xl text-fendr-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fendr-secondary">Instant Payments</h3>
              <p className="text-gray-600">Secure, immediate payments upon delivery confirmation</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-fendr-accent bg-opacity-10">
                <FaTruck className="text-3xl text-fendr-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fendr-secondary">Logistics Support</h3>
              <p className="text-gray-600">Integrated transportation and delivery network for seamless logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-fendr-secondary">Core Features</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Tailored solutions for farmers and buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Farmers Features */}
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-center text-fendr-primary">For Farmers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-primary bg-opacity-10">
                    <FaMobile className="text-xl text-fendr-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Easy Listing</h4>
                    <p className="text-gray-600">List your produce with photos, set your prices, and reach thousands of buyers instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-accent bg-opacity-10">
                    <FaChartLine className="text-xl text-fendr-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Market Intelligence</h4>
                    <p className="text-gray-600">Get real-time price alerts and market trends to maximize your profits</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-primary bg-opacity-10">
                    <FaHandshake className="text-xl text-fendr-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Secure Payments</h4>
                    <p className="text-gray-600">Receive instant payments directly to your bank account upon delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-accent bg-opacity-10">
                    <FaUsers className="text-xl text-fendr-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Cooperative Selling</h4>
                    <p className="text-gray-600">Join farmer cooperatives to increase bargaining power and access larger markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Buyers Features */}
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-center text-fendr-accent">For Buyers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-accent bg-opacity-10">
                    <FaSearch className="text-xl text-fendr-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Smart Search</h4>
                    <p className="text-gray-600">Find fresh, quality produce from verified farmers near you</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-primary bg-opacity-10">
                    <FaShoppingCart className="text-xl text-fendr-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Easy Ordering</h4>
                    <p className="text-gray-600">Place orders, track deliveries, and manage your inventory seamlessly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-accent bg-opacity-10">
                    <FaTruck className="text-xl text-fendr-accent" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Reliable Logistics</h4>
                    <p className="text-gray-600">Enjoy fast, reliable delivery with real-time tracking and quality guarantees</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-fendr-primary bg-opacity-10">
                    <FaBox className="text-xl text-fendr-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-fendr-secondary">Farm Boxes</h4>
                    <p className="text-gray-600">Subscribe to regular deliveries of fresh, seasonal produce at competitive prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-fendr-secondary">Our Impact</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Creating positive change across Nigeria's agricultural landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center text-white bg-gradient-to-br from-fendr-primary to-amber-600 rounded-2xl card-hover">
              <FaLeaf className="mx-auto mb-4 text-5xl" />
              <h3 className="mb-4 text-2xl font-bold">Economic Impact</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">30-50%</div>
                  <div className="text-sm">Higher income for farmers</div>
                </div>
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">15-25%</div>
                  <div className="text-sm">Cost savings for buyers</div>
                </div>
              </div>
            </div>
            
            <div className="p-8 text-center text-white bg-gradient-to-br from-fendr-accent to-emerald-700 rounded-2xl card-hover">
              <FaUsers className="mx-auto mb-4 text-5xl" />
              <h3 className="mb-4 text-2xl font-bold">Social Impact</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm">Farmers empowered</div>
                </div>
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-sm">Lives improved</div>
                </div>
              </div>
            </div>
            
            <div className="p-8 text-center text-white bg-gradient-to-br from-fendr-secondary to-gray-800 rounded-2xl card-hover">
              <FaGlobeAfrica className="mx-auto mb-4 text-5xl" />
              <h3 className="mb-4 text-2xl font-bold">National Relevance</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">36</div>
                  <div className="text-sm">States covered</div>
                </div>
                <div className="p-3 bg-white rounded-lg bg-opacity-20">
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm">Reduced food waste</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-fendr-secondary">Vision Roadmap</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Our strategic plan to transform Nigerian agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center bg-white shadow-lg rounded-2xl card-hover">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-fendr-primary">
                1
              </div>
              <h3 className="mb-4 text-xl font-bold text-fendr-secondary">Short Term</h3>
              <p className="mb-4 text-gray-600">Launch pilot program in 5 key agricultural states with 10,000 farmers</p>
              <ul className="space-y-2 text-left text-gray-600">
                <li>• Mobile app development</li>
                <li>• Farmer onboarding</li>
                <li>• Initial buyer network</li>
              </ul>
            </div>
            
            <div className="p-8 text-center bg-white shadow-lg rounded-2xl card-hover">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-fendr-accent">
                2
              </div>
              <h3 className="mb-4 text-xl font-bold text-fendr-secondary">Medium Term</h3>
              <p className="mb-4 text-gray-600">Expand to 20 states, integrate payment systems and logistics network</p>
              <ul className="space-y-2 text-left text-gray-600">
                <li>• Payment integration</li>
                <li>• Logistics partnerships</li>
                <li>• Data analytics platform</li>
              </ul>
            </div>
            
            <div className="p-8 text-center bg-white shadow-lg rounded-2xl card-hover">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-fendr-secondary">
                3
              </div>
              <h3 className="mb-4 text-xl font-bold text-fendr-secondary">Long Term</h3>
              <p className="mb-4 text-gray-600">Pan-African marketplace leadership with advanced agricultural technology</p>
              <ul className="space-y-2 text-left text-gray-600">
                <li>• African expansion</li>
                <li>• AI-powered farming insights</li>
                <li>• Blockchain integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-fendr-secondary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">Join the Agricultural Revolution</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Be part of the movement that's transforming Nigerian agriculture and empowering farmers nationwide.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="text-lg btn-primary">Get Started as Farmer</button>
            <button className="text-lg btn-secondary">Get Started as Buyer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;