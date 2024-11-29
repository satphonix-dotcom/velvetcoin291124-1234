import React from 'react';

const Returns = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Returns & Refunds</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4">Return Policy</h2>
        <p>We offer a 30-day return policy for most items. Items must be unused and in their original packaging.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How to Return</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log into your account and go to your orders</li>
          <li>Select the order and items you want to return</li>
          <li>Print the return shipping label</li>
          <li>Package your items securely</li>
          <li>Drop off the package at any authorized shipping location</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">Refund Process</h2>
        <p>Once we receive and inspect your return, we'll process your refund in USDC to your original payment wallet. Please allow 5-7 business days for the refund to appear in your wallet.</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Note</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>Some items are not eligible for return. Please check the product description for details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;