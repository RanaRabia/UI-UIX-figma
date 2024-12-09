import Link from 'next/link'
import React from 'react'

const Lastheader = () => {
  return (
    <div className='h-[74px]  py-[14px] px-[300px] bg-white flex justify-between items-center '> 
<div className='flex gap-8 font-inter'>
    <Link href="" className='text-[#007580]
'>Home</Link>
    <Link href="./Shop">Shop</Link>
    <Link href="./Product">Product</Link>
    <Link href="./Pages">Pages</Link>
    <Link href="./About">About</Link>
</div>
<div>
    <p>Contacr: (808) 555-0111</p>
</div>
    </div>
  )
}

export default Lastheader