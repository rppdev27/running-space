/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost'
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com'
          },
          {
            protocol: 'https',
            hostname: 'uploadthing.com'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
          {
            protocol: 'https',
            hostname: 'ucarecdn.com'
          },
          {
            protocol: 'https',
            hostname: 'mui.com'
          },
          {
            protocol: 'https',
            hostname: 'menica.pro'
          },
          {
            protocol: 'https',
            hostname: 'menica.id'
          },
          {
            protocol: 'https',
            hostname: 'menica.site'
          },
          {
            protocol: 'https',
            hostname: 'menica.site'
          },
          {
            protocol: 'https',
            hostname: 'asset.menica.pro'
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co'
          },
          {
            protocol: 'https',
            hostname: 'inv.linimomen.com',
          },
          {
            protocol: 'https',
            hostname: 'secure.gravatar.com',
          },
          {
            protocol: 'https',
            hostname: '2.gravatar.com',
          },
          {
            protocol: 'https',
            hostname: '0.gravatar.com',
          },
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev'
          },
          {
            protocol: 'https',
            hostname: 'source.unsplash.com'
          },
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io'
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos'
          },
          {
            protocol: 'https',
            hostname: 'down-id.img.susercontent.com'
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com'
          }
        ]
    },
    env: {
      NEXTAUTH_SECRET: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
    },


};

export default nextConfig;
