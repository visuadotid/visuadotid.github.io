import React from 'react';
import Head from 'next/head';
import Button from '../src/components/Button';
import Layout from '../src/components/layout/Layout';
import DataSources from '../src/svg/DataSources.png';
import EasyToUse from '../src/svg/EasyToUse.png';
import RealtimeReport from '../src/svg/RealtimeReport.png';
import Group11 from '../src/svg/Group11.svg';
import Group12 from '../src/svg/Group12.svg';
import Group14 from '../src/svg/Group14.svg';
import SupportedImages from '../src/svg/SupportedImages.svg';
import Wrapper from '../src/components/layout/Wrapper';
import Hero from '../src/components/Home/Hero';
import Features from '../src/components/Home/Features';
import Functionality from '../src/components/Home/Functionality';
import Guides from '../src/components/Home/Guides';

const Index = ({ features, steps }) => {
  return (
    <Layout>
      <Head>
        <title>Visua.id | Dari Data Menjadi Insight</title>
        <meta
          name="description"
          content="Visua.id - Sinkronkan, simpan, dan analisis semua data bisnis Anda dalam satu tempat dan dapatkan insight dengan mudah dari data Anda."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Visua.id | Dari Data Menjadi Insight" />
        <meta
          itemprop="description"
          content="Visua.id - Sinkronkan, simpan, dan analisis semua data bisnis Anda dalam satu tempat dan dapatkan insight dengan mudah dari data Anda."
        />
        <meta itemprop="image" content="https://visua.id/images/visua-process.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://visua.id" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Visua.id | Dari Data Menjadi Insight" />
        <meta
          property="og:description"
          content="Visua.id - Sinkronkan, simpan, dan analisis semua data bisnis Anda dalam satu tempat dan dapatkan insight dengan mudah dari data Anda."
        />
        <meta property="og:image" content="https://visua.id/images/visua-process.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visua.id | Dari Data Menjadi Insight" />
        <meta
          name="twitter:description"
          content="Visua.id - Sinkronkan, simpan, dan analisis semua data bisnis Anda dalam satu tempat dan dapatkan insight dengan mudah dari data Anda."
        />
        <meta name="twitter:image" content="https://visua.id/images/visua-process.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      {/* <section id="supported">
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
      </section> */}
      <Features features={features} />
      <Functionality />
      <Guides steps={steps} />
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
      image: DataSources,
    },
    {
      title: 'Mudah dalam penggunaan',
      description:
        'Tidak perlu menulis kueri yang rumit untuk menvisualisasikan data anda. Cukup sinkronkan semua data anda, anda dapat mengetahui apa yang sedang terjadi pada bisnis anda',
      image: EasyToUse,
    },
    {
      title: 'Pelaporan real-time sesuai perkembangan data bisnis dalam satu dashboard',
      description:
        'Semua data yang telah terintegrasi dengan Visua akan otomatis ter-update sesuai dengan perkembangan bisnis anda.',
      image: RealtimeReport,
    },
  ];

  const steps = [
    {
      title: 'Pilih sumber data bisnis anda',
      description:
        'Pilih sumber data apa saja yang ingin anda monitor, apakah berupa excel, social media, dashboard iklan hingga penjualan di e-commerce anda',
      image: Group12,
    },
    {
      title: 'Sinkronkan semua pilihan sumber data anda dalam dashboard kami',
      description:
        'Selanjutnya, anda dapat mensingkronkan sumber data anda ke Visua, apakah sales funnel anda di dalam excel, penjualan di e-commerce hingga biaya serta impact dari iklan anda tiap bulannya',
      image: Group11,
    },
    {
      title: 'Visualisasikan untuk mengetahui insight yang diinginkan',
      description:
        'Terakhir, tampilkan perkembangan data yang ingin anda monitor dalam bentuk visual yang menarik agar mudah dibaca insight-nya. ',
      image: Group14,
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
