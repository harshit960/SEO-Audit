import React from 'react'
import Nav from '../Nav'

function page() {
  return (
    <>
      <Nav />
      <div className="flex p-40 pb-20 bg-slate-200">
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
      <div className="flex p-40 bg-white py-20">
        <div className="flex-col w-3/4">
          <div className="text-2xl font-semibold">Recently Posted</div>
          <div className="flex-col mt-4">
            <div className="my-10">

              <div className="flex-col flex ">
                <div className="text-sm ">
                  <span className='rounded p-1 px-2 bg-slate-300'>
                    Type
                  </span>

                </div>
                <div className="text-2xl font-semibold line-clamp-2	my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-2">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-10">

              <div className="flex-col flex ">
                <div className="text-sm ">
                  <span className='rounded p-1 px-2 bg-slate-300'>
                    Type
                  </span>

                </div>
                <div className="text-2xl font-semibold line-clamp-2	my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-2">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-10">

              <div className="flex-col flex ">
                <div className="text-sm ">
                  <span className='rounded p-1 px-2 bg-slate-300'>
                    Type
                  </span>

                </div>
                <div className="text-2xl font-semibold line-clamp-2	my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-2">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-10">

              <div className="flex-col flex ">
                <div className="text-sm ">
                  <span className='rounded p-1 px-2 bg-slate-300'>
                    Type
                  </span>

                </div>
                <div className="text-2xl font-semibold line-clamp-2	my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-2">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
            <div className="my-10">

              <div className="flex-col flex ">
                <div className="text-sm ">
                  <span className='rounded p-1 px-2 bg-slate-300'>
                    Type
                  </span>

                </div>
                <div className="text-2xl font-semibold line-clamp-2	my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi blanditiis</div>
                <div className="flex mt-2">
                  <div className="text-sm">Author </div>
                  <div className="text-sm"> Date</div>
                </div>
                <div className="text-sm mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque explicabo repellendus illum molestias, </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex-col w-1/4">
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
            <div className="bg-white w-28 text-center rounded-md text-[#009379] font-medium p-1 text-sm">Get Started</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page