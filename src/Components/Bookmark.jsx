import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { FaBookmark } from "react-icons/fa";


function Bookmark() {

    const bookmarkState = useSelector(state => state.Bookmark); 
   const Dispatch = useDispatch()
   const handleremove= (items)=>{
    Dispatch(addtobookmark(items))
   }
  return (
    <div className='h-full w-screen'>
       <div className='flex flex-col w-full mt-5 items-center'>
               <p className='mx-3 font-bold text-xl'>BookMarks</p>
               <div className={`flex flex-col w-full items-center `} >
          {bookmarkState.map((items)=>(
                            <div key={items.title} className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg flex `} >
                                     <div className='h-[100%] w-[35%]  '>
                                               <img src={items.urlToImage} className='h-full w-full object-cover rounded-lg'/>
                                     </div>
                                     <div className='h-full w-[65%] flex flex-col'>
                                      <div className='h-[80%] w-full '>
                                                <p className='px-2 text-sm'>{items.description}</p>
                                      </div>
                                      <div className='h-[20%] w-full flex justify-end items-center'>
                                     <FaBookmark className='h-7 w-7 text-red-500' onClick={()=>handleremove(items)} />
                                     </div>
                                     </div>
                            </div>
                
              
          ))}
           </div>
           </div>
    </div>
  )
}

export default Bookmark
