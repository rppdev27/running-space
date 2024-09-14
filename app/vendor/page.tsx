import React from 'react';
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";
import { Search } from 'lucide-react';

export const metadata: Metadata = {
    title: "Cari Vendor Pernikahan | Menica",
      openGraph: {
        title: "Cari Vendor Pernikahan | Menica",
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

const VendorCard = ({ name, description }: any) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-green-600 mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <button className="bg-yellow-400 text-sm font-semibold py-2 px-4 rounded">
      Lihat Vendor
    </button>
  </div>
);

const VendorSearch = () => {
  const vendors = [
    { name: 'Fama Media', description: 'Fama Media (Undangan Digital, Website & Cetak) Kami juga melayani : •' },
    { name: 'Diane Creative', description: 'Diane Creative (Undangan Digital, Website & Cetak) Kami juga melayani : •' },
    { name: 'Innovative.Project', description: 'Foto dan videografi selalu siap mengabadikan momen berharga Anda' },
    { name: 'Ryan Design', description: 'Freelancer Photo & Video Digital Undangan' },
    { name: 'Lorem Ipsum', description: 'Lorem Ipsum (Undangan Digital, Website & Cetak) Kami juga melayani' },
    { name: 'Berkah Stuff', description: 'Freelance Designer (Palugada Mode)' },
    { name: 'Fama Media', description: 'Fama Media (Undangan Digital, Website & Cetak) Kami juga' },
    { name: 'Chae-sthetics', description: 'All about esthetics~' },
  ];

  return (
    <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-8 sm:px-32 sm:py-24'>
        <div className="bg-white rounded-lg p-4 mb-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <h2 className="text-xl font-semibold">Temukan Vendor</h2>
            <select className="border rounded px-3 py-2 w-full md:w-auto">
            <option>Semua Kategori</option>
            </select>
            <select className="border rounded px-3 py-2 w-full md:w-auto">
            <option>Semua Provinsi</option>
            </select>
            <select className="border rounded px-3 py-2 w-full md:w-auto">
            <option>Semua Kota</option>
            </select>
            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <Search size={20} className="mr-2" />
            Temukan Vendor
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vendors.map((vendor, index) => (
            <VendorCard key={index} name={vendor.name} description={vendor.description} />
            ))}
        </div>
        </div>
        <Footer/>
    </main>
  );
};

export default VendorSearch;