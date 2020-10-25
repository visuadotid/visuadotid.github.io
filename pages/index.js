import React from 'react';
import Button from '../src/components/Button';
import TestimonialItem from '../src/components/TestimonialItem';
import FeatureItem from '../src/components/FeatureItem';
import Layout from '../src/components/layout/Layout';
import SectionSubtitle from '../src/components/SectionSubtitle';
import SectionTitle from '../src/components/SectionTitle';
import customerData from '../src/data/customer-data';
import HeroImage from '../src/svg/HeroImage.svg';
import VisuaProcess from '../src/svg/VisuaProcess.svg';
import Zap from '../src/svg/Zap.svg';
import Wrapper from '../src/components/layout/Wrapper';

const Index = ({ features, objectives }) => {
  return (
    <Layout>
      <section className="py-16 md:pt-40">
        <div className="container mx-auto px-2 flex flex-col md:flex-row">
          <div className="w-full text-center md:text-left md:w-1/2">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-none">
              Jadikan presentasi datamu <span className="text-primary">menarik</span>
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Visua adalah tool untuk memvisualisasikan data dari database apapun menjadi gambar
              yang menarik dan mudah untuk dibaca.
            </p>
            <div className="mt-8 md:mt-12">
              <Button size="md" className="bg-black">
                Coba Visua Sekarang
              </Button>
            </div>
          </div>
          <div className="w-full mt-10 md:w-1/2 md:mt-0">
            <picture>
              <img src={HeroImage} alt="hero" />
            </picture>
          </div>
        </div>
      </section>
      <section id="features" className="py-10 sm:py-20 lg:pb-20 lg:pt-24 bg-white">
        <div className="container mx-auto text-center px-2 sm:text-left">
          <SectionTitle>Integrated System</SectionTitle>
          <SectionSubtitle>
            Sistem terintegrasi untuk menampilkan apapun datamu secara mudah dan powerful
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row sm:flex-wrap mt-12">
            {features.map((feature) => (
              <FeatureItem {...feature} />
            ))}
          </div>
        </div>
      </section>

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
      <style jsx>{`
        .visua-process {
          height: 0px;
        }
        @media (min-width: 360px) {
          .visua-process {
            height: 210px;
          }
        }
        @media (min-width: 420px) {
          .visua-process {
            height: 240px;
          }
        }
        @media (min-width: 480px) {
          .visua-process {
            height: 270px;
          }
        }
        @media (min-width: 560px) {
          .visua-process {
            height: 280px;
          }
        }
        @media (min-width: 640px) {
          .visua-process {
            height: 320px;
          }
        }
        @media (min-width: 786px) {
          .visua-process {
            height: 400px;
          }
        }
      `}</style>

      <section id="what-to-sell" className="pb-20 lg:pb-24 bg-primary-darker">
        <Wrapper className="text-center">
          <h1 className="font-semibold text-3xl text-white leading-tight mb-3">
            Satu tool untuk integrasi semua data source sekaligus menampilkannya
          </h1>
          <p className="text-gray-500 text-base mb-8">
            Visua adalah tool untuk memvisualisasikan data dari semua sumber menjadi gambar yang
            menarik dan mudah untuk dibaca
          </p>
          <Button className="bg-primary" size="md">
            Coba Visua Sekarang
          </Button>
        </Wrapper>
      </section>

      <section id="objectives" className="py-20 lg:pt-20 lg:pb-16">
        <div className="container mx-auto text-center sm:text-left">
          <SectionTitle>User-Preferred Design</SectionTitle>
          <SectionSubtitle>
            Kami membantu anda menemukan kekuatan tersembunyi dalam data anda
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row sm:flex-wrap mt-12">
            {objectives.map((objective) => (
              <FeatureItem {...objective} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="pt-10 pb-10 lg:pt-20 lg:pb-16">
        <div className="container mx-auto text-center">
          <SectionTitle>Testimonial</SectionTitle>
          <SectionSubtitle>Pendapat dari customer</SectionSubtitle>
          <div className="flex flex-col md:flex-row mt-10">
            {customerData.map((customer) => (
              <div key={customer.customerName} className="flex-1 px-3">
                <TestimonialItem customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="invitation" className="py-16">
        <Wrapper className="px-5 sm:px-10">
          <div className="text-center">
            <h1 className="font-semibold text-3xl leading-10 mb-3">
              Coba <span className="text-primary">Visua</span> sekarang dan lihat perubahan bisnis
              anda
            </h1>
            <p className="text-gray-500 text-base mb-8">
              Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang
              menarik dan mudah untuk dibaca
            </p>
            <Button className="bg-primary" size="md">
              Coba Visua Sekarang
            </Button>
          </div>
        </Wrapper>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const features = [
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
  ];

  const objectives = [
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
    {
      title: 'SQL Query yang Ciamik',
      description:
        'Visua adalah tool untuk memvisualisasikan data dari ecommerce mu menjadi gambar yang menarik dan mudah untuk dibaca',
      image: Zap,
    },
  ];
  return {
    props: {
      features,
      objectives,
    },
  };
}

export default Index;
