import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatKES } from '../utils/formatCurrency';
import { FaCar, FaGasPump, FaTachometerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function CarListings() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCars, setVisibleCars] = useState(6);

  useEffect(() => {
    fetch('http://localhost:3300/cars')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleCars(prev => prev + 6);
  };

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
        Failed to load car listings. Please try again later.<br />{error}
      </div>
    </div>
  );

  if (!cars?.length) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <FaCar className="mx-auto text-4xl text-gray-400 mb-4" />
        <p className="text-gray-600">No cars available at the moment</p>
        <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
          Back to homepage
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Available Vehicles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, visibleCars).map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={car.images[0] || '/images/car-placeholder.jpg'} 
                  className="w-full h-48 object-cover"
                  alt={`${car.brand} ${car.model}`}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/car-placeholder.jpg'
                  }}
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {car.featured ? 'Featured' : 'Available'}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-red-600 font-bold">{formatKES(car.price)}</p>
                </div>

                <p className="text-gray-600 text-sm mt-1">{car.year}</p>

                <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaTachometerAlt className="mr-2" />
                    {car.mileage} km
                  </div>
                  <div className="flex items-center">
                    <FaGasPump className="mr-2" />
                    {car.fuelType}
                  </div>
                  <div className="flex items-center">
                    <FaCar className="mr-2" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {car.year}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                  {car.description}
                </p>

                <Link 
                  to={`/car/${car.id}`}
                  className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCars < cars.length && (
          <div className="mt-8 text-center">
            <button 
              onClick={loadMore}
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors duration-200"
            >
              Load More Vehicles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}