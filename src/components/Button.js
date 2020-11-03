import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({ children, className = '', size, textColor = 'text-white', href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className={`
        ${textColor}
        hover:${textColor}
        ${sizes[size] || sizes.default}
        rounded-xl
        rounded-bl-none
        cursor-pointer
        ${className}
    `}>
      {children}
    </a>
  );
};

export default Button;
