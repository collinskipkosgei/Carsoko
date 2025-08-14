import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

/**
 * FeaturedCars
 * - search by name/model (case-insensitive)
 * - filter by price ranges
 * - View Details button navigates to /cars/:id
 */

const cars = [
  { id: 1, name: "Blue Chevrolet", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=870&auto=format&fit=crop", priceKES: 12800000, desc: "Reliable SUV, comfortable and fuel efficient.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "12 km/l", seats: 5 } },
  { id: 2, name: "Ford", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=870&auto=format&fit=crop", priceKES: 7400000, desc: "Sporty compact SUV with great handling.", specs: { engine: "2.5L", transmission: "Automatic", mileage: "11 km/l", seats: 5 } },
  { id: 3, name: "Mazda Atenza", image: "https://imgs.search.brave.com/rBODgBp3xSjAlqot7lFTJ-6rMpnOqNYkPiaaPCn5anM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGMtdi5jb20vY2Ru/L2N2bWF0ZXJpYWxz/L21vZGVsaW1hZ2Vz/L2dhbGxlcnkvNS8y/MzExMzIuanBnP3dp/ZHRoPTYwJmhlaWdo/dD00NSZ0eXBlPXJl/c2l6ZQ", priceKES: 3800000, desc: "Luxury performance Sedan.", specs: { engine: "3.0L", transmission: "Automatic", mileage: "9 km/l", seats: 5 } },
  { id: 4, name: "Mercedes-Benz C-Class", image: "https://imgs.search.brave.com/GTXAHP9FkfSyKAQSgI8UfFOV9YjAYfNelEtZntFFdUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNhcmJ1enpp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNS9j/cm9wcGVkLTEzYTg3/Ni0xLmpwZz9xPTQ5/JmZpdD1jcm9wJnc9/MzYwJmg9MjQwJmRw/cj0y", priceKES: 7600000, desc: "Comfort and elegance in one package.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
  { id: 5, name: "Audi Q5", image: "https://imgs.search.brave.com/TmFh--eB74RGYTJTmXrMqqjibdosj_1UjFZ_-S8Q320/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/QXVkaS9RNS8xMDU1/Ni8xNjg5NTk0NDE2/OTI1L2Zyb250LWxl/ZnQtc2lkZS00Ny5q/cGc_dHI9dy0yMzA", priceKES: 8200000, desc: "Premium crossover with modern tech.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
  { id: 6, name: "Ford Ranger Lariat", image: "https://imgs.search.brave.com/mEPnX8LEygoNFsfLG0YuWFpyDHMwLTzTPoHSsrWQUgk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LWZvcmQtcmFuZ2Vy/LWxhcmlhdC0yMDUt/NjZmZDViNzg5ZGMx/YS5qcGc_Y3JvcD0w/LjcyMXh3OjAuNjA3/eGg7MC4yMjl4dyww/LjMwMHhoJnJlc2l6/ZT0xMjAwOio", priceKES: 15000000, desc: "Rugged and reliable off-road SUV.", specs: { engine: "4.5L", transmission: "Automatic", mileage: "8 km/l", seats: 7 } },
];

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);


export default function FeaturedCars() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                        onClick={() => {
                          dispatch({
                            type: 'cart/addToCart',
                            payload: {
                              id: car.id,
                              name: car.name,
                              price: car.priceKES,
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
