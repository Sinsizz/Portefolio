import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h2 
            className="text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h2>
          <motion.p 
            className="text-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Prêt à donner vie à votre prochain projet ?
          </motion.p>
          <motion.a
            href="mailto:theo.rouillard@outlook.fr"
            className="inline-block bg-white text-black py-4 px-8 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contactez-moi
          </motion.a>
          <motion.div 
            className="mt-12 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://github.com/Sinsizz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-4xl hover:text-gray-400 transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/theorouillard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-4xl hover:text-gray-400 transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-20" />
      </section>
    </PageTransition>
  );
};

export default Contact;