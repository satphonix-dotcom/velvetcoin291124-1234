import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Methods</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="font-medium">Standard Shipping</h3>
                <p className="text-gray-600">Delivery in 5-7 business days</p>
              </div>
              <p className="font-medium">$9.99</p>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h3 className="font-medium">Express Shipping</h3>
                <p className="text-gray-600">Delivery in 2-3 business days</p>
              </div>
              <p className="font-medium">$19.99</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Next Day Delivery</h3>
                <p className="text-gray-600">Order by 2 PM for next-day delivery</p>
              </div>
              <p className="font-medium">$29.99</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Free Shipping</h2>
          <p className="text-gray-600 mb-4">
            Enjoy free standard shipping on all orders over 100 USDC. Some exclusions may apply.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Free shipping promotion applies to standard shipping only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Restrictions</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Some items may be restricted from shipping to certain locations</li>
            <li>International shipping is available for select countries</li>
            <li>Additional fees may apply for oversized or heavy items</li>
            <li>P.O. boxes may have delivery restrictions</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Track Your Order</h2>
          <p className="text-gray-600 mb-4">
            Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard.
          </p>
          <a
            href="/orders"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-500"
          >
            View Your Orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shipping;