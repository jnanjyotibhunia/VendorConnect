import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Truck, Users, BarChart3, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold text-gray-900">VendorConnect</span>
            </div>
            <Link
              to="/auth"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Connecting Street Food
                <span className="text-orange-500"> Vendors</span> with
                <span className="text-green-600"> Suppliers</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Streamline your supply chain, discover trusted suppliers, and grow your street food business 
                with India's most comprehensive vendor-supplier platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/auth"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Join as Vendor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/auth"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Join as Supplier
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900">5000+</h3>
                    <p className="text-gray-600">Active Vendors</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">1200+</h3>
                    <p className="text-gray-600">Verified Suppliers</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">₹50L+</h3>
                    <p className="text-gray-600">Monthly GMV</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">4.8★</h3>
                    <p className="text-gray-600">User Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From supplier discovery to order management, we provide all the tools to streamline your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Smart Discovery',
                description: 'Find nearby suppliers with AI-powered matching based on your location and needs',
                color: 'bg-orange-100 text-orange-600'
              },
              {
                icon: BarChart3,
                title: 'Price Comparison',
                description: 'Compare prices across multiple suppliers to get the best deals for your business',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: ShoppingCart,
                title: 'Easy Ordering',
                description: 'Place orders with just a few clicks and track delivery in real-time',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Users,
                title: 'Group Buying',
                description: 'Join other vendors for bulk orders and unlock better pricing',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: Star,
                title: 'Quality Assured',
                description: 'All suppliers are verified with ratings and reviews from other vendors',
                color: 'bg-pink-100 text-pink-600'
              },
              {
                icon: Truck,
                title: 'Reliable Delivery',
                description: 'Track your orders and get reliable delivery to your location',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to transform your supply chain</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Vendors */}
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-8 flex items-center">
                <Users className="mr-3 h-8 w-8" />
                For Street Food Vendors
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Sign Up & Complete Profile', desc: 'Register and tell us about your food business' },
                  { step: '2', title: 'Discover Suppliers', desc: 'Browse verified suppliers in your area' },
                  { step: '3', title: 'Compare & Order', desc: 'Compare prices and place orders easily' },
                  { step: '4', title: 'Track & Receive', desc: 'Monitor delivery and rate your experience' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Suppliers */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-8 flex items-center">
                <Truck className="mr-3 h-8 w-8" />
                For Suppliers
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Register & Get Verified', desc: 'Complete verification to build trust' },
                  { step: '2', title: 'Add Products', desc: 'Upload your product catalog with prices' },
                  { step: '3', title: 'Receive Orders', desc: 'Get notified of new orders instantly' },
                  { step: '4', title: 'Fulfill & Grow', desc: 'Process orders and expand your business' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VendorConnect?</h2>
            <p className="text-xl text-gray-600">Join thousands of vendors and suppliers already growing their business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Save 30% on Costs', desc: 'Better prices through group buying and supplier competition' },
              { title: 'Save 5 Hours/Week', desc: 'Automated ordering and inventory management' },
              { title: '99% Order Accuracy', desc: 'Digital orders eliminate miscommunication' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support in local languages' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join VendorConnect today and be part of India's largest street food supply chain network
          </p>
          <Link
            to="/auth"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingCart className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-2xl font-bold">VendorConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting street food vendors with trusted suppliers across India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Vendors</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Find Suppliers</li>
                <li>Compare Prices</li>
                <li>Track Orders</li>
                <li>Group Buying</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Suppliers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Manage Orders</li>
                <li>Analytics Dashboard</li>
                <li>Inventory Management</li>
                <li>Customer Insights</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VendorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}