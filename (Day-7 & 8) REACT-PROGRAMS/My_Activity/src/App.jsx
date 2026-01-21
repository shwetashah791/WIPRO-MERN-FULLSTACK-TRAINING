import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Index from './components/Index'
// import ProductCard from './components/ProductCard'
import Products from './components/Products'

function App() {
    return (
        <>
            <Header />
            <Index />
            <Products />
            <Footer />
        </>
    );
}

export default App;
