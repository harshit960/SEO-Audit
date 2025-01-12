// "use client"
import React from 'react'

import Image from 'next/image';
// import { Spotlight } from './components/Spotlight';
// import { MaskContainer } from './components/ui/svg-mask-effect';
import Link from 'next/link';
// import { StickyScroll } from './components/ui/sticky-scroll-reveal';
// import { TracingBeam } from './components/ui/tracing-beam';
import Animations from './components/Animations';
// import { twMerge } from "tailwind-merge";
// import { HoverEffect } from './components/ui/card-hover-effect';
import { TypewriterEffectSmooth } from './components/ui/typewriter-effect';
import Nav from './Nav';
import SearchBar from './components/SearchBar';
import Faq from './components/Faq';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { calsans } from "@/fonts/calsans";
import YouTubeIframe from './YTiframe';
import Blog from './sections/Blog';
import Pricing from './sections/Pricing';
import Reviews from './sections/Reviews';
import Contactus from './sections/Contactus';
import digiron from '../public/digiron.png';
// 8 points remaining
// got domain and gaccount
function Home() {
  const items = [{
    quote: "Meta Title ",
    name: "Your webpage's meta title is an HTML tag that defines the title of your page.",
    title: "test",
  }, {
    quote: "Meta Description ",
    name: "Your webpage's meta description is an HTML tag that is intended to provide a short",
    title: "test",
  }, {
    quote: "Social Media Meta Tags ",
    name: "This test will check if the analyzed webpage is using social media meta tags. ",
    title: "test",
  }]
  const content = [
    {
      title: "Meta Tags",
      description:
        "Meta tags are snippets of text that describe a webpage's content. They don't appear on the page itself but only in the page's source code. They are used by search engines to understand what the webpage is about.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Meta Tags
        </div>
      ),
    },
    {
      title: "Why They Are Important",
      description:
        "Meta tags are crucial for SEO because they directly impact how search engines interpret and rank your webpage. Effective meta tags can improve the visibility of your website in search engine results, increase click-through rates, and attract more visitors. Improved Click-Through Rates (CTR) A compelling title tag and meta description can entice users to click on your link. Relevance and Ranking Properly optimized meta tags help search engines determine the relevancy of your content to specific search queries, potentially improving your ranking. User Experience Clear and accurate meta tags provide users with a good understanding of what to expect from the content, improving their overall experience.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "How to Optimize Them",
      description:
        "Title Tag Optimization, Meta Description Optimization, Other Meta Tags Title Tag Optimization, Meta Description Optimization, Other Meta Tags Title Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta TagsTitle Tag Optimization, Meta Description Optimization, Other Meta Tags",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          How to Optimize Them
        </div>
      ),
    },

  ];


  const words = [
    {
      text: "Try",
    },

    {
      text: "SEOAudit",
      className: "text-[#F8D57E]",
    },
    {
      text: "Today",
    },
  ];
  return (<>
    <Nav />
    <div className='flex  w-full items-center  lg:items-center lg:h-screen h-[90vh] overflow-hidden bg-[#]'>


      <div className="flex flex-col px-8 w-full items-center justify-center ">

        <div className="lg:text-6xl text-4xl flex items-center justify-center flex-col w-full">
          <div className="text-[#2D2D2D] font-black lg:text-center">
            <h1>

              SEO Audit <span className='text-[#F8D57E]'> Checklist </span> and
              <br />
              Reporting Tool
            </h1>
          </div>
          <Animations src="https://lottie.host/9be912a0-8874-4453-9149-881b6eb675ad/mEIIPGP58H.json" className="absolute bottom-16 right-0 w-1/2  -z-10 overflow-hidden" />

          <Animations
            src="https://lottie.host/9a449fcb-8434-4985-ae02-866607de0cd4/H3276bRGu1.json"
            className='absolute top-40 left-36 w-1/4  -z-10 overflow-hidden'
          />
        </div>
        <div className="my-2 mt-5 text-black text-base lg:text-xl">
          Get a comprehensive website audit to boost your SEO score and drive more organic traffic.
        </div>
        <div className="flex items-center lg:justify-center flex-wrap mt-5 w-full drop-shadow-lg	">

          <SearchBar />

        </div>

      </div>
    </div>
    <div className="mb-10">
      <div className="bg-gray-200 py-12 mb-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Trusted by Leading Brands
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="flex justify-center w-full flex-wrap">
              {/* Replace the src attributes with the logos of your trusted brands */}
              <div className="flex justify-center">
                <img className="h-14 m-2 lg:mx-10 my-3" src="https://wexert.com/wp-content/uploads/2019/02/wexert-logo-2.png" alt="Brand 1" />
              </div>
              <div className="flex justify-center">
                <img className="h-20 m-2 lg:mx-10 my-3" src={`/digiron.png`} alt="Brand 2" />
              </div>
              <div className="flex justify-center items-center">
                <img className="h-10 m-2 lg:mx-10 my-3" src="https://morphinfotech.com/wp-content/uploads/2024/09/logo-horizontal-dark.png" alt="Brand 3" />
              </div>
              {/* <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-2.svg" alt="Brand 4" />
              </div>
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-5.svg" alt="Brand 5" />
              </div> */}
              {/* Add more logos as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-20 lg:mt-0 flex flex-col justify-center items-center ">
      <div className="lg:text-3xl text-3xl text-black font-black text-center">
        All in One SEO Tool
      </div>
      <div className="flex justify-center mt-20  flex-wrap  ">
        <div className="w-80 h-96 rounded-2xl m-5 border border-[#c9d2fc] shadow-2xl hover:shadow-xl hover:shadow-[#c9d2fc] duration-150 shadow-[#c9d2fc] flex flex-col items-center justify-center bg-neutral-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>

          <div className="text-2xl p-5 text-[#2D2D2D] font-semibold">Meta Title
          </div>
          <div className="text-base text-center px-10">
            A meta title test helps evaluate the effectiveness of your page titles in improving SEO and click-through rates on search engines.
          </div>
          <Link href="/tools/1/meta-title-test" className="text-[#009379] flex font-semibold p-4 items-center justify-center">
            Try Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </Link>
        </div>
        <div className="w-80 border m-5 border-[#c9d2fc] bg-neutral-50 h-96 rounded-2xl shadow-2xl hover:shadow-xl hover:shadow-[#c9d2fc] duration-150 shadow-[#c9d2fc] flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5" />
          </svg>

          <div className="text-2xl p-5 text-[#2D2D2D] font-semibold">Meta Description
          </div>
          <div className="text-base text-center px-10">
            A meta description is a short summary of a page content, designed to attract users in search results and boost click-through rates.          </div>
          <Link href="/tools/2/meta-description-test" className="text-[#009379] flex font-semibold p-4 items-center justify-center">
            Try Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </Link>
        </div>
        <div className="w-80 border m-5 border-[#c9d2fc] bg-neutral-50 h-96 rounded-2xl shadow-2xl hover:shadow-xl hover:shadow-[#c9d2fc] duration-150 shadow-[#c9d2fc] flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>

          <div className="text-2xl p-5 text-[#2D2D2D] font-semibold">Headings
          </div>
          <div className="text-base text-center px-10">
            Heading tags are HTML elements used to structure content on a webpage. They help organize text, improve SEO, and enhance readability.
          </div>
          <Link href="/tools/10/heading-tags-test" className="text-[#009379] flex font-semibold p-4 items-center justify-center">
            Try Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </Link>
        </div>

      </div>
      <Link href="tools" className="bg-[#2D2D2D] whitespace-nowrap  rounded p-3 hover:bg-[#009379] hover:shadow-2xl hover:shadow-[#c9d2fc] duration-200 text-white text-center font-semibold mt-8 px-8">
        Explore More Tools
      </Link>
    </div>
    <div className="">

      <div className="w-full mt-40">
        <div className="text-3xl text-center font-black p-5">Our Impact in Numbers: Proven SEO Success</div>
        <div className="text-base text-center m-4">Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.</div>
      </div>
      <div className="flex justify-center flex-wrap mt-10">
        <div className="w-60 h-28 m-5 border-b-4 shadow-2xl shadow-[#b7bac7a8] border-[#F2BFAF] bg-neutral-50 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold">500+</div>
          <div className="text-base">Websites Analyzed          </div>
        </div>
        <div className="w-60 h-28 m-5 border-b-4 shadow-2xl shadow-[#b7bac7a8] border-[#F2BFAF] bg-neutral-50 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold">15+</div>
          <div className="text-base">Industries Served</div>
        </div>
        <div className="w-60 h-28 m-5  border-b-4 shadow-2xl shadow-[#b7bac7a8] border-[#F2BFAF] bg-neutral-50 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold">85%</div>
          <div className="text-base">Client Retention Rate</div>
        </div>
        <div className="w-60 h-28 m-5 border-b-4 shadow-2xl shadow-[#b7bac7a8] border-[#F2BFAF] bg-neutral-50 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold">75%</div>
          <div className="text-base text-center">Average Improvement in SEO Scores
          </div>
        </div>
      </div>

    </div>
    <div className="w-full flex bg-gray-100 mt-32 lg:p-20 p-5 py-12 flex-wrap">
      <div className="flex flex-col lg:w-1/2 ">
        <div className="text-4xl font-bold">Video Guide: SEO Audit Tool</div>
        <div className="font-light text-xl text-justify leading-10 mt-10 pr-10">
          Discover how you can use SEOvew effectively by exploring our detailed video tutorial. Learn which metrics you can track, analyze and implement actionable insights to improve your website speed and overall performance. From identifying SEO issues to improving overall organic traffic, this video will help us to understand how efficiently you can optimize your website using our tool.

        </div>
      </div>
      <div className="grow mt-10 lg:mt-0">
        {/* <iframe className='w-full h-full' src="https://www.youtube.com/embed/MYE6T_gd7H0?si=wNTqbGkgooX4ilQp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe> */}
        <YouTubeIframe videoId="MYE6T_gd7H0?si=wNTqbGkgooX4ilQp" />

      </div>
    </div>
    <div className="flex w-full lg:h-[] flex-wrap justify-center   mt-10 items-center">
      <div className="lg:w-1/3 p-10 lg:p-5">
        <div className="lg:text-5xl text-3xl font-bold leading-20	">
          360 SEO Audit Tool

        </div>
        <div className="text-xl py-6 leading-10 font-light	text-justify	">
          Introducing SEOvew 360 SEO Audit Tool, designed to provide a comprehensive analysis of your website's performance. SEOvew SEO tool evaluates key aspects such as technical SEO, on-page optimization, keyword effectiveness, and site speed, giving you a complete view of your online presence. With detailed reports and actionable insights, you can identify critical issues and opportunities for improvement.

        </div>
        <Link href="/tools" className="text-white whitespace-nowrap hover:bg-[#2D2D2D] duration-200 bg-[#009379] w-32 p-2 rounded text-center font-semibold">
          Explore More Tools
        </Link>
      </div>
      <div className="lg:w-1/3">
        <Animations
          src="https://lottie.host/a92a613e-7bc8-4b1a-8490-3322ccca5cb5/nuwfVTC9cP.json"
          className="scale-[1] w-[450px] h-[450px]"
        />
      </div>
    </div>
    <div className="flex w-full lg:h-[] justify-center mt-10 flex-wrap lg:flex-nowrap items-center">
      <div className="lg:w-1/3">
        <Animations
          src="https://lottie.host/759cd847-27af-459a-aeb7-b8f79bd454f4/iHzXLGv0Jv.json"
          className="scale-[1] w-[450px] h-[450px]"
        />
      </div>
      <div className="lg:w-1/3 lg:mx-10  p-10 pt-40 lg:p-5">
        <div className="lg:text-5xl text-3xl font-bold  leading-20	">
          Download Your Report
        </div>
        <div className="text-xl py-6  leading-10 font-light		">
          Get your comprehensive SEO audit report instantly! Simply click the download button to receive your website SEO Audit report, which includes a detailed analysis of your website’s performance. This report highlights key findings, actionable recommendations, and important metrics to help you enhance your SEO strategy.

        </div>
        <Link href="run" className="text-white hover:bg-[#2D2D2D] duration-200 bg-[#009379] w-32 p-2 rounded text-center font-semibold">
          Learn More
        </Link>
      </div>
    </div>
    {/* <Pricing /> */}
    <Reviews />
    <Blog />
    <div className="flex lg:p-20 p-5 mt-20">
      <div className="bg-[#E5F4F2] flex flex-col w-full lg:p-20 p-5 py-10 rounded-xl text-[#2D2D2D]">
        <div className="text-3xl font-semibold">
          Why SEOvew?
        </div>
        <div className="text-xl font-light leading-relaxed mt-8">
          Getting your website to rank in Google is harder and more competitive than ever. There are many factors such as on page content, performance, social factors and backlink profile that search engines like Google use to determine which sites should rank highest.
          <br />
          <br />
          SEOptimer is a free SEO Audit Tool that will perform a detailed SEO Analysis across 100 website data points, and provide clear and actionable recommendations for steps you can take to improve your online presence and ultimately rank better in Search Engine Results. SEOptimer is ideal for website owners, website designers and digital agencies who want to improve their own sites or theirs of their clients.
          <br />
          <br />
          SEOptimer is better than other Website SEO Checkers through it`s super fast SEO analysis execution, JavaScript rendering and breadth of features.
          <br />
          <br />
          Additionally SEOptimer provides a range of free SEO Tools such as Backlink Checker, Meta Tags and Robots.txt Generator which will help take you through the actual steps of improving your site.
          <br />
          <br />
          Last but not least, the SEOptimer blog provides a bunch of relevant articles and tips and tricks for you to stay on top of the SEO improvement landscape.
        </div>

      </div>
    </div>
    <div className="relative ml-2 flex flex-col items-center justify-center">
      <div className="my-20 w-full flex flex-col items-center justify-center">
        <div className="lg:text-5xl text-4xl my-2 text-center font-extrabold ">
          Frequently Asked Questions
        </div>
        <div className="lg:text-lg text-center font-semibold opacity-90">
          Everything you have to know about the SEO Checker
        </div>
        <div className="lg:w-3/5 mt-5 w-4/5">

          <Faq />
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-10 text-white items-center justify-center py-32  bg-[#2D2D2D]">
      <p className="text-white dark:text-neutral-200 text-base sm:text-base  ">
        What Are You Waiting For?
      </p>

      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="run" className=''>
          <button className="w-40 h-10 rounded-lg bg-[#009379] hover:bg-[#F8D57E] duration-300 border dark:border-white border-transparent text-white text-sm">
            ANALYZE
          </button>
        </Link>
      </div>
    </div>

    <div className=" w-full flex flex-col lg:p-32">
      <div className="border rounded p-14">
        <div className="text-2xl font-bold">
          Let’s get in touch!
        </div>
        <div className="text-base mt-1">Thank you for visiting.  Whether you have a question about our SEO audit services or need assistance with optimizing your website, we're here to help. Please feel free to reach out to us using the contact information below:
        </div>
        <div className="flex lg:mt-10 mt-5 justify-between items-stretch flex-wrap-reverse lg:flex-nowrap">

          <div className="flex flex-col w-full items-stretch mt-0">
            {/* <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
              +91 7894561587
            </div> */}
            <div className="flex mt-3">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> */}
              {/* <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> */}
            {/* </svg> */}
              bloggearpost@gmail.com
              <br />
              155, Panchkula, Haryana
              <br />
              Business Hours: 09:00 AM - 06:00 PM IST
            </div>
            <div className="text-xl font-semibold mt-11">Connect with us</div>
            <div className="flex mt-1 justify-between w-28">

              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg> */}
              <Link href="https://www.youtube.com/channel/UCmafeX3_9idkzsTS5SrRFpA" aria-label="YouTube">
              <svg
                className="h-8 w-8 hover:text-red-600 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
              >
                <path
                  className="fill-current"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </svg>
            </Link>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg> */}


            </div>

          </div>
          <Contactus />
        </div>
      </div>
    </div>
  </>
  )
}

export default Home