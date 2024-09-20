import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, image, description, skills, testimonial, link, moveDirection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getHoverAnimation = () => {
    switch (moveDirection) {
      case 'diagonal-left':
        return { x: -5, y: -5 };
      case 'diagonal-right':
        return { x: 5, y: -5 };
      case 'vertical':
        return { y: -10 };
      default:
        return { x: -5, y: -5 };
    }
  };

  return (
    <div 
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
        animate={isHovered ? getHoverAnimation() : { x: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <h4 className="text-lg font-semibold mb-2 text-white">Compétences acquises :</h4>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className="mt-auto flex justify-between items-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              {isExpanded ? "Masquer le témoignage" : "Voir le témoignage"}
            </button>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Voir le projet
              </a>
            )}
          </div>
          {isExpanded && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Témoignage du mentor :</h4>
              <p className="text-gray-300 italic">{testimonial}</p>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 10px 20px rgba(138, 43, 226, 0.2), 0 6px 6px rgba(0, 0, 255, 0.2)' 
            : 'none',
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default ProjectCard;