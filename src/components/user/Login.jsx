import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { mockLogin } from '../../store/slices/userSlice';
export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(s=>s.user);
  const navigate = useNavigate();
  const submit = (e)=>{
    e.preventDefault();
    dispatch(mockLogin(email,password));
  };
  if(user.isAuthenticated) navigate('/');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/33307471/pexels-photo-33307471.jpeg')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg flex max-w-4xl w-full p-6">
        <div className="hidden md:block md:w-1/2 pr-4"><img src="https://imgs.search.brave.com/CmdkwgCJCJAWLnT5Yp0XqfpYejFU2miaKOJKqJAj6Y4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL3A5/S1diSXVXQVNxVjAx/YUtnSFpYOHctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUY3lN/QS0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2Nhcl9h/bmRfZHJpdmVyXzU4/MS85MjUzNDAyN2Fm/Mjk2NDE4ZDg3NWMw/MTUxMzU2ZWYwMQ" alt="Login Visual" className="h-full w-full object-cover rounded-lg" /></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login to Carsoko</h2>
          <form className="space-y-4" onSubmit={submit}>
            <div><label className="block mb-1 text-sm text-gray-600">Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <div><label className="block mb-1 text-sm text-gray-600">Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">{user.loading ? 'Signing in...' : 'Login'}</button>
            {user.error && <p className="text-red-600">{user.error}</p>}
          </form>
          <p className="mt-4 text-sm text-center text-gray-700">Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link></p>
        </div>
      </div>
      <div className="w-full mt-6"><Footer /></div>
    </div>
  );
}