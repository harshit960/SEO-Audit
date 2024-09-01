import React from 'react'
import Nav from '../Nav'
import Contactus from '../sections/Contactus'

function page() {
    return (
        <>
        <Nav />
        <div className='mx-40'>
            <div className="text-5xl mt-52 font-bold text-center">
                Get in touch with us anytime
            </div>
            <div className="text-lg mt-20">
                We will be happy to assist you in any way we can.
                <br />
                Team members data - Devendar, Manvik, Amit, Mahipal Singh


            </div>
            <Contactus/>
        </div>

        </>
    )
}

export default page