import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex w-full h-20 absolute top-0 items-center drop-shadow-sm'>
      <Link href="/" className="flex basis-1/2 pl-10 font-black text-3xl">
        LOGO
      </Link>
      <div className="hidden text-sm justify-between basis-1/2 items-center sm:hidden lg:flex md:flex ">
        <Link href="/blogs">BLOG</Link>
        <Link href="/tools" className="">ALL TOOLS</Link>
        {/* <div className="">PRICING</div> */}
        <div className=" bg-[#E5F4F2] rounded-full flex items-center mr-10">

          <div className="px-4 ">LOGIN</div>
          <Link href="/run" className=" bg-[#009379] rounded-full p-2 text-white">GET STARTED</Link>

        </div>
      </div>

    </div>
  )
}

export default Nav