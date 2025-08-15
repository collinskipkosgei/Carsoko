import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCar,
  FaHome,
  FaDollarSign,
  FaHandshake
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">CarSoko</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in vehicle acquisition. We simplify car buying with transparent 
              pricing, quality assurance, and exceptional customer service.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
              <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
              <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-grey-400">
              <FooterLink to="/" icon={<FaHome size={14} />} text="Home" />
              <FooterLink to="/new-cars" icon={<FaCar size={14} />} text="New Cars" />
              <FooterLink to="/used-cars" icon={<FaCar size={14} />} text="Used Cars" />
              <FooterLink to="/sell-car" icon={<FaDollarSign size={14} />} text="Sell Your Car" />
              <FooterLink to="/finance" icon={<FaHandshake size={14} />} text="Financing" />
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <ContactInfo 
                icon={<FaEnvelope />} 
                text="info@carsokoni.com" 
                href="mailto:info@carsokoni.com" 
              />
              <ContactInfo 
                icon={<FaPhoneAlt />} 
                text="+254 00000 678" 
                href="tel:+25400000678" 
              />
              <ContactInfo 
                icon={<FaMapMarkerAlt />} 
                text="Nairobi, Kenya" 
                href="https://maps.google.com/?q=Nairobi,Kenya" 
              />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to get updates on new arrivals and special offers
            </p>
            <form className="mt-2 space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {currentYear} Car Soko Limited. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable components
function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, icon, text }) {
  return (
    <li>
      <Link 
        to={to} 
        className="flex items-center space-x-2 hover:text-white transition-colors"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
}

function ContactInfo({ icon, text, href }) {
  return (
    <li className="flex items-start space-x-3">
      <span className="text-gray-500 mt-0.5">{icon}</span>
      <a 
        href={href} 
        className="hover:text-white transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </li>
  );
}