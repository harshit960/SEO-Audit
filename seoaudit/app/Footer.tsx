import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-[#221A43] w-full'>
      <div className="flex p-10">

        <div className="basis-1/2  pl-10 font-bold	">
          <div className="flex flex-col">

            <div className="flex opacity-60 basis-1/2 my-1 font-black text-3xl">
              LOGO
            </div>
            <div className="text-sm opacity-60 my-1">
              Search Engine Optimization
            </div>
            <div className="my-1 bg-[#1B68FF] rounded p-1 text-white w-28 text-xs inline-flex items-center justify-center">GET STARTED</div>
            <div className="flex mt-1 opacity-60">

              <img src="\Instagram Circle.png" alt=""  className='w-7' />
              <img src="\Facebook Circled.png" alt=""  className='w-7 mx-4' />
              <img src="\Twitter Circled.png" alt=""  className='w-7' />
            </div>
          </div>
        </div>
        <div className="basis-1/4 font-black opacity-40	">
          <div className="flex flex-col">FAQ</div>
          <div className="flex flex-col">Pricing</div>
          <div className="flex flex-col">Disclaimer</div>
          <div className="flex flex-col">Contact- Us</div>
        </div>
        <div className="basis-1/4 font-black opacity-40	">
          <div className="flex flex-col">Terms and Condition</div>
          <div className="flex flex-col">About Us</div>
          <div className="flex flex-col">Refunds Policy</div>

        </div>
      </div>
      <div className="border w-full opacity-10">
      </div>
        <div className="flex justify-between px-20 py-2 font-bold opacity-40">
          <div className="text-sm">Privacy Policy</div>
          <div className="text-sm">© Copyright All rights reserved</div>
        </div>
    </div>
  )
}
