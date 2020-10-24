import React from 'react';

export default function Wrapper({ children, className }) {
  return (
    <div
      className={`container md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto text-gray-900 ${className}`}>
      {children}
    </div>
  );
}
