import React from 'react'
import './Style.css'


function Homepage() {

   
  return (
    <div className='w-screen '>
{/* news cards */}
           <div className='flex overflow-x-scroll hide-scrollbar w-full  mt-28   '> 
               {Array(3).fill(0).map(()=>(
                        <div className='h-36 w-[85%] mx-3 bg-slate-200 flex-shrink-0 rounded-lg'>
                                 
                        </div>
                     )
               )}
           </div>

           <Cards title={"Trending Topic"}/>

           <Cards title={"Headlines"}/>

           <Cards title={"Latest News"}/>
          


    </div>
  )
}

export default Homepage



const Cards = ({title})=>{
    return <>
     {/* headlines */} 
    <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>{title}</p>
               <div className={`${title === "Trending Topic"?`flex overflow-x-scroll hide-scrollbar w-full `:`flex flex-col w-full items-center `}`} >
               {Array(3).fill(0).map(()=>(
                        <div className={`${title === "Trending Topic"?`h-32 w-[40%] mt-5 mx-3 flex-shrink-0`:  `h-32 w-[90%]  my-2`}  bg-slate-200  rounded-lg`}>
                                 
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}

