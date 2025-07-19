import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx'; 
import WorkoutSessions from './Components/WorkoutSessions.jsx';
import Gallery from './Components/Gallery.jsx';
import Pricing from './Components/Pricing.jsx';
import Contact from './Components/Contact.jsx';
import BMICalculator from './Components/BMICalculator.jsx';
import Footer from './Components/Footer.jsx';


const App = () => {
  return (
    <Router>
        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />
        <ToastContainer theme='dark' position='top-center' />
    </Router>
  )  
}

export default App
