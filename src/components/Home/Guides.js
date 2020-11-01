import React from 'react';
import SectionSubtitle from '../SectionSubtitle';
import SectionTitle from '../SectionTitle';
import StepItem from '../StepItem';

export default function Guides({ steps }) {
  return (
    <section id="how-to" className="py-20 lg:pt-20 lg:pb-16">
      <div className="container mx-auto text-center">
        <SectionTitle>Panduan</SectionTitle>
        <SectionSubtitle>
          Cukup dengan 3 langkah sederhana, anda dapat mengawasi semua perkembangan bisnis anda
          dalam satu platform
        </SectionSubtitle>
        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-12">
          {steps.map((objective, index) => (
            <StepItem key={`step-${index + 1}`} {...objective} />
          ))}
        </div>
      </div>
    </section>
  );
}
