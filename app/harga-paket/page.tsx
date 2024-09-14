import React from 'react'
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";
import { Star } from 'lucide-react';

  export const metadata: Metadata = {
    title: "Kontak Layanan Undangan Digital | Menica",
      openGraph: {
        title: "Kontak Layanan Undangan Digital | Menica",
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

  
  const PriceCard = ({ title, price, features, isFavorite }: any) => (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${isFavorite ? 'border-2 border-green-700' : ''}`}>
      {isFavorite && (
        <div className="self-end bg-green-700 text-white px-2 py-1 rounded-full text-sm mb-2 flex items-center">
          <Star size={16} className="mr-1" /> Favorite
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-6">${price}</p>
      <ul className="mb-6 flex-grow">
        {features.map((feature: any, index: any) => (
          <li key={index} className="mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
        Choose Plan
      </button>
    </div>
  );
  
  const AddOns = ({ addOns }: any) => (
    <div className="bg-gray-100 rounded-lg p-6 mt-8 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Add-on Features</h3>
      <ul>
        {addOns.map((addon: any, index: any) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>{addon.name}</span>
            <span className="font-semibold">${addon.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  async function KebijakanPrivasi () {
    const plans = [
      {
        title: "Basic",
        price: 99,
        features: ["100 invitations", "Basic design", "Digital download"],
        isFavorite: false
      },
      {
        title: "Premium",
        price: 199,
        features: ["200 invitations", "Custom design", "Digital download", "Printed copies"],
        isFavorite: true
      },
      {
        title: "Luxury",
        price: 299,
        features: ["Unlimited invitations", "Premium design", "Digital download", "Printed copies", "RSVP management"],
        isFavorite: false
      }
    ];
  
    const addOns = [
      { name: "Envelope addressing", price: 50 },
      { name: "Foil printing", price: 75 },
      { name: "Custom map", price: 25 },
    ];
    return (
      <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-24 sm:px-32 sm:py-24'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
              <PriceCard key={index} {...plan} />
            ))}
          </div>
          <AddOns addOns={addOns} />
        </div>
        <Footer/>
      </main>
    );
  }

  export default KebijakanPrivasi
  
