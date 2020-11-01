import React from 'react';

export default function FeatureItem({ title, description, image, even }) {
  return (
    <div className="w-full p-5 md:p-10">
      <div className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
        <div className="w-full md:w-1/2 lg:w-3/5">
          <picture>
            <img className="w-full rounded-md object-cover" src={image} alt={title} />
          </picture>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 pt-2 text-center sm:text-left p-5">
          <h3 className="text-xl text-gray-900 mb-2">{title}</h3>
          <p className="text-base text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
