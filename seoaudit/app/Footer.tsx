import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-[#2D2D2D] w-full text-[#ffffff51]'>
      <div className="flex flex-wrap p-10 lg:p-20">


        <div className="flex flex-col lg:basis-1/2">

          <div className="flex my-2 font-black text-3xl">
            LOGO
          </div>
          <div className="text-sm opacity-60 my-1">
            Search Engine Optimization
          </div>
          <Link href="run" className="my-3 bg-[#4E4D4D] rounded p-2 text-white w-28 text-xs inline-flex items-center justify-center">GET STARTED</Link>
          <div className="flex mt-1 opacity-60">

            {/* <img src="\Instagram Circle.png" alt="" className='w-7' /> */}
            {/* <img src="\Facebook Circled.png" alt="" className='w-7 mx-4' /> */}
            {/* <img src="\Twitter Circled.png" alt="" className='w-7' /> */}
            <Link href="https://www.youtube.com/channel/UCmafeX3_9idkzsTS5SrRFpA">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className="fill-gray-500"
                    d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
					c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
					C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
					c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                  />
                </g>
              </svg>
            </Link>
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
      <div className="flex flex-wrap justify-center px-5 py-2 lg:px-20 font-semibold opacity-40">
        <div className="text-sm whitespace-nowrap">©Copyright 2024</div>
      </div>
    </div>
  )
}
