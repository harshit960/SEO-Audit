import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex w-full h-20 absolute top-0 items-center'>
      <Link href="/" className="flex basis-1/2 pl-10 font-black text-3xl">
        LOGO
      </Link>
      <div className="hidden text-sm justify-between basis-1/2 items-center sm:hidden lg:flex md:flex ">
        <div className="">BLOG</div>
        <Link href="/tools" className="">ALL TOOLS</Link>
        <div className="">PRICING</div>
        <div className=" bg-[#EBEBEB] rounded-full flex items-center mr-10">

          <div className="px-4 ">LOGIN</div>
          <div className=" bg-[#1B68FF] rounded-full p-2 text-white">GET STARTED</div>

        </div>
      </div>

    </div>
  )
}

export default Nav