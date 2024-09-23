import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Cursor from './components/Cursor';


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden">
      <Cursor position={cursorPosition} />
      <Header setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <Home key="home" />}
        {currentPage === 'about' && <About key="about" />}
        {currentPage === 'projects' && <Projects key="projects" />}
        {currentPage === 'contact' && <Contact key="contact" />}
      </AnimatePresence>
    </div>
  );
}

export default App;