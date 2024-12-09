import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const Products = () => {
  return (
    <div >
        <section className="text-gray-600 mb-40 flex body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div>
        <div/>
      
        </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-28">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-start text-6xl mb-3 w-[286px]
h-[35px]
gap-[0px]">
          Featured Products
        </h1>
        
      </div>
    </div>
    <div className="flex  flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-1 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-[377px] w-[312px]"
            src="chair.2.png"
          />
        </div>
        <h1 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h1>
        <p className="text-base leading-relaxed  font-semiboldmt-2">
          20$
        </p>
        
      </div>
      <div className="p-1 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center gap-0 h-[312px] w-[312px]"
            
            src="cair3.png"
          />
        </div>
        <h1 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h1>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
      <div className="p-1 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          
          <img
            alt="content"
            className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"

            
            src="chair4.png"
          />
        </div>
        <span className="text-xl font-medium title-font w-[256px] h-[51px] gap-[10px] text-gray-900 mt-5">

         Library Stool Chair 
        </span>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"

            
            src="chair5.png"
          />
        </div>
        <h1 className="text-xl font-medium title-font text-gray-900 mt-5">
          Library Stool Chair
        </h1>
        <p className="text-base leading-relaxed font-bold mt-2">
          20$
        </p>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Products