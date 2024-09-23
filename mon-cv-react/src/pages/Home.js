import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Créatif.</motion.span>
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Innovant.</motion.span>
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Développeur.</motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Transformant des idées en expériences web exceptionnelles
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-20" />
      </section>
    </PageTransition>
  );
};

export default Home;