import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHome, 
  FiDollarSign, 
  FiShield, 
  FiBook, 
  FiInfo, 
  FiImage, 
  FiMail, 
  FiLogIn, 
  FiShoppingCart,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

export default function MobileMenu() {
  const [openBuyCar, setOpenBuyCar] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);

  const toggleBuyCar = () => setOpenBuyCar(!openBuyCar);
  const toggleBlog = () => setOpenBlog(!openBlog);

  return (
    <div className="md:hidden bg-white shadow-lg z-50">
      <div className="px-6 py-4 space-y-4">
        {/* Home */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FiHome className="text-lg" />
          <span>Home</span>
        </Link>

        {/* Buy Car Dropdown */}
        <div className="border-b border-gray-100 pb-2">
          <button 
            onClick={toggleBuyCar}
            className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 transition-colors"
            aria-expanded={openBuyCar}
            aria-controls="buy-car-submenu"
          >
            <div className="flex items-center space-x-3">
              <FiDollarSign className="text-lg" />
              <span>Buy Car</span>
            </div>
            {openBuyCar ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          {openBuyCar && (
            <div id="buy-car-submenu" className="pl-9 mt-2 space-y-3">
              <Link 
                to="/new-cars" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                New Cars for Sale
              </Link>
              <Link 
                to="/listings" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Used Cars for Sale
              </Link>
              <Link 
                to="/foreign-used-cars" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Foreign Used Cars
              </Link>
            </div>
          )}
        </div>

        {/* Finance & Insurance */}
        <Link 
          to="/finance-application" 
          className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FiDollarSign className="text-lg" />
          <span>Finance Application</span>
        </Link>
        
        <Link 
          to="/insurance" 
          className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FiShield className="text-lg" />
          <span>Insurance</span>
        </Link>

        {/* Blog Dropdown */}
        <div className="border-b border-gray-100 pb-2">
          <button 
            onClick={toggleBlog}
            className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 transition-colors"
            aria-expanded={openBlog}
            aria-controls="blog-submenu"
          >
            <div className="flex items-center space-x-3">
              <FiBook className="text-lg" />
              <span>Blog</span>
            </div>
            {openBlog ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          {openBlog && (
            <div id="blog-submenu" className="pl-9 mt-2 space-y-3">
              <Link 
                to="/about" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Blog Articles
              </Link>
              <Link 
                to="/gallery" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Gallery
              </Link>
            </div>
          )}
        </div>

        {/* Contact */}
        <Link 
          to="/contact" 
          className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FiMail className="text-lg" />
          <span>Contact</span>
        </Link>

        {/* Auth Buttons */}
        <div className="pt-4 space-y-3">
          <Link 
            to="/login" 
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiLogIn />
            <span>Login</span>
          </Link>
          <Link 
            to="/cart" 
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <FiShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}