import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaFire } from "react-icons/fa";

function Footer() {
  return (
    <div className='bottom-0 left-0 w-screen h-10 bg-green-500 flex items-center justify-evenly'>
        <IoMdHome className='h-7 w-7 text-white'/>
        <FaBookmark  className='h-6 w-6 text-white'/>
        <FaFire className='h-6 w-6 text-white'/>
        <IoIosSearch className='h-7 w-7 text-white'/>
    </div>
  )
}

export default Footer
