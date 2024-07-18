import React from 'react'

function Reviews() {
  return (
<>
<div className="py-20 bg-[#F8D57E] flex flex-col items-center justify-center mt-20">
      <div className="text-4xl text-center font-bold">Real Stories from Satisfied Customers</div>
      <div className="text-base mt-2 text-center">See how our landing page ui kit is making an impact.</div>
      <div className="flex mt-14 justify-center w-full flex-wrap">
        <div className="w-[570px]  bg-white rounded p-10 m-5">
          <div className="flex flex-wrap lg:flex-nowrap justify-center">
            <div className="flex flex-col items-center justify-center">

              <div className="rounded-full bg-slate-400 w-28 h-28"></div>
              <div className="text-base font-semibold mt-3">David B.</div>
              <div className="text-base">Developer</div>
            </div>
            <div className="flex flex-col p-2 lg:pl-10 text-center lg:text-left">
              <div className="stars "> 8 88 88 88 </div>
              <div className="text-base">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit dolorum maxime ipsa esse! Aliquam porro reiciendis eum corporis animi, itaque"
              </div>
            </div>
          </div>
        </div>
        <div className="w-[570px]  bg-white rounded p-10 m-5">
          <div className="flex flex-wrap lg:flex-nowrap justify-center">
            <div className="flex flex-col items-center justify-center">

              <div className="rounded-full bg-slate-400 w-28 h-28"></div>
              <div className="text-base font-semibold mt-3">David B.</div>
              <div className="text-base">Developer</div>
            </div>
            <div className="flex flex-col p-2 lg:pl-10 text-center lg:text-left">
              <div className="stars "> 8 88 88 88 </div>
              <div className="text-base">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odit? Repellat eos asperiores et amet tempore adipisci quam architecto in voluptatem,""
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>  )
}

export default Reviews