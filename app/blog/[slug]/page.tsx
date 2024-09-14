import React from 'react'
import Link from 'next/link';
import { delay } from "@/lib/delay";
import Header from '@/components/lp/header';
import Footer from '@/components/lp/footer';
import { cache } from 'react';
import { notFound } from 'next/navigation';

import dynamic from 'next/dynamic';
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// interface BlogPostPageProps {
//   params: { postId: string };
// }

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: any = await response.json();

  console.log(posts);

  return posts.map(({ id }: any) => id);
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  // fetch here using params.slug

  const response = await fetch(`https://dummyjson.com/posts/${params.slug}`);
  const post: any = await response.json();
 
  return {
    title: post.title,
    description: post.body,
    openGraph: {
        title: post.title,
        description: post.body,
        // title: params.slug
        // title: metadata_web.title,
        // description: metadata_web.description,
        // url: `https://menica.pro/blog/${link_invitation[0].linkUrl}`,
        // siteName: link_invitation[0].linkUrl,
        // images: [
        // {
        //     url: metadata_web.thumbnail,
        //     width: 800,
        //     height: 600,
        // },
        // {
        //     url: metadata_web.thumbnail,
        //     width: 1800,
        //     height: 1600,
        //     alt: 'Undangan Digital Menica',
        // },
        // ],
        // locale: 'en_US',
        // type: 'website',
    },
    // title: metadata_web.title
    // title: params.slug
  }
}

const page = async ({ params, searchParams }: Props) => {

  const responseList = await fetch("https://dummyjson.com/posts");
  const { posts }: any = await responseList.json();


  const response = await fetch(`https://dummyjson.com/posts/${params.slug}`);
  const { title, body }: any = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);
  
  const postsx = [
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
            <h1 className="text-3xl font-bold">{title}</h1>
            <img src={'https://asset.menica.pro/blog/thumb_1608277011771_5.jpg'} alt='undangan digital' 
              className='shadow-md rounded-md my-2'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
            <p>
              {body}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p>
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
          </article>

          {/* Social Media Buttons */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Share this post</h2>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${params.slug}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${params.slug}`}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${params.slug}`}
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
              {posts.map((post: any, index: any) => (
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