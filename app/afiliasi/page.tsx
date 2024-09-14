import React from 'react'
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";

  export const metadata: Metadata = {
    title: "Program Afiliasi Undangan Digital | Menica",
      openGraph: {
        title: "Program Afiliasi Undangan Digital  | Menica",
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
  
  async function KebijakanPrivasi () {
    return (
      <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-8 sm:px-32 sm:py-24'>
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="text-lg font-semibold mb-2">IMPORTANT INFORMATION</p>
        <p className="mb-4">
        Please read these terms and conditions carefully before using this site. By accessing and using Menica, you agree to abide by these terms and conditions. Menica reserves the right to modify these terms at any time without prior notice.
        </p>

        <p className="text-lg font-semibold mb-2">LICENSE</p>
        <p className="mb-4">
        Members are registered users with the right to order an online wedding invitation and pay for it. Once purchased, members will receive an online wedding invitation with a unique subdomain link. Example: <a href="http://menica.pro/your_username" className="text-blue-500 hover:underline">http://menica.pro/your_username</a>. The subdomain name is generated based on the information provided in the order form.
        </p>

        <p className="text-lg font-semibold mb-2">COUPLE</p>
        <p className="mb-4">
        The information you provide for the couple should be accurate and not fictitious. You are solely responsible for the accuracy of the details submitted. Menica reserves the right to delete any content deemed unreasonable or falsified.
        </p>

        <p className="text-lg font-semibold mb-2">ERRORS, CORRECTIONS, AND CHANGES</p>
        <p className="mb-4">
        You are responsible for maintaining and editing your own invitation data. Menica is not liable for any errors in your content. Menica also reserves the right to delete invitations or accounts that display inappropriate or unreasonable content.
        </p>
        </div>
        <Footer/>
      </main>
    );
  }

  export default KebijakanPrivasi
  
