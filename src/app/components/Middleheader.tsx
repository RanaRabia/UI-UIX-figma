import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Middleheader = () => {
  return (
    <div className='flex justify-between item-center  bg-[rgb(240,242,243)]
h-[84px] py-4 px-[300px]'> 

<header>
  <div className="container   flex md:flex-row items-center">

        <img src="./l1.png" alt="" />
    
    
    <div className=" w-[120px] flex gap-2 items-center h-[44px] border-o bg-white ml-[800px] rounded text-base mt-4 md:mt-0">
    <CiShoppingCart className='h-8 w-8' />
    <p>Cart</p>
    <p className='border-0 rounded-2xl text-center text-white h-[20px] font-sans font-medium w-[20px] bg-[#007580]'>2</p>
      
      </div>

  </div>
</header>


    </div>
  )
}

export default Middleheader