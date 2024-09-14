import React from 'react'
import type { Metadata } from 'next'
import Header from "@/components/lp/header";
import Footer from "@/components/lp/footer";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  import { ChevronDown } from "lucide-react"
  

  export const metadata: Metadata = {
    title: "Program Reseller Undangan Digital | Menica",
      openGraph: {
        title: "Program Reseller Undangan Digital  | Menica",
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

  const FAQItem = ({ question, answer }: any) => (
    <Collapsible className="w-full border rounded-lg mb-4 shadow-lg">
      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-green-700 text-white rounded-md">
        <span>Q: {question}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 bg-gray-50">
        <p>A: {answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
  
  async function KebijakanPrivasi () {

    const faqs = [
        {
          question: "Jadi reseller di Menica bayarnya berapa ya kak?",
          answer: "Harga 1 paket reseller menica 49rb 😁"
        },
        {
          question: "Cara daftar jadi Reseller gimana ya kak?",
          answer: "Silakan diikuti alur berikut ini ya kak: 😊 1. Daftar melalui link https://dashboard.menica.pro 2. Verifikasi Whatsapp Number 3. Isi data mempelai (ini sebagai formalitas saja) 4. Klik menu pada header, pilih \"Reseller\" 5. Lengkapi data, Isi akun instagram bisnis undangan digital kalian 6. Follow akun instagram official Menica @menica.pro 7. Klik \"Simpan & Ajukan\""
        },
        {
          question: "Kalau udah daftar dan bayar 49rb, bisa untuk bikin berapa undangan?",
          answer: "1x order paket reseller hanya untuk membuat 1 link undangan ya kak 😊"
        },
        {
          question: "1 link ngga bisa dipake berkali-kali ya kak? ",
          answer: "Tidak bisa kak😊 Untuk order client selanjutnya, silakan beli paket lagi seharga 49rb"
        },
        {
          question: "Jadi kalau bayar 1 paket reseller itu = 1 link undangan = untuk 1 customer aja ya kak?",
          answer: "Betul sekali kak ✅"
        },
        {
          question: "Kenapa 1 link ngga bisa dipake berkali-kali kak? ",
          answer: "Iya mohon maaf tidak bisa kak. Karena ada biaya server dan biaya jasa yang harus Menica keluarkan 😊"
        },
        {
          question: "Kalau harga 1 link 49rb, saya bisa jual lagi berapa ya? ",
          answer: "Bisa dijual mulai dari 100rb, 150rb, 200rb atau bahkan lebih. Tergantung berapa keuntungan yang mau didapatkan kak💰✨"
        },
        {
          question: "Cara bayarnya gimana kak?",
          answer: "Untuk pembelian paket reseller, pembayaran dilakukan dengan sistem pembayaran otomatis di web menica. Sementara untuk customer yang beli lewat kakak, pembayarannya bisa kakak tentukan sendiri. Lewat transfer bank, go-pay, shopee pay, cash atau apapun bebas ya kak 😁"
        },
      ];

    return (
      <main
        style={{
            fontFamily: 'Kanit'
        }}
      >
        <Header/>
        <div className='w-full px-8 py-8 sm:px-32 sm:py-24'>
        <h1 className="text-3xl font-bold mb-6">FAQ Reseller Menica</h1>

        {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}


        <div className="p-4 bg-yellow-500 rounded-md">
        Rata-rata 2,1 juta* (BPS) pasangan melangsungkan PERNIKAHAN setiap tahunnya. Ini pasar yang potensial untuk bisnis di bidang pernikahan. Salahsatunya yang sedang tren saat ini, jasa pembuatan undangan pernikahan digital. 
        </div>

        
        </div>
        <Footer/>
      </main>
    );
  }

  export default KebijakanPrivasi
  
