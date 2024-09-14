import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { thunder, thunderB, generalSans } from '@/app/style'

export default function Home() {
  return (
    <main className="flex text-slate-800 min-h-screen flex-col items-center justify-center p-24 bg-white align-middle tracking-normal"
      style={{
        // fontFamily: 'Nunito'
      }}
    >

      {/* <h1
        style={{
          fontFamily: 'Nunito'
        }}
        className="text-5xl font-extrabold"
      >
        Platfrom Undangan Pernikahan Online
      </h1> */}
      <h1 className="text-4xl font-semibold text-black dark:text-white"
        style={{
          fontFamily: 'Kanit'
        }}
      >
        Platform Undangan <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        Pernikahan Online
        </span>
      </h1>
      <p
        style={{
          // fontFamily: 'Rubik'
        }}
        className={`text-sm font-normal my-4 text-slate-800 tracking-wide ${generalSans.className}`}
      >
      Bebas berkreasi dengan Smart Design Editor. Kelola data tamu & sebar undanganmu dengan mudah menggunakan Wedding Dashboard.
      </p>
      <div className="py-2 px-4 text-md rounded-md bg-green-700 text-center text-white font-semibold cursor-pointer tracking-wide"
        style={{
          fontFamily: 'Kanit'
        }}
      >
        Coba Gratis 8 Hari
      </div>
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className={`text-4xl font-semibold text-black dark:text-white ${thunderB.className}`}
            >
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
      
    </main>
  );
}
