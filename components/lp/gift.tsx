import React from 'react'

const keyFeatures = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-50"
      style={{
        fontFamily: 'Kanit'
      }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Kado <span className="text-green-600">Pernikahan</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 sm:mt-24 sm:w-full max-w-4xl">
        {/* Card 1: Sebar Undangan */}
        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:col-span-1 lg:row-span-3 flex-col mx-auto w-3/4 sm:w-full">
          <img src="https://asset.menica.pro/image+19.svg" alt="iPhone" className="mr-4 ml-[-70px] mb-6" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Sebar Undangan via Whatsapp</h3>
            <p className="text-gray-700">
              Cukup copy & paste link ke aplikasi whatsapp, lalu TARAAA... Thumbnail undangan akan muncul baik di smartphone Android maupun iPhone kamu.
            </p>
          </div>
        </article>

        {/* Card 2: Banyak Pilihan Desain */}
        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1  flex-col w-3/4 sm:w-full mx-auto mt-20 sm:mt-0">
          <img src="https://asset.menica.pro/image+20.svg" alt="Design Options" className="mr-4 mt-[-90px]" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Banyak Pilihan Desain</h3>
            <p className="text-gray-700">
              Buat undangan digital kamu selaras dengan tema pernikahanmu.
            </p>
          </div>
        </article>

        {/* Card 3: Smart Design Editor */}
        <article className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1  flex-col w-3/4 sm:w-full mx-auto  mt-20 sm:mt-0">
          <img src="https://asset.menica.pro/image+20.svg" alt="Smart Design Editor" className="mr-4 mt-[-90px]" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Smart Design Editor</h3>
            <p className="text-gray-700">
              Memudahkan kamu untuk Full Custom undangan digitalmu.
            </p>
          </div>
        </article>

        {/* Card 4: Database Tamu & RSVP */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-2 lg:col-span-2 flex-col sm:flex-row w-3/4 sm:w-full mx-auto">
          <img src="https://asset.menica.pro/image+20.svg" alt="Database Tamu" className="mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Database Tamu & RSVP</h3>
            <p className="text-gray-700">
              Kelola data tamu dengan mudah dan dapatkan Konfirmasi Kehadiran tamu, ucapan, dan doa dari mereka.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default keyFeatures
