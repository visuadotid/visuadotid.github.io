import React from 'react';
import Card from './Card';

const TestimonialItem = ({ customer }) => (
  <div className="mb-5 bg-white p-5">
    <div className="flex flex-col items-center">
      <figure>
        <picture>
          <img
            className="w-16 h-16 rounded-full"
            src={customer.customerImage}
            alt={customer.customerName}
          />
        </picture>
      </figure>
      <div className="flex flex-col items-center text-sm mt-4">
        <p className="font-semibold text-base text-gray-900">{customer.title}</p>
        <p className="italic text-gray-600 mb-3">{customer.content}</p>
        <p className="font-semibold text-primary">{customer.customerName}</p>
        <p className="text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </div>
);

export default TestimonialItem;
