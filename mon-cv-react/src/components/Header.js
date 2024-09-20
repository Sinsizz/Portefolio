import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['home', 'about', 'projects', 'contact'].map((page) => (
            <motion.li key={page}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setCurrentPage(page)}
                className="text-lg uppercase tracking-wider transition-colors duration-300 hover:text-gray-400 relative z-[55]"
              >
                {page}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;