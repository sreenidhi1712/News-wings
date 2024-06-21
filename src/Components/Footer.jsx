import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FcAbout } from "react-icons/fc";
// import { viewarticle } from '../Store-for-redux/IndividualArticle';
// import { useSelector } from 'react-redux';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className='bottom-0 left-0 fixed w-screen h-10 bg-green-500 flex items-center justify-evenly'>
        <IoMdHome className='h-7 w-7 text-white' onClick={()=>navigate('/')}/>
        <FaBookmark  className='h-6 w-6 text-white 'onClick={()=>navigate('/bookmark')}/>
        <FcAbout className='h-7 w-7 text-white ' onClick={()=>navigate('/aboutus')}/>
    </div>
  )
}

export default Footer
