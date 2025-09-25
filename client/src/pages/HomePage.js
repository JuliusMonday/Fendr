import React from 'react';
import { FaSeedling, FaChartLine, FaHandshake, FaMobile, FaSearch, FaShoppingCart, FaTruck, FaBox, FaUsers, FaLeaf, FaGlobeAfrica } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Defending Farmers, Feeding Nations
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Connecting Nigerian smallholder farmers directly to buyers for fair prices and fresh food without middlemen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="btn-primary text-lg">For Farmers</button>
            <button className="btn-outline text-lg border-white text-white hover:bg-white hover:text-fendr-secondary">For Buyers</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-fendr-secondary mb-6">About Fendr</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fendr is revolutionizing agriculture in Nigeria by creating a direct digital marketplace that connects smallholder farmers with buyers. We eliminate costly middlemen, ensuring farmers get fair prices while buyers receive fresh, quality produce at competitive rates.
              </p>
              <p className="text-lg text-gray-700">
                Our platform empowers farmers with technology, provides transparent pricing, and builds sustainable agricultural ecosystems that benefit entire communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-3xl font-bold text-fendr-primary mb-2">₦3.5T</div>
                <p className="text-gray-600">Wasted annually due to inefficient supply chains</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-3xl font-bold text-fendr-accent mb-2">40%</div>
                <p className="text-gray-600">Post-harvest losses in Nigerian agriculture</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-3xl font-bold text-fendr-primary mb-2">70%</div>
                <p className="text-gray-600">Of Nigeria's food comes from smallholder farmers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="text-3xl font-bold text-fendr-accent mb-2">50M+</div>
                <p className="text-gray-600">Smallholder farmers across Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fendr-secondary mb-4">How Fendr Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient process for farmers and buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-fendr-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMobile className="text-fendr-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-fendr-secondary mb-3">Easy Listing</h3>
              <p className="text-gray-600">Farmers list produce with photos, prices, and delivery options in minutes</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-fendr-accent bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-fendr-accent text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-fendr-secondary mb-3">Price Alerts</h3>
              <p className="text-gray-600">Real-time market prices and alerts help farmers maximize profits</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-fendr-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-fendr-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-fendr-secondary mb-3">Instant Payments</h3>
              <p className="text-gray-600">Secure, immediate payments upon delivery confirmation</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-fendr-accent bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-fendr-accent text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-fendr-secondary mb-3">Logistics Support</h3>
              <p className="text-gray-600">Integrated transportation and delivery network for seamless logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fendr-secondary mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for farmers and buyers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Farmers Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-fendr-primary mb-6 text-center">For Farmers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-primary bg-opacity-10 p-3 rounded-lg">
                    <FaMobile className="text-fendr-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Easy Listing</h4>
                    <p className="text-gray-600">List your produce with photos, set your prices, and reach thousands of buyers instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-accent bg-opacity-10 p-3 rounded-lg">
                    <FaChartLine className="text-fendr-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Market Intelligence</h4>
                    <p className="text-gray-600">Get real-time price alerts and market trends to maximize your profits</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-primary bg-opacity-10 p-3 rounded-lg">
                    <FaHandshake className="text-fendr-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Secure Payments</h4>
                    <p className="text-gray-600">Receive instant payments directly to your bank account upon delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-accent bg-opacity-10 p-3 rounded-lg">
                    <FaUsers className="text-fendr-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Cooperative Selling</h4>
                    <p className="text-gray-600">Join farmer cooperatives to increase bargaining power and access larger markets</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Buyers Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-fendr-accent mb-6 text-center">For Buyers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-accent bg-opacity-10 p-3 rounded-lg">
                    <FaSearch className="text-fendr-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Smart Search</h4>
                    <p className="text-gray-600">Find fresh, quality produce from verified farmers near you</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-primary bg-opacity-10 p-3 rounded-lg">
                    <FaShoppingCart className="text-fendr-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Easy Ordering</h4>
                    <p className="text-gray-600">Place orders, track deliveries, and manage your inventory seamlessly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-accent bg-opacity-10 p-3 rounded-lg">
                    <FaTruck className="text-fendr-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Reliable Logistics</h4>
                    <p className="text-gray-600">Enjoy fast, reliable delivery with real-time tracking and quality guarantees</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fendr-primary bg-opacity-10 p-3 rounded-lg">
                    <FaBox className="text-fendr-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fendr-secondary mb-2">Farm Boxes</h4>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fendr-secondary mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating positive change across Nigeria's agricultural landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-fendr-primary to-amber-600 p-8 rounded-2xl text-white text-center card-hover">
              <FaLeaf className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">30-50%</div>
                  <div className="text-sm">Higher income for farmers</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">15-25%</div>
                  <div className="text-sm">Cost savings for buyers</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-fendr-accent to-emerald-700 p-8 rounded-2xl text-white text-center card-hover">
              <FaUsers className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Social Impact</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm">Farmers empowered</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-sm">Lives improved</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-fendr-secondary to-gray-800 p-8 rounded-2xl text-white text-center card-hover">
              <FaGlobeAfrica className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">National Relevance</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold">36</div>
                  <div className="text-sm">States covered</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fendr-secondary mb-4">Vision Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our strategic plan to transform Nigerian agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="bg-fendr-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-fendr-secondary mb-4">Short Term</h3>
              <p className="text-gray-600 mb-4">Launch pilot program in 5 key agricultural states with 10,000 farmers</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Mobile app development</li>
                <li>• Farmer onboarding</li>
                <li>• Initial buyer network</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="bg-fendr-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-fendr-secondary mb-4">Medium Term</h3>
              <p className="text-gray-600 mb-4">Expand to 20 states, integrate payment systems and logistics network</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Payment integration</li>
                <li>• Logistics partnerships</li>
                <li>• Data analytics platform</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="bg-fendr-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-fendr-secondary mb-4">Long Term</h3>
              <p className="text-gray-600 mb-4">Pan-African marketplace leadership with advanced agricultural technology</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• African expansion</li>
                <li>• AI-powered farming insights</li>
                <li>• Blockchain integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fendr-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Agricultural Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the movement that's transforming Nigerian agriculture and empowering farmers nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">Get Started as Farmer</button>
            <button className="btn-secondary text-lg">Get Started as Buyer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;