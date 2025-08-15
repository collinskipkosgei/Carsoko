import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";


const API_URL = "http://localhost:3300/cars";

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

export default function Vehicles() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (car) => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    dispatch(addToCart({ id: car.id, name: car.name, price: car.price, image: car.image, quantity: 1 }));
    navigate("/cart");
  };

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-green-600 text-center p-4 bg-green-50 rounded-lg">
        Failed to load vehicles. Please try again later.<br />{error}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Vehicles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white rounded shadow overflow-hidden">
            <img src={v.image} alt={v.name} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{v.name || `${v.brand} ${v.model}`}</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-red-600 font-bold">{KES(v.price)}</div>
                <button
                  onClick={() => handleAddToCart(v)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
