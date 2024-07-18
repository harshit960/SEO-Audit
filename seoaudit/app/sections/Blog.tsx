import Link from 'next/link'
import React from 'react'
import { fetchPosts } from '../blogs/cfservices';
import { getImg } from '../blogs/page';

async function Blog() {

    const posts: any = await fetchPosts();



    return (
        <>

            <div className="flex flex-col items-center justify-center mt-32  ">
                <div className="text-4xl font-bold ">Our Latest Blogs</div>
                <div className="flex mt-10 mx-5 flex-wrap">
                    {posts.slice(0, 3).map(async (post: any) => (
                        <Link href={`/blogs/${post.fields.id}`} key={post.fields.id}>

                            <div className="flex flex-col m-5 w-80 h-96 rounded shadow-2xl shadow-[#c9d2fc]">
                                <img src={await getImg(post)} alt="" className='w-80 h-60 bg-cover ' />
                                <div className="text-xl m-2 line-clamp-2	">
                                {post.fields.title}
                                </div>
                                <div className="border-b mt-2">

                                </div>

                                <div className="flex justify-between p-2">
                                    <div className="text-sm">{post.fields.date && new Date(post.fields.date.toString()).toLocaleDateString()}</div>
                                    <div className="text-sm">Author</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href="blogs" className="bg-[#2D2D2D] rounded p-3 hover:bg-[#009379] duration-200 text-white font-semibold mt-8 px-8">
                    View All
                </Link>
            </div>
        </>
    )
}

export default Blog