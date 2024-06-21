import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function About() {
  return (
    <div className='h-screen w-screen flex flex-col mb-10'>
           <div className='h-[60%] w-full bg-slate-100 flex items-center justify-center'>
                    <div className='h-[90%] w-[90%] rounded-lg  flex flex-col items-center justify-center '>
                             <p className='text-2xl text-black mx-2 w-[90%] text-center font-bold'>Get the Latest Notifications and Info from Us</p>
                                <div className='flex flex-col items-center h-[60%] w-[90%] mt-14'>
                             <input placeholder='Enter Your Email ' type='email' className='px-2 border-2 border-black  h-[20%] w-[100%] rounded-lg '/>
                             <button className='h-[20%] w-[60%] bg-blue-700 rounded-2xl mt-6 text-white'>SUBSCRIBE</button>
                             </div>
                             
                    </div>
           </div>
           <div className='h-[40%] w-full bg-slate-100 flex flex-col'>
                       <div className='h-[60%] w-[100%] flex flex-col items-center'>
                                <p className='text-3xl font-bold'>NEWS WING</p>
                                <p className='w-[95%] font-semibold mt-3 text-lg text-center'>We Bring News to you, You Bring Change in world</p>
                       </div>
                       <div className='h-[40%] w-[100%] flex items-center justify-evenly'>
                                <FaFacebook/>
                                <FaYoutube/>
                                <FaInstagram/>
                                <FaXTwitter/>
                       </div>
           </div>
    </div>
  )
}

export default About
