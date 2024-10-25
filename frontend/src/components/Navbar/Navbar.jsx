import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
  return (
    <div className='p-[20px 0px] flex items-center justify-between'>
        <img src={assets.logo} alt="" className='w-[100px]' />
        <ul className='flex no-underline gap-[10px] text-gray-600 text-[18px]'>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact-us</li>
        </ul>
      <div className="flex gap-[10px]">
        <img src={assets.search_icon} alt="" className="" />
        <div className="">
          <img src={assets.basket_icon} alt="" className="" />
          <div className=""></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
