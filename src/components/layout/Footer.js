import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <button
        onClick={scrollToTop}
        className="w-full bg-gray-800 hover:bg-gray-700 py-4 text-sm"
      >
        Back to top
      </button>

      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-gray-300 text-sm">
              Your trusted cryptocurrency marketplace for secure and seamless shopping.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press Releases</Link></li>
              <li><Link to="/impact" className="hover:underline">Community Impact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/vendor/register" className="hover:underline">Become a Vendor</Link></li>
              <li><Link to="/affiliate" className="hover:underline">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:underline">Advertise Your Products</Link></li>
              <li><Link to="/sell" className="hover:underline">Sell products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-800">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <select className="bg-gray-800 text-gray-300 px-2 py-1 rounded">
                <option>English</option>
                <option>Español</option>
              </select>
              <select className="bg-gray-800 text-gray-300 px-2 py-1 rounded">
                <option>USD - U.S. Dollar</option>
                <option>EUR - Euro</option>
              </select>
              <select className="bg-gray-800 text-gray-300 px-2 py-1 rounded">
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <div className="space-x-4">
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} VelvetCoin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;