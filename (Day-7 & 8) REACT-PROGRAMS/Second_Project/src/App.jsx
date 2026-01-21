import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MyButton from './components/Button'
import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Courses from './components/Courses'

function App() {


  return (
    <>
      <div>
        <Header />
        <Courses/>

         <Navbar />
        <div className='flex flex-wrap'>
        <Card cardTitle="React Js Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Full Stack Java Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MEAN Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MERN Course" cardDescription="Module frontend course for 40 days"></Card>
         <Card cardTitle="Dev OPs Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Cloud Computing Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Dot Net Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Python Course" cardDescription="Module frontend course for 40 days"></Card>
          <Card cardTitle="Azure  Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Angular Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Analyst Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Science Course" cardDescription="Module frontend course for 40 days"></Card>
       
      

    
        </div>
       
        <Footer />
        
      </div>
      
    </>
  )
}

export default App
