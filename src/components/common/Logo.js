import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <img 
          src="/logo.svg" 
          alt="VelvetCoin"
          className="h-8 w-8 object-contain"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
        />
      </div>
      <span className="ml-2 text-xl font-bold tracking-tight whitespace-nowrap">
        Velvet<span className="text-yellow-400">Coin</span>
      </span>
    </Link>
  );
};

export default Logo;