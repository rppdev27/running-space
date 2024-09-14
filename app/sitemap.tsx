// import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: any = await response.json();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id }: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
    // lastModified: new Date(post.updatedAt),
    // changeFrequency:,
    // priority:
  }));

  return [
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/undangan-digital`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/undangan-gambar-digital`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/reseller`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/cari-kado-pernikahan`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/harga-paket`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/pilihan-template`,
        lastModified: new Date(),
    },
    ...postEntries,
  ];
}