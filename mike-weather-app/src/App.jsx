import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from "./components/about";
import Home from "./components/home";


function App() {


  return (
    <Router>

    <div className="app">
      <nav className="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>

        </ul>
      </nav>
      <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    
    </div>
    </Router>
  )
}

export default App
