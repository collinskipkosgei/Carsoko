import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * FeaturedCars
 * - search by name/model (case-insensitive)
 * - filter by price ranges
 * - View Details button navigates to /cars/:id
 */

const cars = [
  { id: 1, name: "Toyota Harrier", image: "https://images.unsplash.com/photo-1650436795838-6a9a214129d3?q=80&w=1163&auto=format&fit=crop", priceKES: 2800000, desc: "Reliable SUV, comfortable and fuel efficient." },
  { id: 2, name: "Mazda CX-5", image: "https://images.unsplash.com/photo-1614934415583-8da3f89f45ad?q=80&w=764&auto=format&fit=crop", priceKES: 3400000, desc: "Sporty compact SUV with great handling." },
  { id: 3, name: "BMW X5", image: "https://images.unsplash.com/photo-1590177059002-a09b88ab1167?q=80&w=1175&auto=format&fit=crop", priceKES: 9800000, desc: "Luxury performance SUV." },
  { id: 4, name: "Mercedes-Benz C-Class", image: "https://images.unsplash.com/photo-1475609678816-d013f834a053?q=80&w=1170&auto=format&fit=crop", priceKES: 7600000, desc: "Comfort and elegance in one package." },
  { id: 5, name: "Audi Q5", image: "https://images.unsplash.com/photo-1637677121980-6f39c0b61500?q=80&w=752&auto=format&fit=crop", priceKES: 8200000, desc: "Premium crossover with modern tech." },
];

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);


export default function FeaturedCars() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const navigate = useNavigate();

  const filtered = cars.filter((c) => {
    const matchesName = c.name.toLowerCase().includes(search.trim().toLowerCase());
    let matchesPrice = true;

    if (priceFilter === "under3m") matchesPrice = c.priceKES <= 3000000;
    if (priceFilter === "3to7m") matchesPrice = c.priceKES > 3000000 && c.priceKES <= 7000000;
    if (priceFilter === "7mplus") matchesPrice = c.priceKES > 7000000;

    return matchesName && matchesPrice;
  });

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Featured Cars</h2>
          <p className="text-gray-600 mt-2">Explore top deals picked just for you</p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or model..."
            className="border px-4 py-2 rounded w-full md:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Prices</option>
            <option value="under3m">KES 0 - KES 3,000,000</option>
            <option value="3to7m">KES 3,000,001 - KES 7,000,000</option>
            <option value="7mplus">KES 7,000,001 +</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length ? (
            filtered.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={car.image} alt={car.name} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{car.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-red-600 font-bold">{KES(car.priceKES)}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/cars/${car.id}`)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => navigate(`/vehicles?highlight=${car.id}`)}
                        className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                      >
                        Buy / Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">No cars match your search.</div>
          )}
        </div>
      </div>
    </section>
  );
}
