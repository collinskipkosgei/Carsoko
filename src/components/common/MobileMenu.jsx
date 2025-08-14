import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function MobileMenu(){ 
  const [openBuyCar, setOpenBuyCar] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  return (
    <div className="md:hidden px-4 py-2 space-y-2 bg-white z-40">
      <Link to="/" className="block">Home</Link>
      <button onClick={() => setOpenBuyCar(!openBuyCar)} className="flex justify-between w-full">Buy Car<span>{openBuyCar ? "▲" : "▼"}</span></button>
      {openBuyCar && (<div className="pl-4 space-y-1"><Link to="/new-cars">New Cars for Sale</Link><Link to="/listings">Used Cars for Sale</Link><Link to="/foreign-used-cars">Foreign Used Cars</Link></div>)}
      <Link to="/finance-application">Finance Application</Link>
      <Link to="/insurance">Insurance</Link>
      <button onClick={() => setOpenBlog(!openBlog)} className="flex justify-between w-full">Blog<span>{openBlog ? "▲" : "▼"}</span></button>
      {openBlog && (<div className="pl-6 space-y-2"><Link to="/about">About Us</Link><Link to="/blog">Blog</Link><Link to="/gallery">Gallery</Link></div>)}
      <Link to="/contact">Contact</Link>
      <div className="mt-4 space-y-2">
        <Link to="/login" className="block px-4 py-2 bg-blue-600 text-white rounded text-center">Login</Link>
        <Link to="/cart" className="block px-4 py-2 border border-blue-600 text-blue-600 rounded text-center">Cart</Link>
      </div>
    </div>
  );
}
