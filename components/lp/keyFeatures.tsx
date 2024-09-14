import React from 'react';
import Image from 'next/image';

interface PricingFeature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const PricingPackages: React.FC = () => {
  const features: PricingFeature[] = [
    {
      title: "Sebar Undangan via Whatsapp",
      description: "Cukup copy & paste link ke aplikasi whatsapp, lalu TARAAA... Thumbnail undangan akan muncul baik di smartphone Android maupun iPhone kamu.",
      imageSrc: "https://asset.menica.pro/image+19.svg",
      imageAlt: "Whatsapp invitation sharing feature"
    },
    {
      title: "Banyak Pilihan Desain",
      description: "Buat undangan digital kamu selaras dengan tema pernikahanmu.",
      imageSrc: "https://asset.menica.pro/image+20.svg",
      imageAlt: "Multiple design options"
    },
    {
      title: "Smart Design Editor",
      description: "Memudahkan kamu untuk Full Custom undangan digitalmu.",
      imageSrc: "https://asset.menica.pro/image+20.svg",
      imageAlt: "Smart design editor interface"
    },
    {
      title: "Database Tamu & RSVP",
      description: "Kelola data tamu dengan mudah dan dapatkan Konfirmasi Kehadiran tamu, ucapan, dan doa dari mereka.",
      imageSrc: "https://asset.menica.pro/image+20.svg",
      imageAlt: "Guest database and RSVP management"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16" style={{ fontFamily: 'Kanit' }}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Paket <span className="text-green-600">Harga</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 sm:mt-24">
        {features.map((feature, index) => (
          <article key={index} className={`bg-green-100 p-6 rounded-lg shadow-md flex items-start flex-col mx-auto w-3/4 sm:w-full ${index === 0 ? 'lg:col-span-1 lg:row-span-3' : index === 3 ? 'lg:row-span-2 lg:col-span-2 sm:flex-row' : 'lg:row-span-1'}`}>
            <Image 
              src={feature.imageSrc} 
              alt={feature.imageAlt} 
              width={200} 
              height={200} 
              className={`mr-4 ${index === 0 ? 'ml-[-70px] mb-6' : 'mt-[-90px]'}`}
            />
            <div>
              <h2 className="text-xl font-bold text-[#4A4242] mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PricingPackages;
