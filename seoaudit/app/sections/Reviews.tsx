import React from 'react'

async function Reviews() {
  async function getReviews() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/getReviews`);
      return response.json();
    }
    catch (error) {

    }
  }
  const reviews = await getReviews();

  return (
    <>
      <div className="py-20 bg-[#F8D57E] flex flex-col items-center justify-center mt-20">
        <div className="text-4xl text-center font-bold">Real Stories from Satisfied Customers</div>
        <div className="text-base mt-2 text-center">See how our landing page ui kit is making an impact.</div>
        <div className="flex mt-14 justify-center w-full flex-wrap items-center">
          <div className="w-[570px]  bg-white rounded p-10 pt-6 m-5 ">
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="flex flex-col items-center justify-center ">

                <img src={reviews && reviews[0].imgUrl} className="rounded-full w-36"></img>
                <div className="text-base font-semibold mt-3 whitespace-nowrap">{reviews && reviews[0].userName}</div>
                <div className="text-base whitespace-nowrap">{reviews && reviews[0].userRole}</div>
              </div>
              <div className="flex flex-col py-2 lg:pl-10 text-center lg:text-left">
                <div>
                  <div className="rating rating-md mb-4 rating-half">
                    {/* <input type="radio" name="rating-10" className="rating-hidden" /> */}
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400"  />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                  </div>
                </div>
                <div className="text-base line-clamp-5">
                  {reviews && reviews[0].message}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[570px]  bg-white rounded p-10 pt-6 m-5">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
              <div className="flex flex-col items-center justify-center">

                <img src={reviews && reviews[1].imgUrl} className="rounded-full w-36"></img>
                <div className="text-base font-semibold mt-3 whitespace-nowrap">{reviews && reviews[1].userName}</div>
                <div className="text-base whitespace-nowrap">{reviews && reviews[1].userRole}</div>
              </div>
              <div className="flex flex-col p-2 lg:pl-10 text-center lg:text-left">
              <div className="rating rating-md mb-4 rating-half">
                    {/* <input type="radio" name="rating-10" className="rating-hidden" /> */}
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400"  />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-orange-400" />
                  </div>
                <div className="text-base line-clamp-5	">
                  {reviews && reviews[1].message}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>)
}

export default Reviews