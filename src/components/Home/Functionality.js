import React from 'react';
import VisuaProcess from '../../../src/svg/VisuaProcess.svg';
import Button from '../Button';
import Wrapper from '../layout/Wrapper';
import links from '../../data/links';

export default function Functionality() {
  return (
    <>
      <div id="functionality" className="h-16 w-full" />
      <div className="visua-process relative flex flex-col items-center bg-white">
        <div style={{ height: '50%', width: '100%', backgroundColor: 'white' }} />
        <img
          className="absolute w-auto h-full object-contain"
          src={VisuaProcess}
          alt="visua-process"
          style={{ top: '5%' }}
        />
        <div style={{ height: '50%', width: '100%', backgroundColor: '#06135b' }} />
      </div>
      <section id="#desc" className="pb-20 lg:pb-24 bg-primary-darker">
        <Wrapper className="text-center">
          <h1 className="font-semibold text-2xl text-white leading-tight mb-3">
            Satu tool untuk integrasi semua data source sekaligus menampilkannya
          </h1>
          <p className="text-gray-500 text-base mb-8">
            Visua adalah tool untuk memvisualisasikan data dari semua sumber menjadi gambar yang
            menarik dan mudah untuk dibaca
          </p>
          <Button
            className="bg-primary hover:bg-primary-lighter"
            size="md"
            href={links.questionaireLink}>
            Coba Visua Sekarang
          </Button>
        </Wrapper>
      </section>
    </>
  );
}
