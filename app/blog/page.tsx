import React from 'react'
import Link from 'next/link'
import Header from '@/components/lp/header'
import Footer from '@/components/lp/footer'

const page = () => {

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
    <Header/> 
    <div
        style={{
            fontFamily: 'Kanit'
        }}
    >
      <div className="bg-white px-8 py-8 sm:px-32 sm:py-24 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <div key={index} className="flex items-start">
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
                <p className="text-sm text-gray-500">{post.description}</p>
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
    <Footer/>
    </>
  )
}

export default page