import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full bg-gray-900">
      {/* Top nav */}
      <div className="w-full bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-gray-400 h-8">
            <div className="hidden sm:flex items-center space-x-4">
              <Link to="/shipping" className="hover:text-white">Shipping</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-gray-800 text-gray-400 focus:outline-none">
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 py-4 items-center">
            {/* Logo */}
            <div className="col-span-12 lg:col-span-2 flex items-center justify-between">
              <Logo className="text-white" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block col-span-12 lg:col-span-5`}>
              <SearchBar />
            </div>

            {/* Right nav */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block col-span-12 lg:col-span-5 flex flex-col lg:flex-row lg:items-center lg:justify-end space-y-4 lg:space-y-0`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                {isAuthenticated ? (
                  <div className="text-white text-center lg:text-left">
                    <div className="text-xs">Hello, {user?.username}</div>
                    <button 
                      onClick={handleLogout} 
                      className="font-bold hover:text-yellow-500 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className="text-white block hover:text-yellow-500 transition-colors text-center lg:text-left"
                  >
                    <div className="text-xs">Hello, sign in</div>
                    <div className="font-bold">Account & Lists</div>
                  </Link>
                )}

                <Link 
                  to="/orders" 
                  className="text-white block hover:text-yellow-500 transition-colors text-center lg:text-left"
                >
                  <div className="text-xs">Returns</div>
                  <div className="font-bold whitespace-nowrap">& Orders</div>
                </Link>

                <Link 
                  to="/cart" 
                  className="flex items-center justify-center lg:justify-start text-white hover:text-yellow-500 transition-colors"
                >
                  <div className="relative">
                    {items.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {items.length}
                      </span>
                    )}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                      />
                    </svg>
                  </div>
                  <span className="font-bold ml-2">Cart</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Categories nav */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block py-2`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0 text-white">
              <Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link>
              <Link to="/faq" className="hover:text-yellow-500 transition-colors">FAQ</Link>
              <Link to="/shipping" className="hover:text-yellow-500 transition-colors">Shipping</Link>
              <Link to="/returns" className="hover:text-yellow-500 transition-colors">Returns</Link>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
              {user?.role === 'admin' && (
                <Link to="/admin/pages" className="hover:text-yellow-500 transition-colors">Manage Pages</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;