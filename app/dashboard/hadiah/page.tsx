import React from 'react';
import { dataKado } from "@/datalist/gift"
import { ExternalLinkIcon, PlusCircleIcon } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"

const GiftPickerThumbnail = ({ title, price, terjual, thumbnail }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <img 
        className="w-full h-48 object-cover" 
        src={thumbnail}
        alt={title} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">Harga: Rp.{price}</p>
        <p className="text-gray-600">Terjual: {terjual}</p>
        <button className="mt-4 w-full py-2 px-4 bg-slate-700 text-white rounded shadow-md hover:bg-slate-600 flex justify-center items-center align-middle text-center">
         <ExternalLinkIcon className='h-4 w-4 mr-1'/> Lihat
        </button>
        <button className="mt-4 w-full py-2 px-4 bg-green-700 text-white rounded shadow-md hover:bg-green-600 flex justify-center items-center align-middle text-center">
          <PlusCircleIcon className='h-4 w-4 mr-1'/> Pilih
        </button>
      </div>
    </div>
  );
};

const Page = () => {
  // Simulate 20 data entries
  const data = dataKado.map((kado: any, index: any) => ({
    id: index + 1,
    title: kado.title,
    price: kado.price,
    terjual: kado.terjual,
    thumbnail: kado.thumbnail
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-8"
      style={{
        fontFamily: 'Kanit'
      }}
    >
      <h1 className="text-lg font-bold"> Katalog Kado </h1>
      <div className="py-1 text-base">
        Pilih Kado yang ingin ditampilkan di undangan Anda
      </div>
      <Textarea placeholder="Tuliskan alamat tujuan pengiriman, alamat mempelai" />
      <div className="py-1 text-xs">
        Total Kado saat ini : {data.length}
      </div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <GiftPickerThumbnail 
            key={item.id}
            title={item.title}
            price={item.price}
            terjual={item.terjual}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
