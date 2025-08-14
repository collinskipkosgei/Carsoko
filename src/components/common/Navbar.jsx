import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in on page load
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/"); // go back to home after logout
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
         <span className='font-bold text-xl'>Carsokoni</span>
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center space-x-12">
          <Link to="/">Home</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right-side buttons */}
        <div className="hidden md:flex space-x-2">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Go Back
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-600 text-red-600 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-800 text-2xl"
          >
            {mobileOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu />}
    </nav>
  );
}
