import React from 'react';

const Cursor = ({ position }) => {
  return (
    <div 
      className="fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none mix-blend-difference z-[60]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default Cursor;