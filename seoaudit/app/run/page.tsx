'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Nav from '../Nav';

function page() {
    const [url, seturl] = useState("");
  

    return (
        <>
        <Nav/>
        <div className='h-screen w-full flex items-center justify-center flex-col'>
            <div className="text-3xl">
                Enter an URL address and get a Free Website Analysis!
            </div>
            <div className="flex my-10 ">
                <input type="text" onChange={(e) => seturl(e.target.value)} value={url} className='border w-96 p-4' placeholder='YourWebiste.com' />
                <Link href={`run/result/?url=${url}`} className='bg-[#009379] rounded mx-2 text-white p-4 w-32 text-center' >Audit</Link>
            </div>
            <div className="text-sm">
                We offer the following test
                <Link href="tools" className='px-2 text-blue-500 underline'>All Tests</Link>
            </div>
        </div>
        </>
    )
}

export default page