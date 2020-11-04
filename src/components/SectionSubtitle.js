import React from 'react';

const SectionSubtitle = ({ children, className = '' }) => {
  return <h2 className={`font-semibold text-gray-900 text-xl ${className}`}>{children}</h2>;
};

export default SectionSubtitle;
