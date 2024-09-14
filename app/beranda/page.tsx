import React from 'react'
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";

export const metadata: Metadata = {
  title: "Undangan Digital | Menica",
  description: "Ketentuan Layanan Menica. Baca syarat dan ketentuan penggunaan situs ini sebelum menggunakan layanan.",
  openGraph: {
    title: "Undangan Digital | Menica",
    description: "Ketentuan Layanan Menica. Baca syarat dan ketentuan penggunaan situs ini sebelum menggunakan layanan.",
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
}

  
  async function KebijakanPrivasi () {
    return (
      <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-8 sm:px-32 sm:py-24'>
            <h1 className="text-3xl font-bold mb-6">Undangan Digital</h1>

            <p className="mb-4">
            Menica adalah platform undangan pernikahan digital terkemuka yang telah melayani ribuan pasangan sejak 2014. Kami menawarkan undangan online yang praktis dan mudah digunakan dengan berbagai pilihan desain keren. Buat undangan pernikahan Anda dalam hitungan menit dengan Menica!
            </p>
            <p className="mb-4">
            Dengan berbagai template menarik, Menica memungkinkan setiap pasangan untuk membuat undangan pernikahan digital yang sesuai dengan tema dan gaya mereka. Anda dapat menyesuaikan undangan online dengan foto, peta lokasi, dan detail acara untuk memberikan sentuhan pribadi.
            </p>
            <p className="mb-4">
            Menica mempermudah Anda dalam menyebarkan undangan pernikahan online ke tamu melalui berbagai platform, termasuk media sosial. Dengan SEO yang dioptimalkan, Menica adalah solusi terbaik untuk membuat undangan pernikahan digital yang elegan dan profesional.
            </p>
        </div>
        <Footer/>


      </main>
    );
  }

  export default KebijakanPrivasi
  
