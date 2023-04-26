import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Goals from './components/Goals';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="goals" element={<Goals />} />
      </Routes>
    </div>
  );
}

export default App;