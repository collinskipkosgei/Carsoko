import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { formatKES } from '../utils/formatCurrency';
export default function CartPage(){
  const cart = useSelector(s=>s.cart);
  const dispatch = useDispatch();
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.items.length===0 ? <div>Your cart is empty</div> : (
        <div className="space-y-4">
          {cart.items.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={item.images?.[0]} className="w-24 h-16 object-cover rounded" alt="" />
              <div className="flex-1"><h3 className="font-semibold">{item.brand} {item.model}</h3><p className="text-sm">{formatKES(item.price)}</p></div>
              <input type="number" value={item.qty||1} min={1} onChange={e=>dispatch(updateQuantity({id:item.id, qty: Number(e.target.value)}))} className="w-20 border px-2 py-1" />
              <button onClick={()=>dispatch(removeFromCart(item.id))} className="text-red-600">Remove</button>
            </div>
          ))}
          <div className="text-right"><div className="font-bold">Total: {formatKES(cart.total)}</div><div className="mt-2"><button onClick={()=>alert('Proceed to checkout (demo)')} className="px-4 py-2 bg-blue-600 text-white rounded">Proceed to Checkout</button></div></div>
        </div>
      )}
    </div>
  );
}