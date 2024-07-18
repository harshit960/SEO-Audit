import React from 'react'
import Nav from '../Nav'
import client from '../cfclient';
import { fetchPosts } from './cfservices';
import Link from 'next/link';


interface ContentElement {
  value: string | number | bigint | boolean | React.ReactElement | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

interface Content {
  content: ContentElement[];
}

interface Post {
  fields: {
    id: string;
    body: {
      content: Content[];
    };
    date?: string;
    title: string;
    img: {
      sys: {
        id: string;
      }
    };
  };
}
export async function getImg(post:any) {
  const asset = await client.getAsset(post.fields.img.sys.id);
  return asset.fields.file?.url || '';
}
async function page() {
  const posts:any = await fetchPosts();
  // console.log(JSON.stringify(posts));
  return (
    <>
      <Nav />
      <div className=" p-40 pb-20 bg-slate-200 hidden">
        <div className="flex-col flex w-3/4 mr-4">
          <div className="text-lg font-semibold">Featured This Month</div>
          <div className="flex-col flex mt-5 overflow-y-auto h-[530px]">
            <div className="w-full p-4 bg-white rounded my-4">
              <div className="flex">
                <div className="img w-96 bg-gray-400 h-52 mr-4 rounded"></div>
                <div className="flex-col flex ">
                  <div className="text-sm ">Type</div>
                  <div className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                  <div className="flex mt-4">
                    <div className="text-sm">Author </div>
                    <div className="text-sm"> Date</div>
                  </div>
                  <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 bg-white rounded my-2">
              <div className="flex">
                <div className="img w-96 bg-gray-400 h-52 mr-4 rounded"></div>
                <div className="flex-col flex ">
                  <div className="text-sm ">Type</div>
                  <div className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                  <div className="flex mt-4">
                    <div className="text-sm">Author </div>
                    <div className="text-sm"> Date</div>
                  </div>
                  <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col flex w-1/4 mx-2">
          <div className="text-lg font-semibold">Popular Posted</div>
          <div className="flex flex-col mt-5 overflow-y-auto h-[520px]">
            <div className="my-4">

              <div className="flex-col flex ">
                <div className="text-sm ">Type</div>
                <div className="text-2xl font-semibold line-clamp-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-4">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-4">

              <div className="flex-col flex ">
                <div className="text-sm ">Type</div>
                <div className="text-2xl font-semibold line-clamp-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-4">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-4">

              <div className="flex-col flex ">
                <div className="text-sm ">Type</div>
                <div className="text-2xl font-semibold line-clamp-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-4">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
          </div>
        </div>


      </div >
      <div className="h-[80vh] bg-white flex justify-evenly items-center">
        <div className="flex-col w-96 ">
          <div className="text-4xl font-semibold">Blogs</div>
          <div className="text-sm my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sequi vero hic modi qui quo culpa quibusdam saepe a nulla eum dolores alias voluptatum natus. Libero dolores blanditiis enim incidunt!</div>
          <div className="flex">
            <input type="text" className='rounded-full border px-4 mr-5' placeholder='Enter your email' />
            <div className="px-4 p-2 bg-black rounded-full text-white text-sm"> Subscribe</div>
          </div>
        </div>
        <div className="img w-96 h-96 bg-slate-500"></div>
      </div>

      <div className="flex p-40 bg-slate-100 py-20">
        <div className="flex-col">
          <div className="text-3xl font-bold">Recent Blogs</div>
          <div className="flex-wrap flex mt-10 w-full justify-evenly">

            {posts && posts.map(async (post:Post) => (
              <Link href={`/blogs/${post.fields.id}`} key={post.fields.id}>
              <div className="flex mt-5 max-h-[500px] h-[500px]">
                <div className="border w-96 bg-white rounded">
                  <img className="w-96 bg-gray-400 h-60 " src={await getImg(post)}></img>
                  <div className="flex-col flex p-6 py-8">
                    <div className="flex mt-2 justify-between">
                      <div className="text-sm">{post.fields.date && new Date(post.fields.date.toString()).toLocaleDateString()}</div>
                      <div className="text-sm">3 min read</div>
                      
                    </div>
                    <div className="text-2xl font-semibold line-clamp-2	mt-2">{post.fields.title}</div>
                    <div className="text-sm mt-2 line-clamp-3">
                     {post.fields.body && post.fields.body.content.map((content: { content: any[]; }, index: React.Key | null | undefined) => (
                        <div key={index}>
                          {content.content.map((element: { value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, elementIndex: React.Key | null | undefined) => (
                            <p key={elementIndex}>{(element.value)}</p>
                          ))}
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
              </Link>
            ))}
              </div>
        </div>
          <div className="hidden flex-col w-1/4">
            <div className="text-xl font-semibold">Top Authors</div>
            <div className="flex-col mt-8">
              <div className="my-4 flex">
                <div className="bg-slate-400 w-14 h-14 rounded-full"></div>
                <div className="flex-col flex ml-4 justify-center">
                  <div className="text-lg font-medium">Author Name</div>
                  <div className="text-sm">admin</div>

                </div>
              </div>
              <div className="my-4 flex">
                <div className="bg-slate-400 w-14 h-14 rounded-full"></div>
                <div className="flex-col flex ml-4 justify-center">
                  <div className="text-lg font-medium">Author 2</div>
                  <div className="text-sm">admin</div>

                </div>
              </div>
              <div className="my-4 flex">
                <div className="bg-slate-400 w-14 h-14 rounded-full"></div>
                <div className="flex-col flex ml-4 justify-center">
                  <div className="text-lg font-medium">Author 2</div>
                  <div className="text-sm">admin</div>

                </div>
              </div>
            </div>
            <div className="w-full flex-col flex p-4 h-60 mt-20 bg-[#009379] justify-evenly">
              <div className="text-lg text-white font-semibold">Lorem ipsum dolor sit ametcing elit. Ipsam itaque perspiciatpit sed?</div>
              <div className="text-xs text-white font-light">Lorem ipsum dolor, sittatem iusto doloremque, in accusamus. !</div>
              <Link href="run" className="bg-white w-28 text-center rounded-md text-[#009379] font-medium p-1 text-sm">Get Started</Link>
            </div>
          </div>
        </div>
      </>
      )
}


      export default page; 
    