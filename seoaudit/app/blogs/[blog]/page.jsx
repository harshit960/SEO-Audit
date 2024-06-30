import Nav from '@/app/Nav'
import client from '@/app/cfclient'
import React from 'react'

async function page({ params }) {
    const id = params.blog
    const entry = await client.getEntries({
        content_type: 'blogPost', // Replace 'post' with your content type ID
        'fields.id': id,
    })
        // .then((entry) => console.log(entry.items))
        .catch(console.error)
    console.log((entry.items[0].fields));
    return (
        <>
            <Nav />
            <div className="flex-col mt-24 px-32">
                <div className="text-sm font-semibold">Home/Blogs/ <span className='font-normal'>{entry.items[0].fields.title}</span></div>
                <div className="flex px-20 mt-10">
                    <div className="flex w-full flex-col mr-6">
                        <div className="my-2 text-4xl line-clamp-2 font-semibold">{entry.items[0].fields.title}</div>
                        <hr />
                        <div className="flex justify-between my-4">
                            <div className="text-sm">{entry.items[0].fields.date}</div>
                            <div className="text-sm">5 min read</div>
                        </div>
                    </div>
                    <img className="bg-gray-200 w-1/2 h-60"
                    src={entry.items[0].fields.img.fields.file.url}>
                    </img>
                </div>
                <div className="w-full my-10 px-20 text-xl">
                {entry.items[0].fields.body.content.map((content, index) => (
                    <>
                    {(content.content[0].value)} <br />
                    </>
                )   )}
                </div>
            </div>
        </>)
}

export default page