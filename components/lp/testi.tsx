import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


const templateCategory:React.FC = ():JSX.Element => {

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

  const testilist = [
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-03.png',
        email: 'nqmr***@gmail.com',
        comment: 'Simpel, Hemat, Kereen!! '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-04.png',
        email: 'titipu***@gmail.com',
        comment: 'MenicaPro sangat membantu untuk membuat undangan digital secara gratis. Fiturnya menarik, desainnya elegan dan simple serta bisa kita sesuaikan sendiri. Terimakasih MenicaPro 🙏🏻 '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-05.png',
        email: 'Mutia****@gmail.com',
        comment: 'Adminnya baik bgt. Ngerti banget dengan semua kebawelan aku dan calon. Hihihi gak nyesel order undangan online disini. Murah, tapi kualitas gak murahan. Recomended pokoknya, terimakasih banyak kakak kakakk😘😘😘 '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-03.png',
        email: 'nqmr***@gmail.com',
        comment: 'Simpel, Hemat, Kereen!! '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-04.png',
        email: 'titipu***@gmail.com',
        comment: 'MenicaPro sangat membantu untuk membuat undangan digital secara gratis. Fiturnya menarik, desainnya elegan dan simple serta bisa kita sesuaikan sendiri. Terimakasih MenicaPro 🙏🏻 '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-05.png',
        email: 'Mutia****@gmail.com',
        comment: 'Adminnya baik bgt. Ngerti banget dengan semua kebawelan aku dan calon. Hihihi gak nyesel order undangan online disini. Murah, tapi kualitas gak murahan. Recomended pokoknya, terimakasih banyak kakak kakakk😘😘😘 '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-03.png',
        email: 'nqmr***@gmail.com',
        comment: 'Simpel, Hemat, Kereen!! '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-04.png',
        email: 'titipu***@gmail.com',
        comment: 'MenicaPro sangat membantu untuk membuat undangan digital secara gratis. Fiturnya menarik, desainnya elegan dan simple serta bisa kita sesuaikan sendiri. Terimakasih MenicaPro 🙏🏻 '
    },
    {
        photo: 'https://menica.pro/img/avatars/avatar-pasangan-05.png',
        email: 'Mutia****@gmail.com',
        comment: 'Adminnya baik bgt. Ngerti banget dengan semua kebawelan aku dan calon. Hihihi gak nyesel order undangan online disini. Murah, tapi kualitas gak murahan. Recomended pokoknya, terimakasih banyak kakak kakakk😘😘😘 '
    },
]


  return (
    <section className="max-w-4xl mx-auto px-4 py-16"
      style={{
        fontFamily: 'Kanit'
      }}
    >
      <h2 className="text-3xl font-bold text-center">
        Apa Kata <span className="text-green-700">Mereka</span>
      </h2>
      <p className="text-base font-light text-center mt-4">
        30.000 Happy Users
      </p>

      <div className="flex flex-row items-center justify-center mt-10 w-full">
      <AnimatedTooltip items={people} />
    </div>

      <div className="flex justify-center flex-row py-6">
      {/* <Marquee pauseOnHover={true} direction="right" className="flex flex-row items-stretch bg-white  overflow-hidden"> */}

              {/* {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="relative flex flex-col items-center bg-green-100 p-10 rounded-3xl w-[90%] shadow-sm m-2 cursor-pointer">
                  <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Standard</h3>
                  <img src="https://asset.menica.pro/image+20.svg" alt="Standard Design" className="mb-4" />
                  <img src="/standard-preview.png" alt="Standard Preview" />
                </div>
              ))} */}

                {/* {
                  testilist.map((item: any, index: any) => {
                    const translateX = Math.floor(Math.random() * 20) - 10; // Random value between -10 and 10
                    const translateY = Math.floor(Math.random() * 20) - 10; // Random value between -10 and 10
                    const rotate = Math.floor(Math.random() * 25) - 11; // Random value between -10 and 10 degrees

                    const backgroundColor = [
                      '#FFEBAE',
                      '#D8F4E0',
                      '#C7EFFF'
                    ][Math.floor(Math.random() * 2)];

                    return (
                      <div
                        key={index}
                        className="relative flex flex-col items-center rounded-3xl px-6 py-4 shadow-md cursor-pointer w-[300px] h-auto mt-10 mx-2"
                        style={{
                          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
                          backgroundColor: backgroundColor,
                        }}
                      >
                        <div className="flex flex-col text-left" >
                                                <div className="flex flex-row items-center justify-between">
                                                        <div className="font-bold text-sm my-2 mt-10 text-green-50" >
                                                            <span className={`text-9xl text-green-200] `} style={{ lineHeight: 0, fontFamily: 'Space Grotesk'}}
                                                            
                                                            >
                                                                &apos;&apos;
                                                            </span>
                                                        </div>
                                                        <div className={`text-[10px] flex flex-col items-end text-[#B4B4B4] `}  style={{marginTop: '-130px'}}>
                                                            <Image
                                                                src={item.photo}
                                                                height={50}
                                                                width={50}
                                                                className="mt-10 mb-2 shadow-lg rounded-xl"
                                                                alt="undangan digital"
                                                            />
                                                            {item.email}
                                                        </div>
                                                </div>
                                                
                                                <p className={`font-medium text-xs text-slate-500 mb-2 italic `} style={ {marginTop : '0px' }}>
                                                    {item.comment}
                                                </p>
                                                <div className="flex items-center rounded-md font-bold text-xs text-[#3EA80C]" >
                                                       
                                                </div>
                                            </div>
                      </div>
                    );
                  })
                } */}


            {/* <div className="relative flex flex-col items-center bg-yellow-100 p-10 rounded-3xl shadow-sm w-3/4 sm:w-full sm:mt-[-50px] mx-5 mt-14">
              <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Minisite</h3>
              <img src="https://asset.menica.pro/image+20.svg" alt="Minisite Design" className="mb-4" />
              <img src="/minisite-preview.png" alt="Minisite Preview" />
              <span className="absolute top-[-20px] right-0 bg-[#FBC317] text-[#8A6901] text-sm py-2 px-4 border-4 border-[#FBFBFB] shadow-md tracking-wide rounded-full font-bold">
                Best Seller
              </span>
            </div>

            <div className="flex flex-col items-center bg-green-100 p-10 rounded-3xl w-3/4 sm:w-full shadow-sm  mx-5 mt-14 sm:mt-0">
              <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Fresh</h3>
              <img src="https://asset.menica.pro/image+20.svg" alt="Fresh Design" className="mb-4" />
              <img src="/fresh-preview.png" alt="Fresh Preview" />
            </div> */}

        {/* </Marquee> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 sm:mt-24">
        {/* Card 1: Sebar Undangan */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:col-span-1 lg:row-span-3 flex-col mx-auto w-3/4 sm:w-full">
          <img src="https://asset.menica.pro/image+19.svg" alt="iPhone" className="mr-4 ml-[-70px] mb-6" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Sebar Undangan via Whatsapp</h3>
            <p className="text-gray-700">
              Cukup copy & paste link ke aplikasi whatsapp, lalu TARAAA... Thumbnail undangan akan muncul baik di smartphone Android maupun iPhone kamu.
            </p>
          </div>
        </div>

        {/* Card 2: Banyak Pilihan Desain */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1  flex-col w-3/4 sm:w-full mx-auto mt-20 sm:mt-0">
          <img src="https://asset.menica.pro/image+20.svg" alt="Design Options" className="mr-4 mt-[-90px]" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Banyak Pilihan Desain</h3>
            <p className="text-gray-700">
              Buat undangan digital kamu selaras dengan tema pernikahanmu.
            </p>
          </div>
        </div>

        {/* Card 3: Smart Design Editor */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-start lg:row-span-1  flex-col w-3/4 sm:w-full mx-auto  mt-20 sm:mt-0">
          <img src="https://asset.menica.pro/image+20.svg" alt="Smart Design Editor" className="mr-4 mt-[-90px]" />
          <div>
            <h3 className="text-xl font-bold text-[#4A4242] mb-2">Smart Design Editor</h3>
            <p className="text-gray-700">
              Memudahkan kamu untuk Full Custom undangan digitalmu.
            </p>
          </div>
        </div>

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
        
      </div>

      {/* <button className="mt-8 bg-green-700 text-white py-2 px-6 rounded-full flex items-center font-bold">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        Preview Tema
      </button> */}
    </section>
  )
}

export default templateCategory
