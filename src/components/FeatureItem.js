import React from 'react';

export default function FeatureItem({ title, description, image }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="bg-gray-400">
          <picture>
            <img className="w-full h-40 rounded-md object-cover" src={image} alt={title} />
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
