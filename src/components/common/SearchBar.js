import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
        <div className="relative flex-shrink-0">
          <select 
            className="w-full sm:w-24 px-2 py-2 bg-gray-700 text-white rounded-md sm:rounded-r-none border-r border-gray-600 focus:outline-none appearance-none cursor-pointer"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow px-4 py-2 bg-white text-gray-900 focus:outline-none rounded-l-md sm:rounded-none border-gray-300"
          />
          <button
            type="submit"
            className="px-4 sm:px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-r-md whitespace-nowrap flex-shrink-0"
          >
            <span className="hidden sm:inline">Search</span>
            <svg className="h-5 w-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;