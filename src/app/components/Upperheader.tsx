import React from 'react'
import { GrCircleAlert } from "react-icons/gr";

const Upperheader = () => {
  return (
    <div className=' text-white bg-[#272343]  h-[45px]  flex justify-between py-[14px] px-[300px] aligh items-center 
'>
<p className='text-white'>Free shipping on all orders over $50</p>
   
    <div className=' flex justify-center gap-[24px]'>
     <select className='bg-[#272343]'
>
        <option value="english" className='bg-[#272343]
]'>English</option></select>
        <p>FAQ</p>
        <GrCircleAlert className='size-6 justify-centre' /><p >Needhelp</p>
</div>

    </div>
  )
}



export default Upperheader
