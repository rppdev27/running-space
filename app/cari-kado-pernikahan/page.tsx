import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
    return {
      title: "Inspirasi kado pernikahan | Menica",
      openGraph: {
        title: "Inspirasi kado pernikahan | Menica",
        description: "Buat Inspirasi kado pernikahan disini gratis!",
        url: "https://menica.pro/kebijakan-privasi",
        siteName: "Menica",
        images: [
          {
            url: "https://menica.pro/thumbnail.jpg",
            width: 800,
            height: 600,
            alt: "Undangan Digital Menica",
          },
        ],
        locale: 'id_ID',
        type: 'website',
      },
    };
  }
  
  const KebijakanPrivasi = () => {
    return (
      <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-8 sm:px-32 sm:py-24'>
            <h1 className="text-3xl font-bold mb-6">Inspirasi kado pernikahan</h1>

            <p className="mb-4">
                Cari kado pernikahan disini, by Menica.
            </p>
            
        </div>
        <Footer/>


      </main>
    );
  }

  export default KebijakanPrivasi
  
