import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";

/**
 * Vehicles page:
 * - list of cars
 * - Add to Cart requires login
 * - if not logged in -> redirect to /login and include `from` query so we can navigate back after auth
 */

const vehicles = [
  { id: 1, name: "Blue Chevrolet", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=870&auto=format&fit=crop", priceKES: 12800000 },
  { id: 2, name: "Mazda CX-5", image: "https://images.unsplash.com/photo-1614934415583-8da3f89f45ad?q=80&w=764&auto=format&fit=crop", priceKES: 3400000 },
  { id: 3, name: "BMW X5", image: "https://images.unsplash.com/photo-1590177059002-a09b88ab1167?q=80&w=1175&auto=format&fit=crop", priceKES: 9800000 },
];

const KES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

export default function Vehicles() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // adjust selector if your auth state is different
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);

  const handleAddToCart = (car) => {
    if (!isAuthenticated) {
      // redirect to login, preserve where we came from
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    dispatch(addToCart({ id: car.id, name: car.name, price: car.priceKES, image: car.image, quantity: 1 }));
    // optional: navigate to cart or show toast
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Vehicles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white rounded shadow overflow-hidden">
            <img src={v.image} alt={v.name} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{v.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-red-600 font-bold">{KES(v.priceKES)}</div>
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
