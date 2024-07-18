import React from 'react'

async function Pricing() {
    async function getPricing() {
        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/pricing`)
            if (!res.ok) {
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }

            return res.json()
        } catch (error) {
            console.log(error);

        }
    }
    const pricing = await getPricing()
    return (
        <>
            <div className=" flex flex-col items-center justify-center mt-20 ">
                <div className="text-4xl font-bold text-center">
                    Pick Your Perfect Plan
                </div>
                <div className="text-base mt-3 text-center">Find the perfect plan for your business with our flexible pricing options.</div>
                <div className="flex mt-10 flex-wrap justify-center items-center">
                    <div className="m-5 w-80 p-10 bg-neutral-50 shadow-2xl shadow-[#c9d2fc] rounded-md text-[#2D2D2D]" >
                        <div className="flex flex-col">
                            <div className="text-xl my-2">Free</div>
                            <div className="flex items-baseline my-2">
                                <div className="text-5xl font-bold">{pricing?.Basic}</div>
                                <div className="text-base">/ month</div>
                            </div>
                            <div className="text-base my-2">Best for Small Teams or Individuals.</div>
                            <ul className='list-disc	mx-5 my-2 font-medium'>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                            </ul>
                            <div className="mt-5 w-full rounded-2xl bg-[#E5F4F2] text-center hover:bg-[#009379] hover:text-white duration-200 p-3 text-[#009379] font-semibold">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="m-5 w-80 p-10 bg-neutral-50 shadow-2xl shadow-[#c9d2fc] rounded-md text-[#2D2D2D]" >
                        <div className="flex flex-col">
                            <div className="text-xl my-2">Professional</div>
                            <div className="flex items-baseline my-2">
                                <div className="text-5xl font-bold">{pricing?.Professional}</div>
                                <div className="text-base">/ month</div>
                            </div>
                            <div className="text-base my-2">Best for Small Teams or Individuals.</div>
                            <ul className='list-disc	mx-5 my-2 font-medium'>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                            </ul>
                            <div className="mt-5 w-full rounded-2xl bg-[#E5F4F2] hover:bg-[#009379] hover:text-white duration-200  text-center p-3 text-[#009379] font-semibold">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <div className="m-5 w-80 p-10 bg-[#009379] shadow-2xl shadow-[#c9d2fc] rounded-md text-[#fff]" >
                        <div className="flex flex-col">
                            <div className="text-xl my-2">Enterprise</div>
                            <div className="flex items-baseline my-2">
                                <div className="text-5xl font-bold">{pricing?.Enterprise}</div>
                                <div className="text-base">/ month</div>
                            </div>
                            <div className="text-base my-2">Best for Small Teams or Individuals.</div>
                            <ul className='list-disc	mx-5 my-2 font-medium'>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                                <li>Write feature details here</li>
                            </ul>
                            <div className="mt-5 w-full rounded-2xl bg-[#fff] hover:bg-[#E5F4F2] duration-200 text-center p-3 text-[#009379] font-semibold">
                                Get Started
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Pricing