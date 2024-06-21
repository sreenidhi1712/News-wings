import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import { viewarticle } from '../Store-for-redux/IndividualArticle';
// import { useSelector } from 'react-redux';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className='bottom-0 left-0 fixed w-screen h-10 bg-green-500 flex items-center justify-evenly'>
        <IoMdHome className='h-7 w-7 text-white' onClick={()=>navigate('/')}/>
        <FaBookmark  className='h-6 w-6 text-white 'onClick={()=>navigate('/bookmark')}/>
        <FaFire onClick={()=>navigate(`/individual/general`)} className='h-6 w-6 text-white'/>
        <IoIosSearch className='h-7 w-7 text-white'/>
    </div>
  )
}

export default Footer
