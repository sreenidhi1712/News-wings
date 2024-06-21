import React from 'react'
import { FaBookmark } from "react-icons/fa";

function Cards({title,Category,addbookmark,Bookmarked,viewindividual,navigate}) {
  return (
    <>
    {/* headlines */} 
   <div className='flex flex-col w-full mt-5'>
              <p className='mx-3 font-bold text-xl'>{title}</p>
              <div className={`flex flex-col w-full items-center `} >
              {Category.map((items)=>(
                       <div key={items.title} className={  `h-60 w-[90%]  my-2 bg-slate-200  rounded-lg flex flex-col`} >
                                <div className='h-[50%] w-[100%]  '>
                                          <img src={items.urlToImage} className='h-full w-full object-contain '/>
                                </div>
                                <div className='h-[50%] w-[100%] flex flex-col justify-between'>
                                 <p className='text-sm'>{items.title}</p>
                                 <div className='flex w-full h-[30%]  justify-between'>
                                 <button onClick={()=>
                                   {
                                     viewindividual(items);
                                     navigate(`/individual/${items.title}`)
                                     console.log(items.title)
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
