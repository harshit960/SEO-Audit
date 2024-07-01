"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function SearchBar() {
    const [url, seturl] = useState("")

    return (
        <>
            <input type="text" onChange={(e) => seturl(e.target.value)} value={url} className='rounded bg-[#E5F4F2] p-2 px-4 py-4 lg:w-1/2 w-80' placeholder='Enter Your Domain Name' />

            <Link href={`run/result/?url=${url}`} className='lg:mx-4 mt-5 lg:mt-0'>

                <div className="my-4 bg-[#009379] hover:bg-[#2D2D2D] duration-200 hover:text-[#fff] rounded p-2 py-5 font-semibold text-white w-28 text-xs inline-flex items-center justify-center">ANALYZE</div>
            </Link>

        </>)
}

export default SearchBar