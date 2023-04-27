import './App.css';
import './index.css'
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Header />
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;