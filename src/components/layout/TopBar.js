import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-primary-dark">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary-light text-sm">
              Free shipping on orders over 100 USDC
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary-light hover:text-white text-sm">
              Track Order
            </a>
            <a href="#" className="text-primary-light hover:text-white text-sm">
              Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;