import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

/**
 * FeaturedCars
 * - search by name/model (case-insensitive)
 * - filter by price ranges
 * - View Details button navigates to /cars/:id
 */

const API_URL = "http://localhost:3300/cars";

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);


export default function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL)
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

  const filtered = cars.filter((c) => {
    const matchesName = (c.name || '').toLowerCase().includes(search.trim().toLowerCase());
    let matchesPrice = true;
    const price = c.priceKES || c.price;

    if (priceFilter === "under3m") matchesPrice = price <= 3000000;
    if (priceFilter === "3to7m") matchesPrice = price > 3000000 && price <= 7000000;
    if (priceFilter === "7mplus") matchesPrice = price > 7000000;

    return matchesName && matchesPrice;
  });

  if (loading) return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    </section>
  );

  if (error) return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-red-600 text-center p-4 bg-red-50 rounded-lg">
          Failed to load cars. Please try again later.<br />{error}
        </div>
      </div>
    </section>
  );

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
                  <p className="text-sm text-gray-600 mt-1">{car.desc || car.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-red-600 font-bold">{KES(car.priceKES || car.price)}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/cars/${car.id}`)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          dispatch({
                            type: 'cart/addToCart',
                            payload: {
                              id: car.id,
                              name: car.name,
                              price: car.priceKES || car.price,
                              image: car.image,
                              quantity: 1
                            }
                          });
                          navigate('/cart');
                        }}
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
