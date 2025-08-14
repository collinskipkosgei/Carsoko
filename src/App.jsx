import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/Home";
import CarListingsPage from "../src/pages/CarListings";
import FeaturedCars from "../src/components/car/FeaturedCars";
import CarDetails from "../src/pages/CarDetails";
import CartPage from "../src/pages/Cart";
import AboutPage from "../src/pages/About";
import Contacts from "../src/pages/Contact";
import Error404 from "../src/pages/Error404";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import ForgotPassword from "../src/pages/ForgotPassword";
import Vehicles from "../src/pages/Vehicles";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("loggedInUser")
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/cars" element={<CarListingsPage />} />
            <Route path="/listings" element={<CarListingsPage />} />
            <Route path="/cart" element={isLoggedIn ? <CartPage /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/featured" element={<FeaturedCars />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
