import React from 'react'
import { FaBookmark } from "react-icons/fa";

function Cards({title,Category,addbookmark,Bookmarked,viewindividual,navigate }) {
  return (
    <>
    {/* headlines */} 
   <div className='flex flex-col w-full mt-5 items-center'>
              <p className='mx-3 font-bold text-2xl uppercase'>{title}</p>
              <div className={`flex flex-col w-full items-center `} >
              {Category.map((items)=>(
                       <div key={items.title} className={  `h-60 w-[90%]  my-2 bg-slate-200  rounded-lg flex flex-col`} >
                                <div className='h-[60%] w-[100%]  '>
                                          <img src={items.image_url ?items.image_url:items.urlToImage} className='h-full w-full object-cover '/>
                                </div>
                                <div className='h-[40%] w-[100%] flex flex-col justify-between'>
                                 <p className='text-sm'>{items.title}</p>
                                 <div className='flex w-full h-[40%]  justify-between'>
                                 <button onClick={()=>
                                   {
                                     viewindividual(items);
                                     navigate(`/individual/${items.title}`)
                                     }} className='h-[80%] w-[30%] rounded-md text-amber-50 ml-3 bg-green-500' >View More</button>
                                <FaBookmark className={`${Bookmarked.some((bookmarkedItem) => bookmarkedItem.title === items.title)?`text-red-600`:`text-gray-500`} mr-2 mt-1 h-5 w-5`} onClick={()=>addbookmark(items)} />
                                 </div>
                                </div>
                       </div>
                    )
              )}
              </div>
          </div>
  
 
   </>
  )
}

export default Cards
