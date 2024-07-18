import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-[#2D2D2D] w-full text-[#ffffff51]'>
      <div className="flex flex-wrap p-10 lg:p-20">


        <div className="flex flex-col lg:basis-1/2">

          <div className="flex   my-2 font-black text-3xl">
            LOGO
          </div>
          <div className="text-sm opacity-60 my-1">
            Search Engine Optimization
          </div>
          <Link href="run" className="my-3 bg-[#4E4D4D] rounded p-2 text-white w-28 text-xs inline-flex items-center justify-center">GET STARTED</Link>
          <div className="flex mt-1 opacity-60">

            <img src="\Instagram Circle.png" alt="" className='w-7' />
            <img src="\Facebook Circled.png" alt="" className='w-7 mx-4' />
            <img src="\Twitter Circled.png" alt="" className='w-7' />
          </div>

        </div>
        <div className=" font-semibold  basis-full lg:basis-1/4	mt-5 lg:mt-0">
          <Link href="/faq" className="flex flex-col">FAQ</Link>
          <div className="flex flex-col">Pricing</div>
          <div className="flex flex-col">Disclaimer</div>
          <Link href="/contact" className="flex flex-col">Contact- Us</Link>
        </div>
        <div className="font-semibold ">
          <Link href="/terms-of-service" className="flex flex-col">Terms and Condition</Link>
          <Link href="\about" className="flex flex-col">About Us</Link>
          <Link href="/refund-policy" className="flex flex-col">Refunds Policy</Link>

        </div>
      </div>
      <div className="border-b w-full border-[#4E4D4D]">
      </div>
      <div className="flex flex-wrap justify-between px-5 py-2 lg:px-20 font-semibold opacity-40">
        <div className="text-sm whitespace-nowrap">Privacy Policy</div>
        <div className="text-sm whitespace-nowrap">© Copyright All rights reserved</div>
      </div>
    </div>
  )
}
