import React from 'react';
import './css/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/NavBar';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/portfolio22' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
