import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatKES } from '../utils/formatCurrency';
export default function CarListings(){
  const cars = useSelector(s=>s.cars.items);
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded shadow p-4">
            <img src={car.images[0]} className="w-full h-44 object-cover rounded" alt=""/>
            <h3 className="mt-2 font-semibold">{car.brand} {car.model} ({car.year})</h3>
            <p className="text-red-600 font-bold">{formatKES(car.price)}</p>
            <p className="text-sm text-gray-600">{car.description}</p>
            <div className="mt-2 flex gap-2"><Link to={'/car/'+car.id} className="text-blue-600">Details</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}