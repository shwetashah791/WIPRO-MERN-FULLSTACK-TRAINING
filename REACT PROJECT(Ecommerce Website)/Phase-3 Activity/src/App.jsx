import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";

import withAuth from "./hoc/withAuth";

const ProtectedProducts = withAuth(Products);
const ProtectedCategories = withAuth(Categories);
const ProtectedCart = withAuth(Cart);

function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProtectedProducts />} />
        <Route path="/categories" element={<ProtectedCategories />} />
        <Route path="/cart" element={<ProtectedCart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
