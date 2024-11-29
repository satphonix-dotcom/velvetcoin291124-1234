import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/orders" className="text-yellow-600 hover:text-yellow-700">Track Your Order</Link>
            </li>
            <li>
              <Link to="/returns" className="text-yellow-600 hover:text-yellow-700">Returns & Refunds</Link>
            </li>
            <li>
              <Link to="/shipping" className="text-yellow-600 hover:text-yellow-700">Shipping Information</Link>
            </li>
            <li>
              <Link to="/faq" className="text-yellow-600 hover:text-yellow-700">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-4">Our support team is available 24/7</p>
          <ul className="space-y-2">
            <li>Email: support@velvetcoin.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Live Chat: Available 24/7</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
          <ul className="space-y-2">
            <li>How to pay with USDC</li>
            <li>Vendor registration process</li>
            <li>Order cancellation</li>
            <li>Account security</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Common Issues</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[
              {
                question: "I haven't received my order",
                answer: "Check your order status in your account. If it shows as delivered but you haven't received it, contact support."
              },
              {
                question: "How do I connect my crypto wallet?",
                answer: "Click the 'Connect Wallet' button in the top right corner and follow the prompts to connect your preferred wallet."
              },
              {
                question: "Can I change my shipping address?",
                answer: "You can change the shipping address for pending orders through your account dashboard."
              }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;