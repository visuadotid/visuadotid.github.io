import React from 'react';
import SectionSubtitle from '../SectionSubtitle';
import SectionTitle from '../SectionTitle';
import TestimonialItem from '../TestimonialItem';

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-10 pb-10 lg:pt-20 lg:pb-16">
      <div className="container mx-auto text-center">
        <SectionTitle>Testimonial</SectionTitle>
        <SectionSubtitle>Bagaimana Visua membantu banyak bisnis berkembang</SectionSubtitle>
        <div className="flex flex-col md:flex-row mt-10">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <TestimonialItem customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
