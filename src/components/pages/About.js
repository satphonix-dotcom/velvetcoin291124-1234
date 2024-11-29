import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Active Users', value: '100K+' },
    { label: 'Products Listed', value: '500K+' },
    { label: 'Verified Vendors', value: '10K+' },
    { label: 'Countries Served', value: '50+' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About VelvetCoin</h1>
        <p className="text-xl text-gray-600">
          Revolutionizing e-commerce through the power of cryptocurrency
        </p>
      </div>

      <div className="prose max-w-none mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2024, VelvetCoin emerged from a simple vision: to make cryptocurrency payments as seamless as traditional shopping. We recognized the growing adoption of digital currencies and the need for a platform that bridges the gap between crypto holders and everyday commerce.
          </p>
          <p>
            Today, we're proud to be at the forefront of crypto-commerce, offering a secure and user-friendly marketplace where customers can shop with confidence using USDC, and vendors can expand their reach into the crypto economy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            To create a global marketplace that makes cryptocurrency payments accessible, secure, and convenient for everyone. We're committed to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Providing a secure and transparent trading environment</li>
            <li>Supporting the adoption of cryptocurrency in everyday commerce</li>
            <li>Empowering vendors with tools to reach crypto-savvy customers</li>
            <li>Offering competitive fees and fast settlement times</li>
            <li>Maintaining the highest standards of customer service</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Whether you're a shopper looking to spend your crypto or a vendor ready to expand your business, VelvetCoin is here to support your journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-500"
            >
              Create an Account
            </Link>
            <Link
              to="/vendor/register"
              className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100"
            >
              Become a Vendor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;