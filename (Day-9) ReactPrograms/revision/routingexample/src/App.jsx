import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Menu />  {/* if you want Navbar menu */}

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
