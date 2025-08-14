import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
export default function Register(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [confirm,setConfirm]=useState('');
  const submit = (e)=>{ e.preventDefault(); alert('Registration is UI-only in this demo'); };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/990978/pexels-photo-990978.jpeg')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg flex max-w-4xl w-full p-6">
        <div className="hidden md:block md:w-1/2 pr-4"><img src="https://images.pexels.com/photos/3214023/pexels-photo-3214023.jpeg" alt="Register Visual" className="h-full w-full object-cover rounded-lg" /></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Create Your Carsoko Account</h2>
          <form className="space-y-4" onSubmit={submit}>
            <div><label className="block mb-1 text-sm text-gray-600">Full Name</label><input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Enter full name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <div><label className="block mb-1 text-sm text-gray-600">Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <div><label className="block mb-1 text-sm text-gray-600">Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Create password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <div><label className="block mb-1 text-sm text-gray-600">Confirm Password</label><input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" placeholder="Confirm password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" /></div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-700">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
        </div>
      </div>
      <div className="w-full mt-6"><Footer /></div>
    </div>
  );
}