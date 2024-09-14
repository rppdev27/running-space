import React from 'react'
import { useState, useEffect } from 'react';
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";
import DaftarTemplate from "@/components/daftar-template"

export const metadata: Metadata = {
  title: "Pilihan Template Undangan Digital | Menica",
    openGraph: {
      title: "Pilihan Template Undangan Digital | Menica",
      description: "Hubungi Undangan Digital",
      url: "https://menica.pro/kebijakan-privasi",
      siteName: "Menica",
      images: [
        {
          url: "https://asset.menica.pro/wathumbnailmenicav5.png",
          width: 800,
          height: 600,
          alt: "Undangan Digital Menica",
        },
      ],
      locale: 'id_ID',
      type: 'website',
    },
}


const LoginForm = () => {

  return (
    <>  
      <Header/>
        <div className="pt-24 text-center"
          style={{
            fontFamily: 'Kanit'
          }}
        >
          <h1 className='text-xl font-bold'>Daftar Template</h1>
        </div>
        <DaftarTemplate/>
      <Footer/>
    
    </>
  );
};

export default LoginForm;
