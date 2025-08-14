import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "./Cart";

const KES = (n) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(n);

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">🚗 Car not found</h2>
        <button
          onClick={() => navigate("/vehicles")}
          className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          View All Vehicles
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-sm text-blue-700 hover:underline mb-4"
      >
        ← Go Back
      </button>

      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{car.name}</h1>
          <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
            <div className="text-orange-500 text-2xl font-bold">
              {KES(car.priceKES)}
            </div>
            <button
              onClick={() => navigate("/cart")}
              className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 shadow-md transition"
            >
              🛒 Add to Cart / Buy
            </button>
          </div>

          <p className="mt-4 text-gray-700">{car.desc}</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(car.specs).map(([key, value]) => (
              <div
                key={key}
                className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold capitalize text-gray-800">
                  {key}
                </h4>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
