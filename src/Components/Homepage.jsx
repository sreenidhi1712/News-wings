import React, { useEffect ,useState} from 'react'
import './Style.css'
import axios from 'axios';



function Homepage() {

    const [news, setNews] = useState([]);
 
    useEffect(()=>{
        const fetchdata = async ()=>{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&page=1&pagesize=3')
            setNews(response.data.articles)
        }
        fetchdata();
    },[])
   
  return (
    <div className='w-screen '>
{/* news cards  https://newsapi.org/v2/top-headlines?country=us&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb */}
           <div className='flex overflow-x-scroll hide-scrollbar w-full  mt-28   '> 
               {news.map((items)=>(
                        <div className={`h-36 w-[85%] mx-3 flex  flex-shrink-0 rounded-lg  bg-cover bg-center`} style={{ backgroundImage: `url(${items.urlToImage})` }}>
                                 <p className='font-bold text-sm text-slate-200 mt-14 ml-3'>{items.title}</p>
                        </div>
                     )
               )}
           </div>


           <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>Trending Topic</p>
               <div className={`flex overflow-x-scroll hide-scrollbar w-full `} >
               {Array(3).fill(0).map(()=>(
                        <div className={`h-32 w-[40%] mt-5 mx-3 flex-shrink-0  bg-slate-200  rounded-lg`}>
                                 
                        </div>
                     )
               )}
               </div>
           </div>

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
               <div className={`flex flex-col w-full items-center `} >
               {Array(3).fill(0).map(()=>(
                        <div className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg`}>
                                 
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}

