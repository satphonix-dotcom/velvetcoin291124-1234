import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I pay with USDC?</h2>
          <p className="text-gray-600">Connect your crypto wallet and complete the checkout process. We accept USDC payments on multiple networks.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">What is your shipping policy?</h2>
          <p className="text-gray-600">We offer free shipping on orders over $100. Standard shipping takes 3-5 business days.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I become a vendor?</h2>
          <p className="text-gray-600">Register for a vendor account and complete our verification process to start selling on VelvetCoin.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">What is your return policy?</h2>
          <p className="text-gray-600">We offer a 30-day return policy for most items. Contact customer support to initiate a return.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;