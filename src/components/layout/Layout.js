import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;