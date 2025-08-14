import React from 'react';
import Footer from '../components/common/Footer';
export default function Contacts(){ return (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10">Let's <span className="text-red-600">Connect</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6"><h3 className="text-2xl font-semibold mb-2">Get in Touch</h3><p className="text-gray-500">We’d love to hear from you!</p></div>
        <form className="bg-white rounded-lg shadow-lg p-6 space-y-5"><input placeholder="Your Name" className="w-full px-4 py-2" /><input placeholder="Email" className="w-full px-4 py-2" /><textarea rows={4} placeholder="Message" className="w-full px-4 py-2" /><button className="w-full bg-red-600 text-white py-2">Send Message</button></form>
      </div>
    </div>
  </div>
); }