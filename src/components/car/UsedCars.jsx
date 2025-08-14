import React from 'react';
import Footer from '../../components/common/Footer';
import { useSelector } from 'react-redux';
import { formatKES } from '../../utils/formatCurrency';
export default function UsedCars(){ 
  const cars = useSelector(state=> state.cars.items.filter(c=> c.year<2022));
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow p-4">
            <img src={car.images[0]} alt={car.model} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{car.brand} {car.model}</h2>
            <p className="text-gray-700">{formatKES(car.price)}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}