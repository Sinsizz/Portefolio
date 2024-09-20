import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <div className="mt-2">
          <a href="https://github.com/votre-username" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="https://linkedin.com/in/votre-username" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="https://twitter.com/votre-username" className="text-gray-400 hover:text-white mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;