import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Electronics', icon: '📱', description: 'Latest gadgets and tech' },
    { name: 'Clothing', icon: '👕', description: 'Fashion for everyone' },
    { name: 'Books', icon: '📚', description: 'Digital and physical books' },
    { name: 'Home & Kitchen', icon: '🏠', description: 'Everything for your home' },
    { name: 'Sports', icon: '⚽', description: 'Sports gear and equipment' },
    { name: 'Beauty', icon: '💄', description: 'Beauty and personal care' },
    { name: 'Toys', icon: '🎮', description: 'Games and entertainment' },
    { name: 'Automotive', icon: '🚗', description: 'Car parts and accessories' }
  ];

  const features = [
    {
      title: 'Secure Payments',
      description: 'Shop confidently with USDC cryptocurrency payments',
      icon: '🔒'
    },
    {
      title: 'Fast Delivery',
      description: 'Free shipping on orders over 100 USDC',
      icon: '🚚'
    },
    {
      title: 'Verified Vendors',
      description: 'All sellers are thoroughly vetted for quality',
      icon: '✓'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=2400&q=80"
          alt="VelvetCoin Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Shop with Crypto
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                Experience the future of e-commerce with VelvetCoin. Shop securely using USDC cryptocurrency.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/products"
                  className="inline-block bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-500 rounded-md"
                >
                  Start Shopping
                </Link>
                <Link
                  to="/register"
                  className="inline-block bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 rounded-md"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Choose VelvetCoin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{category.icon}</span>
              <span className="text-gray-900 font-medium block mb-1">{category.name}</span>
              <span className="text-sm text-gray-500">{category.description}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of vendors already selling on VelvetCoin. Low fees, secure payments, and access to crypto-savvy customers.
          </p>
          <Link
            to="/vendor/register"
            className="inline-block bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-500 rounded-md"
          >
            Become a Vendor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;