import React from 'react'

const Hero = () => {
  return (
    <div className=' flex justify-between items-center  mx-72  bg-[#F0F2F3]   border-1  
'>
<section >
  <div className="container mx-auto flex mb-10 p-6 md:flex-row flex-col items-center justify-center
">
    <div className="lg:flex gap-0 md:w-1/2 pl-14 ml-[70px] lg:pr-20 md:pr-16 flex justify-center  flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
    

      <p className='mb-2'>Welcome to chairy
        </p>
        <h1 className="mb-8 sm:text-4xl text-6xl t font-bold text-gray-900  ">Best Furniture Collection for your interior.</h1>
      
      <div className="flex w-full md:justify-start justify-center">
      <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          
          
        </div>
        <button className="flex justify-items-start mr-20 text-white bg-[#029FAE] border-0 py-2 px-8 rounded text-lg">
          ShopNow
        </button>
      </div>
      
      <div className="flex lg:flex-row md:flex-col">
        
       
      </div>
    </div>
    <div className=" lg:w-full md:w-1/3  h-[584px] ml-[774px] mt-[115px]">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="./chair1.png"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero