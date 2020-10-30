import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({ children, className = '', size, textColor = 'text-white' }) => {
  return (
    <button
      type="button"
      className={`
        ${textColor}
        ${sizes[size] || sizes.default}
        rounded-xl
        rounded-bl-none
        ${className}
    `}>
      {children}
    </button>
  );
};

export default Button;
