import React from 'react';
import HeroImage from '../../../src/svg/HeroImage2.png';
import Button from '../Button';
import links from '../../data/links';

export default function Hero() {
  return (
    <section
      id="product"
      className="pt-10 pb-64 md:pt-40 bg-primary"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
      }}>
      <div className="container mx-auto px-2 flex flex-col md:flex-row">
        <div className="w-full text-white px-4 text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-none">
            Kontrol Semua Data Bisnis Anda Dalam Satu Genggaman
          </h1>
          <p className="text-base lg:text-2xl mt-6 font-light">
            Visua adalah tool yang powerful untuk mengintegrasikan, memonitor, dan membuat
            visualisasi semua data bisnis Anda sehingga pengambilan keputusan secara data-driven
            jauh lebih sederhana dan mudah.
          </p>
          <div className="mt-8 md:mt-12">
            <Button
              href={links.questionaireLink}
              textColor="text-black"
              size="md"
              className="bg-secondary hover:bg-secondary-lighter">
              Coba Visua Sekarang - GRATIS
            </Button>
          </div>
        </div>
        <div className="flex flex-1 w-full items-center text-center content-center justify-center mt-20 md:mt-0 md:text-left md:w-1/2">
          <iframe
            className="w-5/6"
            height="350px"
            src="https://www.youtube.com/embed/MnT1mtSKW2I"></iframe>
        </div>
      </div>
    </section>
  );
}
