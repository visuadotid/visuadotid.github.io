import React from 'react';

export default function StepItem({ title, description, image }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
      <div className="flex flex-col items-center sm:items-start">
        <div>
          <picture>
            <img src={image} alt={title} />
          </picture>
        </div>
        <div className="pt-2 text-center sm:text-left">
          <h3 className="font-bold text-base text-gray-900 mb-1">{title}</h3>
          <p className="text-base text-gray-500 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
