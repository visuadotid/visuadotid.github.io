import React from 'react';
import Head from 'next/head';
import Button from '../src/components/Button';
import TestimonialItem from '../src/components/TestimonialItem';
import FeatureItem from '../src/components/FeatureItem';
import Layout from '../src/components/layout/Layout';
import SectionSubtitle from '../src/components/SectionSubtitle';
import SectionTitle from '../src/components/SectionTitle';
import customerData from '../src/data/customer-data';
import HeroImage from '../src/svg/HeroImage2.png';
import VisuaProcess from '../src/svg/VisuaProcess.svg';
import Zap from '../src/svg/Zap.svg';
import SupportedImages from '../src/svg/SupportedImages.svg';
import Wrapper from '../src/components/layout/Wrapper';
import StepItem from '../src/components/StepItem';

const Index = ({ features, steps }) => {
  return (
    <Layout>
      <Head>
        <title>Visua - Dari data menjadi insight</title>
        <meta
          name="description"
          content="Visua.id - Sinkronkan, simpan, and analisis semua data bisnis anda dalam satu tempat dan dapatkan insight dengan mudah dari data anda."
        />
      </Head>
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
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-none">
              Kontrol Semua Data Bisnis Anda Dalam Satu Genggaman
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
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
      <section id="supported">
        <div className="container mx-auto text-center p-4 sm:p-10">
          <div className="flex flex-col items-center">
            <h1>
              Terintegrasi ke puluhan sumber data populer, mulai dari excel, Google ads, social
              media hingga e-commerce
            </h1>
            <div>
              <figure
                className="w-full sm:w-4/4 sm:mx-auto mt-5 mb-2"
                style={{ filter: `grayscale(1)` }}>
                <img src={SupportedImages} alt="supported-data" />
              </figure>
            </div>
            <p>dan masih banyak lagi</p>
          </div>
        </div>
      </section>
      <section id="feature" className="py-10 sm:py-20 lg:pb-20 lg:pt-24 bg-white">
        <div className="container mx-auto text-center px-2 sm:text-left">
          <SectionTitle>Mengapa Visua?</SectionTitle>
          <SectionSubtitle>
            Kami membantu anda mengambil keputusan bisnis secara data-driven (berdasarkan data dan
            analisa) dengan mudah dan sederhana
          </SectionSubtitle>
          <div className="flex flex-col sm:flex-row sm:flex-wrap mt-8">
            {features.map((feature, index) => (
              <FeatureItem key={`feature-${index}`} {...feature} />
            ))}
          </div>
        </div>
      </section>
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
      <style jsx>{`
        .visua-process {
          height: 0px;
        }
        #product {
          background-size: 100%;
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
          #product {
            background-size: 85%;
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
        @media (min-width: 1025px) {
          #product {
            background-size: 65%;
          }
        }
      `}</style>

      <section id="#desc" className="pb-20 lg:pb-24 bg-primary-darker">
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

      <section id="how-to" className="py-20 lg:pt-20 lg:pb-16">
        <div className="container mx-auto text-center sm:text-left">
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

      <section id="about" className="py-16">
        <Wrapper className="px-5 sm:px-10">
          <div className="text-center">
            <h1 className="font-semibold text-3xl leading-10 mb-3">
              Coba Visua sekarang untuk kemudahan kontrol data bisnis dalam satu genggaman!
            </h1>
            <p className="text-gray-500 text-base mb-8">
              Visua adalah tool yang powerful untuk mengintegrasikan, memonitor dan
              menvisualisasikan semua data bisnis anda, sehingga pengambilan keputusan secara
              data-driven jauh lebih sederhana dan mudah.
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
      title: 'Integrasi yang mudah dengan banyak sumber data populer',
      description:
        'Mulai dari excel, google ads, social media hingga e-commerce populer seperti shopee dan tokopedia, semua data bisnis anda dapat dimonitor dalam satu genggaman',
      image: 'https://picsum.photos/400/200?1',
    },
    {
      title: 'Mudah dalam penggunaan',
      description:
        'Tidak perlu menulis kueri yang rumit untuk menvisualisasikan data anda. Cukup sinkronkan semua data anda, anda dapat mengetahui apa yang sedang terjadi pada bisnis anda',
      image: 'https://picsum.photos/400/200?2',
    },
    {
      title: 'Pelaporan real-time sesuai perkembangan data bisnis dalam satu dashboard',
      description:
        'Semua data yang telah terintegrasi dengan Visua akan otomatis ter-update sesuai dengan perkembangan bisnis anda.',
      image: 'https://picsum.photos/400/200?3',
    },
  ];

  const steps = [
    {
      title: 'Pilih sumber data bisnis anda',
      description:
        'Pilih sumber data apa saja yang ingin anda monitor, apakah berupa excel, social media, dashboard iklan hingga penjualan di e-commerce anda',
      image: Zap,
    },
    {
      title: 'Sinkronkan semua pilihan sumber data anda dalam dashboard kami',
      description:
        'Selanjutnya, anda dapat mensingkronkan sumber data anda ke Visua, apakah sales funnel anda di dalam excel, penjualan di e-commerce hingga biaya serta impact dari iklan anda tiap bulannya',
      image: Zap,
    },
    {
      title: 'Visualisasikan untuk mengetahui insight yang diinginkan',
      description:
        'Terakhir, tampilkan perkembangan data yang ingin anda monitor dalam bentuk visual yang menarik agar mudah dibaca insight-nya. ',
      image: Zap,
    },
  ];
  return {
    props: {
      features,
      steps,
    },
  };
}

export default Index;
