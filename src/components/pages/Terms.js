import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: January 1, 2024</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
        <p>By accessing or using VelvetCoin, you agree to be bound by these Terms of Service.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
        <p>Users are responsible for maintaining the security of their accounts and wallet information.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Activities</h2>
        <p>Users may not engage in any fraudulent activities or attempt to manipulate the platform.</p>
      </div>
    </div>
  );
};

export default Terms;