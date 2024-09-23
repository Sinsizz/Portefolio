import React from 'react';

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-3 sm:mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm sm:text-base font-medium text-blue-700 dark:text-white">{skill}</span>
      <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2.5 dark:bg-gray-700">
      <div 
        className="bg-blue-600 h-1.5 sm:h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;