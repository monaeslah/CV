import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { createClient } from '@/prismicio'

import * as prismic from "@prismicio/client";


import { LinkField } from '@prismicio/client'

import Header from '@/slices/Header'
import Introduction from '@/slices/Introduction';
import Experience from '@/slices/Experience';

import Education from '@/slices/Education';
import Hobbies from '@/slices/Hobbies';
import Footer from '@/slices/Footer';
import Portfolio from '@/slices/Portfolio';
import Samples from '@/slices/Samples';
export const components = {
    header: Header,
    introduction:Introduction,
    experience:Experience,
    education:Education,
    hobbies:Hobbies,
    footer:Footer,
    portfolio:Portfolio,
    samples:Samples
   
  }

  export const generateStaticParams = async () => {
    const client = createClient({});
  
    /**
     * Query all Documents from the API, except the homepage.
     */
    const pages = await client.getByUID("page", 'home');
    const header = await client.getByUID("header", 'header');
  
    const footer = await client.getByUID("footer", 'footer');
   
    // Log the fetched pages for debugging
 
  
    /**
     * Define a path for every Document.
     */
    return {
        props:pages.data,
        header,
        footer
    };
  }
//   {
//       predicates: [
//         prismic.filter.not("my.page.uid", "home"),
//         prismic.filter.not("my.page.uid", "header"),
//       ],
//     }

export const getExtraPageContent = async (uid: string) => {
  const client = createClient({})

  const header = await client.getByUID('header', 'header')
  const footer = await client.getByUID('footer', 'footer')
  try {
    const page = await client.getByUID('extra_page', uid)

    return {
      content: page.data ,
   
      header,
      footer
    }
  } catch (e) {
    return {
      content: '',
      
      header,
      footer
    }
  }
}
export const removeHttps = (item: any): LinkField => {
  // Check if item is defined and has a property 'url'
  if (item && item.url) {
    // Now it's safe to check if 'url' includes 'https://' and '#'
    if (item.url.includes('#') && item.url.includes('https://')) {
      item.url = item.url.substring(7);
    }
  }
  return item;
}