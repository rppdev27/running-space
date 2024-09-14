'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeaderHero: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-auto bg-white">
      {/* Header */}
      <header className={`z-50 fixed w-full transition-all duration-300 bg-white shadow-md`}>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex-1 items-center">
              <Image src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911" alt="Menica Logo" width={120} height={40} />
            </div>
            <div className='flex flex-row justify-end items-center'>
              <nav className="hidden md:flex space-x-6 text-gray-700 font-light tracking-normal text-sm mr-4"
                style={{
                  fontFamily: 'Kanit'
                }}
              >
                <a href="#" className="text-gray-600 hover:text-gray-900">Beranda</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Template</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Harga</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Pusat Bisnis</a>
              </nav>
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md text-xs ">
                Masuk
              </button>
            </div>
          </div>
        </header>


      {/* Hero Section */}
      {/* <div className="px-8 py-8 sm:px-32 sm:py-24 bg-white h-auto flex items-center bg-grid-black/[0.05]"
        style={{
          fontFamily: 'Kanit'
        }}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black mt-20 sm:mt-0 ">
              Platform Undangan Pernikahan Online
            </h1>
            <p className="text-gray-700 mb-6 font-normal tracking-tight text-base"
              style={{
                fontFamily: 'Nunito'
              }}
            >
              Bebas berkreasi dengan Smart Design Editor. Kelola data tamu & sebarkan undanganmu dengan mudah menggunakan Wedding Dashboard.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold tracking-wide">
              Buat Sekarang
            </button>
          </div>
          <div className="relative">
          
          <img
            src="https://asset.menica.pro/mockup_3screen-freshpurple_+1(1).png"
            alt="Menica Logo"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderHero;