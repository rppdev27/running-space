import React from 'react';

const Hero: React.FC = (): JSX.Element => {
  return (
    <header className="px-8 py-8 sm:px-32 sm:py-24 bg-white h-auto flex items-center bg-grid-black/[0.05]"
      style={{
        fontFamily: 'Kanit'
      }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <article>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black mt-20 sm:mt-0">
            Platform Undangan Pernikahan Online
          </h1>
          <p className="text-gray-700 mb-6 font-light tracking-normal text-base"
            style={{
              fontFamily: 'Kanit'
            }}
          >
            Bebas berkreasi dengan Smart Design Editor. Kelola data tamu & sebarkan undanganmu dengan mudah menggunakan Wedding Dashboard.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold tracking-wide">
            Buat Sekarang
          </button>
        </article>
        <figure className="relative">
          <img
            src="https://asset.menica.pro/undraw_love_re_mwbq.svg"
            alt="Illustration of love"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </figure>
      </div>
    </header>
  );
}

export default Hero;
