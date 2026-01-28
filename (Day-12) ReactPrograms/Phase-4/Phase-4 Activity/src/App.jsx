import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Signup from './pages/SignUp';

import ContactUs from './pages/ContactUs';
import withAuth from "./hoc/withAuth";
import AdminLogin from "./pages/AdminLogin";
import withAdminAuth from "./hoc/withAdminAuth";

// User Protected Routes
const ProtectedProducts = withAuth(Products);
const ProtectedCategories = withAuth(Categories);
const ProtectedCart = withAuth(Cart);

// Admin Protected Route
const ProtectedAdminProducts = withAdminAuth(Products);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
           <Route path="/contact-us" element={<ContactUs />} />

          {/* User Routes */}
          <Route path="/products" element={<ProtectedProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<ProtectedCart />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-products" element={<ProtectedAdminProducts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
