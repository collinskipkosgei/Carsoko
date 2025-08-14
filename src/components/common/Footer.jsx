import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        <div><img src="https://carsoko.net/static/assets/icons/final.png" alt="Car Soko Logo" className="w-20 mb-4" /><h2 className="text-xl font-bold mb-2">Car Soko</h2><p className="text-gray-400 text-sm">Everything about a car should make your life simpler.</p></div>
        <div><h3 className="text-lg font-semibold mb-4">Quick Links</h3><ul className="space-y-2 text-gray-400 text-sm"><li><a href="#">Home</a></li><li><a href="#">New Cars</a></li><li><a href="#">Used Cars</a></li><li><a href="#">Sell Your Car</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h3 className="text-lg font-semibold mb-4">Contact</h3><ul className="text-gray-400 text-sm space-y-2"><li>Email: info@carsoko.com</li><li>Phone: +254 712 345 678</li><li>Location: Nairobi, Kenya</li></ul></div>
        <div><h3 className="text-lg font-semibold mb-4">Follow Us</h3><div className="flex space-x-4 text-gray-400"><a href="#"><FaFacebookF className="hover:text-white" /></a><a href="#"><FaTwitter className="hover:text-white" /></a><a href="#"><FaInstagram className="hover:text-white" /></a><a href="#"><FaLinkedinIn className="hover:text-white" /></a></div></div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">&copy; {new Date().getFullYear()} Car Soko Limited. All rights reserved.</div>
    </footer>
  );
}
