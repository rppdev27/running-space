import React from 'react'
import Link from 'next/link';
import Header from '@/components/lp/header';
import Footer from '@/components/lp/footer';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menica: Solusi Praktis Undangan Digital Sejak 2014',
    openGraph: {
      title: 'Menica: Solusi Praktis Undangan Digital Sejak 2014',
      description: "Platfrom Undangan Pernikahan Online Digital Terlengkap",
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

async function page(){
  
  const posts = [
    {
      title: "Mastering React Hooks",
      description: "Learn how to use React Hooks effectively in your projects.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
      title: "Optimizing Next.js Performance",
      description: "Discover techniques to improve the performance of your Next.js applications.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
      title: "Building a Serverless API with AWS",
      description: "Learn how to create a scalable and cost-effective API using AWS Lambda and API Gateway.",
      image: "https://generated.vusercontent.net/placeholder.svg",
    },
]

  return (
    <>
      {/* <div>{params.slug}</div> */}
      <Header/>
      <div className="container mx-auto px-8 py-8 sm:px-32 sm:py-24"
        style={{
          fontFamily: 'Kanit'
        }}
      >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Post Content */}
        <div className="w-full md:w-2/3 p-16 sm:p-4">
          <article className="prose max-w-none">
            <h1 className="text-3xl font-bold">Menica: Solusi Praktis Undangan Pernikahan Online Sejak 2014</h1>
            <img src={'https://asset.menica.pro/id-card-identification-svgrepo-com.svg'} alt='undangan digital' 
              className='shadow-md rounded-md mx-auto my-5'
              style={{
                width: '25%',
                height: 'auto'
              }}
            />
            <p className="mb-4">
            Seiring berkembangnya teknologi, undangan pernikahan kini tidak lagi terbatas pada format fisik. Menica, platform undangan digital yang telah berdiri sejak 2014, menjadi salah satu pionir dalam menyediakan layanan undangan pernikahan online di Indonesia. Dengan lebih dari 30,000 pengguna yang sudah terdaftar, Menica terus menjadi pilihan favorit bagi pasangan yang ingin membuat undangan online dengan mudah dan cepat.
            </p>

            <p className="mb-4">
            Undangan pernikahan online melalui Menica memberikan banyak kemudahan, mulai dari proses pembuatan yang sederhana hingga fitur yang lengkap. Dengan template undangan digital yang bisa disesuaikan, pasangan calon pengantin dapat menciptakan undangan yang mencerminkan tema dan gaya pernikahan mereka. Selain itu, Menica juga menyediakan fitur tambahan seperti katalog kado pernikahan, yang memudahkan tamu dalam memilih hadiah.
            </p>

            <p className="mb-4">
            Tidak hanya itu, Menica juga menawarkan program afiliasi dan reseller, sehingga pengguna dapat menghasilkan pendapatan tambahan melalui platform ini. Program afiliasi memungkinkan pengguna untuk mendapatkan komisi dari setiap undangan pernikahan yang berhasil dibuat melalui referensi mereka. Sementara itu, program reseller memberikan kesempatan bagi siapa saja untuk menjual layanan undangan pernikahan online Menica dengan harga yang lebih kompetitif.
            </p>

            <p className="mb-4">
            Dengan fokus pada inovasi dan kualitas, Menica terus mengembangkan layanan undangan pernikahan online agar semakin relevan dengan kebutuhan pasar. Baik untuk pasangan yang ingin menciptakan undangan digital yang unik maupun bagi mereka yang tertarik untuk bergabung sebagai afiliasi atau reseller, Menica menawarkan solusi lengkap dan terpercaya di industri undangan pernikahan online.
            </p>

          </article>

          {/* Social Media Buttons */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Share this post</h2>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?url=`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=`}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=`}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar with Other Articles */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Other Articles</h2>
            <div className="grid grid-cols-1 gap-4">
              {posts.map((post, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={post.image}
                      alt="Post thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                    {/* <p className="text-sm text-gray-500">{post.description}</p> */}
                    <div className="mt-2 text-sm">
                      <Link href="#" className="text-green-700 font-medium hover:underline" prefetch={false}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </div>
      <Footer/>
    </>
  )
}

export default page