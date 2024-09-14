import React from 'react';
import Image from 'next/image';

const Brand: React.FC = (): JSX.Element => {
  return (
    <>
      <article className="flex flex-col items-center justify-center h-auto text-center py-6"
        style={{
          fontFamily: 'Kanit'
        }}
      >
        <figure>
          <Image
            src="https://asset.menica.pro/icon-amplop-1_greenyellow+1.png"
            alt="Menica - Platform Undangan Pernikahan Online"
            width={120}
            height={40}
            className="mb-4"
          />
        </figure>
        <h1 className="text-3xl font-bold mb-4">
          Hello! We are <span className="text-green-700">Menica</span>
        </h1>
        <p className="text-base max-w-xl mx-auto px-6 xm:px-0">
          Situs pembuat undangan digital dalam bentuk website dengan banyak fitur dan template keren siap pakai. Kamu bisa buat & edit sendiri (Full Custom) undangan pernikahan online dalam hitungan menit.
        </p>
      </article>
    </>
  );
}

export default Brand;
