
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { formatKES } from '../utils/formatCurrency';

export default function CartPage() {
  const cart = useSelector(s => s.cart);
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-blue-600 text-center p-4 bg-blue-50 rounded-lg">
        Failed to load cart data. Please try again later.<br />{error}
      </div>
    </div>
  );

  // Map cart items to car details from db.json
  const cartItemsWithDetails = cart.items.map(item => {
    const car = cars.find(c => c.id === item.id);
    return {
      ...item,
      ...car
    };
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItemsWithDetails.length === 0 ? <div>Your cart is empty</div> : (
        <div className="space-y-4">
          {cartItemsWithDetails.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={item.image} className="w-24 h-16 object-cover rounded" alt="" />
              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.brand && item.model ? `${item.brand} ${item.model}` : item.name}
                </h3>
                <p className="text-sm">{formatKES(item.price)}</p>
              </div>
              <input type="number" value={item.qty || 1} min={1} onChange={e => dispatch(updateQuantity({ id: item.id, qty: Number(e.target.value) }))} className="w-20 border px-2 py-1" />
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600">Remove</button>
            </div>
          ))}
          <div className="text-right">
            <div className="font-bold">Total: {formatKES(cart.total)}</div>
            <div className="mt-2">
              <button onClick={() => alert('Proceed to checkout (demo)')} className="px-4 py-2 bg-blue-600 text-white rounded">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
