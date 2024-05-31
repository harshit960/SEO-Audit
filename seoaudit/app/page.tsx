"use client"
import React from 'react'
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards'
// import { MovingBorder } from './components/ui/moving-border'
import { Button } from "./components/ui/moving-border";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ContainerScroll } from './components/ui/container-scroll-animation';
import Image from 'next/image';
import { Spotlight } from './components/Spotlight';
import { MaskContainer } from './components/ui/svg-mask-effect';
import Link from 'next/link';
import { StickyScroll } from './components/ui/sticky-scroll-reveal';
import { TracingBeam } from './components/ui/tracing-beam';
import { twMerge } from "tailwind-merge";
import { HoverEffect } from './components/ui/card-hover-effect';
import { TypewriterEffectSmooth } from './components/ui/typewriter-effect';
// import { calsans } from "@/fonts/calsans";

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

  const dummyContent = [
    {
      title: "Blog 1",
      description: (
        <>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>

        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Blog 2",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur

          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  const faq = [
    {
      que: "What is an SEO checker?",
      desc: "The Seobility SEO checker is a tool that scans any web page for technical errors and SEO issues that can have a negative impact on search engine rankings. Use it to get a comprehensive list of errors found on your web page and find out where you still have to improve your website."
    },
    {
      que: "What is an SEO checker?",
      desc: "The Seobility SEO checker is a tool that scans any web page for technical errors and SEO issues that can have a negative impact on search engine rankings. Use it to get a comprehensive list of errors found on your web page and find out where you still have to improve your website."
    },
    {
      que: "What is an SEO checker?",
      desc: "The Seobility SEO checker is a tool that scans any web page for technical errors and SEO issues that can have a negative impact on search engine rankings. Use it to get a comprehensive list of errors found on your web page and find out where you still have to improve your website."
    },
  ]
  const words = [
    {
      text: "Try",
    },

    {
      text: "SEOAudit",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Today",
    },
  ];
  return (<>

    <div className='flex items-center lg:h-screen h-[90vh] overflow-hidden'>

      <div className="p-0 basis-1/2 hidden lg:inline">

        <img src="3 1.png" alt="" className='h-screen ' />
      </div>
      <div className="flex flex-col px-8">
        <div className="my-2 text-black">
          {/* Supercharged analysis & monitoring tools */}
        </div>
        <div className="lg:text-7xl text-4xl">
          <div className="text-[#221A43] font-black">
            SEO Audit
            <br /> Checklist and
          </div>
          <div className="text-[#1B68FF] font-black">
            Reporting Tool
          </div>
        </div>
        <div className="my-2 mt-5 text-black">
          Get a Website Audit and Report
          <br />Boost your SEO Score and Driver more Organic Traffic to your Website.
        </div>
        <div className="flex items-center justify-start flex-wrap mt-5">

          <div className="">
            <input type="text" className='rounded-full bg-slate-200 p-2 px-4 lg:w-96 w-80' placeholder='Enter Your Domain Name' />
          </div>
          <Link href="" className='lg:mx-4 mt-5'>

            <div className="my-4 bg-[#1B68FF] rounded-full p-2 py-3 font-semibold text-white w-28 text-xs inline-flex items-center justify-center">ANALYZE</div>
          </Link>
        </div>

      </div>
    </div>
    <div className="h-80">
      <div className="bg-gray-100 py-12 pb-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Trusted by Leading Brands
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="flex justify-center w-full flex-wrap">
              {/* Replace the src attributes with the logos of your trusted brands */}
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-4.svg" alt="Brand 1" />
              </div>
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-1.svg" alt="Brand 2" />
              </div>
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-3.svg" alt="Brand 3" />
              </div>
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-2.svg" alt="Brand 4" />
              </div>
              <div className="flex justify-center">
                <img className="h-8 m-2 lg:mx-10 my-3" src="https://sitechecker.pro/wp-content/themes/sitechecker/out/img_design/rate-logo-5.svg" alt="Brand 5" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#221A43] dark:text-white">

              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                See Us in Action: Intro and Demo
              </span>
            </h1>
          </>
        }
      >
        <iframe width="" height="" className='w-full h-full' src="https://www.youtube.com/embed/MYE6T_gd7H0?si=QF2GbncK0oEKBn8o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      </ContainerScroll>
    </div>
    <div className="w-full mt-0 lg:mt-20">
      <div className="lg:text-4xl text-3xl text-[#221A43] font-black text-center">
        TOOLS AVAILABLE
      </div>
      <div className="mt-10 flex flex-col items-center justify-center overflow-hidden">

        <InfiniteMovingCards items={items} />
        <Link href="tools" className='mt-8'>

          <Button
            borderRadius="1rem"
            borderClassName="10px"
            className="bg-[#1B68FF] text-white font-medium border-neutral-200 "
          >
            AND MANY MORE
          </Button>
        </Link>
      </div>
    </div>
    <div className="lg:mt-40 mt-10 bg-gray-100">

      <StickyScroll content={content} />
    </div>
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl flex flex-col items-center justify-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#221a43b0] to-[#221A43] bg-opacity-50">
          Why SEOptimer?
        </h1>
        <p className="mt-4  font-lg text-base text-neutral-500 max-w-4xl text-justify lg:text-center mx-5">
          Getting your website to rank in Google is harder and more competitive than ever. There are many factors such as on page content, performance, social factors and backlink profile that search engines like Google use to determine which sites should rank highest.
          <br />
          <br />
          SEOptimer is a free SEO Audit Tool that will perform a detailed SEO Analysis across 100 website data points, and provide clear and actionable recommendations for steps you can take to improve your online presence and ultimately rank better in Search Engine Results. SEOptimer is ideal for website owners, website designers and digital agencies who want to improve their own sites or theirs of their clients.
        </p>
      </div>
    </div>
    <div className="relative ml-2">


      <TracingBeam className=" px-10">
        <div className="relative ">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-[#221A43] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={twMerge("text-xl mb-4")}>
                  {item.title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-40">
          <div className="max-w-5xl">
            <div className="text-4xl font-extrabold text-[#221A43]">
              What our awesome customers are saying
            </div>
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="my-32 w-full flex flex-col items-center justify-center">
          <div className="text-5xl my-2 text-center font-extrabold text-[#221A43]">
            Frequently Asked Questions
          </div>
          <div className="text-lg text-center font-extrabold text-[#221A43] opacity-45">
            Everything you have to know about the SEO Checker
          </div>
          <div className="w-">

            {faq.map((item) => (
              <>
                <div className="mt-14">

                  <div className="text-lg font-semibold">{item.que}</div>
                  <div className="mt-2 text-slate-500">{item.desc}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </TracingBeam>
      <div className="flex flex-col items-center justify-center my-40  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base sm:text-base  ">
          What Are You Waiting For?
        </p>

        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href="run" className=''>
            <button className="w-40 h-10 rounded-full bg-black border dark:border-white border-transparent text-white text-sm">
              ANALYZE
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home