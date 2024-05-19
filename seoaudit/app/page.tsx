import React from 'react'
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards'
// import { MovingBorder } from './components/ui/moving-border'
import { Button } from "./components/ui/moving-border";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ContainerScroll } from './components/ui/container-scroll-animation';
import Image from 'next/image';
import { Spotlight } from './components/Spotlight';
import { MaskContainer } from './components/ui/svg-mask-effect';

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
  return (<>

    <div className='flex items-center h-screen'>

      <div className="p-0 basis-1/2">

        <img src="3 1.png" alt="" className='h-screen ' />
      </div>
      <div className="flex flex-col ">
        <div className="my-2 text-black">
          Supercharged analysis & monitoring tools
        </div>
        <div className="text-7xl ">
          <div className="text-[#221A43] font-black">
            Search Engine<br />
            Optimization</div>
          <div className="text-[#1B68FF] font-black">
            Made Easy
          </div>
        </div>
        <div className="my-2 text-black">
          Check your website's SEO for free right now!
        </div>
        <div className="my-4 bg-[#1B68FF] rounded-full p-2 font-semibold text-white w-28 text-xs inline-flex items-center justify-center">GET STARTED</div>

      </div>
    </div>
    <div className="w-full ">
      <div className="text-4xl text-[#221A43] font-black text-center">
        TOOLS AVAILABLE
      </div>
      <div className="my-10 flex flex-col items-center justify-center overflow-hidden">

        <InfiniteMovingCards items={items} />
        <Button
          borderRadius="1rem"
          borderClassName="10px"
          className="bg-[#1B68FF] text-white font-medium border-neutral-200 "
        >
          AND MANY MORE
        </Button>
      </div>
    </div>
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center ">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#221a43ce] to-[#221A43]  text-center font-sans font-bold">
        Get in touch with us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum! Magni modi quod commodi velit porro nobis. Sed nisi fuga cupiditate autem aspernatur similique, saepe, a officia expedita impedit quisquam.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-200 focus:ring-2 p-2 focus:ring-teal-300  w-full relative z-10 mt-4 placeholder:text-neutral-300"
        />
      </div>
      <BackgroundBeams />
    </div>
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            SEO Site Checkup runs through a fast audit of your site, checking for proper tags and surfacing any errors that might come up."
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        SEO Site Checkup runs through a fast audit of your site, checking for proper <span className="text-red-500">tags</span> and surfacing any <span className="text-red-500">errors</span> that might come up."
        
      </MaskContainer>
    </div>
    <div className="">
    <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#221A43] dark:text-white">
               
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Everything you need in one place
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt=""
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#221a43b0] to-[#221A43] bg-opacity-50">
        Why wait? <br /> Boost your website’s SEO right now!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta illo placeat corrupti nemo voluptatibus, in asperiores labore voluptates. Ex eos officia iusto recusandae nobis quod eaque modi ea ut.
        </p>
      </div>
    </div>
  </>
  )
}

export default Home