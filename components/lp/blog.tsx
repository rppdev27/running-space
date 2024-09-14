import React from 'react'
import Image from 'next/image'

const KeyFeatures: React.FC = (): JSX.Element => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16" style={{ fontFamily: 'Kanit' }}>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Bl<span className="text-green-600">og</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 sm:mt-24">
        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:col-span-1 lg:row-span-3 flex-col mx-auto w-3/4 sm:w-full">
          <Image 
            src="https://asset.menica.pro/image+19.svg" 
            alt="Whatsapp invitation sharing feature" 
            width={200} 
            height={200} 
            className="mr-4 ml-[-70px] mb-6"
          />
          <div>
            <h2 className="text-xl font-bold text-[#4A4242] mb-2">Sebar Undangan via Whatsapp</h2>
            <p className="text-gray-700">
              Cukup copy & paste link ke aplikasi whatsapp, lalu TARAAA... Thumbnail undangan akan muncul baik di smartphone Android maupun iPhone kamu.
            </p>
          </div>
        </article>

        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1 flex-col w-3/4 sm:w-full mx-auto mt-20 sm:mt-0">
          <Image 
            src="https://asset.menica.pro/image+20.svg" 
            alt="Multiple design options" 
            width={200} 
            height={200} 
            className="mr-4 mt-[-90px]"
          />
          <div>
            <h2 className="text-xl font-bold text-[#4A4242] mb-2">Banyak Pilihan Desain</h2>
            <p className="text-gray-700">
              Buat undangan digital kamu selaras dengan tema pernikahanmu.
            </p>
          </div>
        </article>

        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1 flex-col w-3/4 sm:w-full mx-auto mt-20 sm:mt-0">
          <Image 
            src="https://asset.menica.pro/image+20.svg" 
            alt="Smart design editor interface" 
            width={200} 
            height={200} 
            className="mr-4 mt-[-90px]"
          />
          <div>
            <h2 className="text-xl font-bold text-[#4A4242] mb-2">Smart Design Editor</h2>
            <p className="text-gray-700">
              Memudahkan kamu untuk Full Custom undangan digitalmu.
            </p>
          </div>
        </article>

        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-2 lg:col-span-2 flex-col sm:flex-row w-3/4 sm:w-full mx-auto">
          <Image 
            src="https://asset.menica.pro/image+20.svg" 
            alt="Guest database and RSVP management" 
            width={200} 
            height={200} 
            className="mr-4"
          />
          <div>
            <h2 className="text-xl font-bold text-[#4A4242] mb-2">Database Tamu & RSVP</h2>
            <p className="text-gray-700">
              Kelola data tamu dengan mudah dan dapatkan Konfirmasi Kehadiran tamu, ucapan, dan doa dari mereka.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default KeyFeatures
