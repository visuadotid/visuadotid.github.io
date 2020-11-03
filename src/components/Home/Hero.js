import React from 'react';
import dynamic from 'next/dynamic';
import HeroImage from '../../../src/svg/HeroImage2.png';
import Button from '../Button';

export default function Hero() {
  return (
    <section
      id="product"
      className="pt-10 pb-48 md:pt-40 bg-primary"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
      }}>
      <div className="container mx-auto px-2 flex flex-col md:flex-row">
        <div className="w-full text-white text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-none">
            Kontrol Semua Data Bisnis Anda Dalam Satu Genggaman
          </h1>
          <p className="text-base lg:text-2xl mt-6 font-light">
            Visua adalah tool yang powerful untuk mengintegrasikan, memonitor, dan membuat
            visualisasi semua data bisnis Anda sehingga pengambilan keputusan secara data-driven
            jauh lebih sederhana dan mudah.
          </p>
          <div className="mt-8 md:mt-12">
            <Button textColor="text-black" size="md" className="bg-secondary">
              Coba Visua Sekarang - GRATIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
