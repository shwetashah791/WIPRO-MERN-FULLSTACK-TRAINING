import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  const[getStatus,setState]=useState(false);
  return (
    <>
      <Navbar />
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;