import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HoverEffectCursor from './Components/HoverEffectCursor'; // Cambiado el nombre del componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HoverEffectCursor />} />
        <Route path="/Acercade" element={<HoverEffectCursor />} />
        <Route path="/Servicios" element={<HoverEffectCursor />} />
        <Route path="/Educacion" element={<HoverEffectCursor />} />
        <Route path="/Contacto" element={<HoverEffectCursor />} />
      </Routes>
    </Router>
  );
}

export default App;
