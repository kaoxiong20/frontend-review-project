import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Goals from './components/Goals';
import Header from './components/Header';

function App() {
  return (
    <>
      <NavBar/>
      <Header />
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="goals" element={<Goals />} />
      </Routes>
      </>
  );
}

export default App;