import React from 'react';
import Footer from '../components/common/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-4xl mx-auto py-12 px-4 flex-1">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Car Sokoni</h1>
        <p className="text-lg text-gray-700 mb-6">
          Car Sokoni is Kenya's modern car marketplace, designed to make buying and selling vehicles simple, transparent, and enjoyable. Our platform brings together thousands of listings from trusted dealers and private sellers, giving you the power to find your perfect car with confidence.
        </p>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Why Choose Car Sokoni?</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li><span className="font-bold">Wide Selection:</span> Browse a diverse range of new and used cars, SUVs, and trucks from across Kenya.</li>
            <li><span className="font-bold">Trusted Sellers:</span> All listings are verified for your peace of mind.</li>
            <li><span className="font-bold">Smart Search:</span> Filter by make, model, price, location, and more to find exactly what you need.</li>
            <li><span className="font-bold">Transparent Pricing:</span> No hidden fees—see the real price up front.</li>
            <li><span className="font-bold">Expert Support:</span> Our team is here to guide you every step of the way, from browsing to after-sales service.</li>
          </ul>
        </div>
        <p className="text-md text-gray-600 italic mb-4">
          Whether you're a first-time buyer or a seasoned car enthusiast, Car Sokoni is your trusted partner for a smooth, secure, and rewarding car shopping experience.
        </p>
        <p className="text-md text-gray-600">Ready to start your journey? Explore our listings and discover your next car today!</p>
      </div>
      <Footer />
    </div>
  );
}