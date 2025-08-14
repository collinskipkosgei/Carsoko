import React, { useEffect } from 'react';
import CarIntro from '../components/common/CarIntro';
import FeaturedCars from '../components/car/FeaturedCars';
import Feedback from '../components/common/Feedback';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../store/slices/carsSlice';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const heroBg = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0";

  return (
    <div className="relative bg-gray-100 min-h-screen">
      <div
        className="relative h-[420px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-6">
              Find your <span className="text-red-600 underline">perfect</span> car
            </h1>
            <div className="grid md:grid-cols-4 gap-4 items-end">
              <input type="text" placeholder="Car Make" className="p-3 border rounded-md w-full" />
              <input type="text" placeholder="Car Model" className="p-3 border rounded-md w-full" />
              <input type="text" placeholder="Price Range" className="p-3 border rounded-md w-full" />
              <button className="bg-blue-600 text-white flex items-center justify-center p-3 rounded-md w-full hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-20 py-8 bg-white rounded-lg shadow-lg">
        <CarIntro />
      </div>
      <div className="px-4 md:px-20 py-8 bg-white rounded-lg shadow-lg mt-10">
        <FeaturedCars />
      </div>
      <div className="px-4 md:px-20 py-8 bg-white rounded-lg shadow-lg mt-10">
        <Feedback />
      </div>
    </div>
  );
}
