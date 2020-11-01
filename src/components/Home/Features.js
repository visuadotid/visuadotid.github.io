import React from 'react';
import FeatureItem from '../FeatureItem';
import Wrapper from '../layout/Wrapper';
import SectionSubtitle from '../SectionSubtitle';
import SectionTitle from '../SectionTitle';

export default function Features({ features }) {
  return (
    <section id="feature" className="py-10 sm:py-20 lg:pb-20 lg:pt-24 bg-white">
      <div className="container mx-auto text-center px-2">
        <Wrapper>
          <SectionTitle>Mengapa Visua?</SectionTitle>
          <SectionSubtitle>
            Kami membantu anda mengambil keputusan bisnis secara data-driven (berdasarkan data dan
            analisa) dengan mudah dan sederhana
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row sm:flex-wrap mt-8">
            {features.map((feature, index) => (
              <FeatureItem key={`feature-${index}`} even={index % 2 === 0} {...feature} />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
