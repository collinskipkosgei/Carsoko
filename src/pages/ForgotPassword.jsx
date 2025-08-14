import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden lg:block w-1/2 bg-cover bg-medium bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682465083566-b3ff90042708?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Enter your email address and we’ll send you a link to reset your password.
          </p>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-yellow-900 text-white py-3 rounded hover:bg-yellow-700 transition duration-300">
              Send Reset Link
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            <Link to="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
        <footer className="mt-6 text-gray-500 text-xs text-center">
          &copy; {new Date().getFullYear()} Soko Cars. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
