import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3300/users");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const users = await res.json();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setIsLoggedIn(true);
      navigate("/featured", { replace: true });
    } else {
      alert("❌ Invalid email or password");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("⚠️ Unable to connect to server");
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Soko Cars. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
