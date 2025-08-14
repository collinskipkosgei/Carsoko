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
              <img src={item.images?.[0] || item.image} className="w-24 h-16 object-cover rounded" alt="" />
              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.brand && item.model ? `${item.brand} ${item.model}` : item.name}
                </h3>
                <p className="text-sm">{formatKES(item.price)}</p>
              </div>
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
export const cars = [
  { id: 1, name: "Blue Chevrolet", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=870&auto=format&fit=crop", priceKES: 12800000, desc: "Reliable SUV, comfortable and fuel efficient.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "12 km/l", seats: 5 } },
  { id: 2, name: "Ford", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=870&auto=format&fit=crop", priceKES: 7400000, desc: "Sporty compact SUV with great handling.", specs: { engine: "2.5L", transmission: "Automatic", mileage: "11 km/l", seats: 5 } },
  { id: 3, name: "Mazda Atenza", image: "https://imgs.search.brave.com/rBODgBp3xSjAlqot7lFTJ-6rMpnOqNYkPiaaPCn5anM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGMtdi5jb20vY2Ru/L2N2bWF0ZXJpYWxz/L21vZGVsaW1hZ2Vz/L2dhbGxlcnkvNS8y/MzExMzIuanBnP3dp/ZHRoPTYwJmhlaWdo/dD00NSZ0eXBlPXJl/c2l6ZQ", priceKES: 3800000, desc: "Luxury performance Sedan.", specs: { engine: "3.0L", transmission: "Automatic", mileage: "9 km/l", seats: 5 } },
  { id: 4, name: "Mercedes-Benz C-Class", image: "https://imgs.search.brave.com/GTXAHP9FkfSyKAQSgI8UfFOV9YjAYfNelEtZntFFdUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNhcmJ1enpp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNS9j/cm9wcGVkLTEzYTg3/Ni0xLmpwZz9xPTQ5/JmZpdD1jcm9wJnc9/MzYwJmg9MjQwJmRw/cj0y", priceKES: 7600000, desc: "Comfort and elegance in one package.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
  { id: 5, name: "Audi Q5", image: "https://imgs.search.brave.com/TmFh--eB74RGYTJTmXrMqqjibdosj_1UjFZ_-S8Q320/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/QXVkaS9RNS8xMDU1/Ni8xNjg5NTk0NDE2/OTI1L2Zyb250LWxl/ZnQtc2lkZS00Ny5q/cGc_dHI9dy0yMzA", priceKES: 8200000, desc: "Premium crossover with modern tech.", specs: { engine: "2.0L", transmission: "Automatic", mileage: "10 km/l", seats: 5 } },
  { id: 6, name: "Ford Ranger Lariat", image: "https://imgs.search.brave.com/mEPnX8LEygoNFsfLG0YuWFpyDHMwLTzTPoHSsrWQUgk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LWZvcmQtcmFuZ2Vy/LWxhcmlhdC0yMDUt/NjZmZDViNzg5ZGMx/YS5qcGc_Y3JvcD0w/LjcyMXh3OjAuNjA3/eGg7MC4yMjl4dyww/LjMwMHhoJnJlc2l6/ZT0xMjAwOio", priceKES: 15000000, desc: "Rugged and reliable off-road SUV.", specs: { engine: "4.5L", transmission: "Automatic", mileage: "8 km/l", seats: 7 } },
];
