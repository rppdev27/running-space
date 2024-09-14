import React from 'react'
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Menica",
    openGraph: {
      title: "Kebijakan Privasi | Menica",
      description: "Ketentuan Layanan Menica. Baca syarat dan ketentuan penggunaan situs ini sebelum menggunakan layanan.",
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
  
async function KebijakanPrivasi(){
    return (
      <main
        className='px-8 py-8 sm:px-32 sm:py-24'
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <h1>Kebijakan Privasi</h1>
        <p><strong>IMPORTANT INFORMATION</strong></p>
        <p>Read this terms and conditions carefully before using this site. By using this site, you are agreed with this terms and conditions. Menica can change this terms and conditions whenever we want.</p>
  
        <p><strong>LICENSE</strong></p>
        <p>Member is a registered user that has the right to order an online wedding invitation and pay for it. After that, the member will get one online wedding invitation with a subdomain link. Example: <a href="http://menica.pro/your_username">http://menica.pro/your_username</a>. The subdomain link name is taken from the order form that the member filled.</p>
  
        <p><strong>COUPLE</strong></p>
        <p>Couple is not fictive. If the information you filled is fictive, it will be your responsibility. Menica has the right to delete your information if it is unreasonable.</p>
  
        <p><strong>ERRORS, CORRECTIONS, AND CHANGES</strong></p>
        <p>Your invitation data is your responsibility. You can edit your own invitation, so Menica does not have responsibility for your data. Menica has the right to delete your invitation or even your account if you show unreasonable things.</p>
        <Footer/>
      </main>
    );
  }

  export default KebijakanPrivasi
  
