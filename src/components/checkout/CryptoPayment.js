import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processPayment } from '../../store/slices/paymentSlice';

const CryptoPayment = ({ orderId, amount }) => {
  const dispatch = useDispatch();
  const { loading, error, transactionHash } = useSelector(state => state.payment);
  const [walletAddress, setWalletAddress] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      await dispatch(processPayment({
        orderId,
        paymentDetails: {
          amount,
          currency: 'USDC',
          walletAddress
        }
      })).unwrap();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Pay with USDC</h2>
      
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {transactionHash ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>Payment successful!</p>
          <p className="text-sm mt-1">Transaction Hash: {transactionHash}</p>
        </div>
      ) : (
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount to Pay
            </label>
            <div className="text-2xl font-bold text-gray-900">
              {amount} USDC
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Wallet Address
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your wallet address"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-md font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <p>Payment will be processed securely using the USDC smart contract.</p>
        <p className="mt-2">Make sure you have sufficient USDC in your wallet before proceeding.</p>
      </div>
    </div>
  );
};

export default CryptoPayment;