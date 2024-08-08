'use client'
import React, { useState } from 'react'

function Contactus() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission here
        const formData = {
            name: fullName,
            email: email,
            message: 'Submited form' // Add the message value here
        };

        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            alert("Submitted successfully");
        })
        .catch(error => {
            // Handle any errors here
        });
    };

    return (
        <>
            <div className="flex flex-col w-full my-5 lg:pr-40">
                <input
                    type="text"
                    className="w-full p-2 lg:m-2 px-4 border-2 rounded-xl"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleFullNameChange}
                />
                <input
                    type="text"
                    className="w-full p-2 lg:m-2 px-4 my-2 border-2 rounded-xl"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <textarea
                    type="text"
                    className="w-full p-2 lg:m-2 px-4 my-2 border-2 rounded-xl"
                    placeholder="Message"
                    value={email}
                    onChange={handleEmailChange}
                />
                <div
                    className="text-white my-2 lg:m-2 hover:bg-[#2D2D2D] duration-200 bg-[#009379] w-32 p-2 rounded-xl text-center font-semibold"
                    onClick={handleSubmit}
                >
                    Submit
                </div>
            </div>
        </>
    );
}

export default Contactus;
