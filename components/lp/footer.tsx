import React from 'react';
import { Send, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-8"
        style={{
            fontFamily: 'Kanit'
        }}
    >
      <div className="container mx-auto sm:px-32 sm:py-8 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:p-10">
          {/* Menica Section */}
          <div className='text-center sm:text-left'>
            <div className="flex items-center mb-4 justify-center sm:justify-start">
              <Send className="mr-2" />
              <h2 className="text-2xl font-bold">Menica</h2>
            </div>
            {/* <p className="mb-4 font-light text-sm">Menica adalah salah satu brand dari PT Alfath Teknologi Grup.</p> */}
            <p className="mb-4 font-light text-sm">Website ini merupakan platform pembuatan undangan pernikahan online atau undangan pernikahan digital atau undangan digital dalam bentuk website yang langsung jadi, undangan pernikahan video, dan undangan pernikahan gambar digital</p>
            <button className="text-white underline text-xs">LEBIH BANYAK</button>
          </div>

          {/* Explore Section */}
          <div className='text-center'>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className='font-light text-sm'>
              {['Tentang Kami', 'Blog', 'Instagram Filter', 'Harga Paket', 'Video Tutorial'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div className='text-center'>
            <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
            <ul className='font-light text-sm'>
              {[ 'Reseller', 'Afiliasi', 'Term of Service', 'Privacy Policy', 'Contact'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className='font-light text-sm text-center'>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-4 text-center justify-center">
              <Phone className="mr-2" />
              <span>+62 813 8159 3461</span>
            </div>
            <div className="flex items-center mb-4 text-center justify-center">
              <Mail className="mr-2" />
              <span>hello@menica.pro</span>
            </div>
            {/* <div className="flex items-center text-center justify-center">
              <span className="mr-2">By</span>
              <img src="/api/placeholder/100/40" alt="Alfath Innovative" className="h-10" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs bg-slate-800 text-white p-6 font-light">
        <p>Dilarang mengopi, menerjemahkan dan menduplikasi semua konten tanpa adanya ijin tertulis dari pihak Menica</p>
        <p>Copyright © 2014-{new Date().getFullYear()} Menica - Platform Undangan Digital Terlengkap</p>
      </div>
    </footer>
  );
};

export default Footer;