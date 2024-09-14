import React from 'react'
import { Metadata } from 'next';
import Image from "next/image";
// import { thunder, thunderB, generalSans } from '../style'
import Header from '@/components/lp/header';
import Hero from '@/components/lp/hero';
import Brand from '@/components/lp/brand';
import TemplateCategory from '@/components/lp/templateCategory';
import KeyFeatures from '@/components/lp/keyFeatures';
import FeaturesList from '@/components/lp/featuresList';
import PriceList from '@/components/lp/pricelist';
import Gift from '@/components/lp/gift';
import Testi from '@/components/lp/testi';
import Bisnis from '@/components/lp/bisnis';
import Blog from '@/components/lp/blog';
import Footer from '@/components/lp/footer';

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Online Digital - Menica',
  description: 'Undangan pernikahan online atau undangan pernikahan digital dengan desain website ekslusif. Yuk buat undangan digital kekinian hanya dalam 1 menit',
  openGraph: {
    title: 'Undangan Pernikahan Online Digital - Menica',
    description: 'Undangan pernikahan online atau undangan pernikahan digital dengan desain website ekslusif. Yuk buat undangan digital kekinian hanya dalam 1 menit',
    url: 'https://menica.pro',
    siteName: 'Menica',
    images: [
      {
        url: 'https://asset.menica.pro/wathumbnailmenicav5.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://asset.menica.pro/wathumbnailmenicav5.png',
        width: 1800,
        height: 1600,
        alt: 'Undangan Digital Menica',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

async function Menica (){
  return (
    <>
        <Header/>
        <Hero/>
        <Brand/>
        <Testi/>
        <TemplateCategory/>
        <KeyFeatures/>
        <FeaturesList/>
        <PriceList/>
        <Gift/>
        <Bisnis/>
        <Blog/>
        <Footer/>
    </>
  )
}

export default Menica
