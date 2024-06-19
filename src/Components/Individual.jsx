import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Individual() {

    const navigate = useNavigate();
    const [latestNews, setLatestNews] = useState([]);
    const [news,setNews]= useState([])

    useEffect(()=>{
        const fetchLatestNews = async () => {
            try {
              const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&page=1&pageSize=3`);
              setLatestNews(response.data.articles);
            } catch (error) {
              console.error('Error fetching latest news:', error);
            }
          };
         const fetchdata = async ()=>{
              let response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_4678059751b9b341ae3efcfcb16d41ffe79ec&id=2406e97aaad0574ebeab6eabc23248f7');
                setNews(response.data.results)
         }
         fetchdata();
         fetchLatestNews();
    },[])

  return (
    <>
   
    {news.map((items)=>(
<div className='h-screen w-screen flex flex-col items-center overflow-x-hidden ' >
    <div className='h-14 w-full flex items-center  justify-center bg-slate-400'>
     
        <p className='py-5 font-bold text-white '>News Details</p>
    </div>
            <div className=' '>
                    <p className='font-bold mx-3'>{items.title}</p>
            </div>
            <div className=' w-[90%] h-[20%] mt-3'>
                <img className='h-full w-full object-cover object-center' src="https://images.pexels.com/photos/18592009/pexels-photo-18592009/free-photo-of-a-view-of-the-city-with-many-red-roofs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

            </div>
            <div className='w-[98%] mt-5'>
            {items.content.split('. ').map((sentence, idx) => (
                            <p key={idx} className='text-justify mb-2'>{sentence}.</p>
                        ))}
            </div>
    </div>
    ))}
          <Cards title={"LatestNews"} Category={latestNews}/>
        

     </>
  )
}

export default Individual



const Cards = ({title,Category})=>{
    return <>
     {/* headlines */} 
    <div className='flex flex-col w-full mt-5 mb-10'>
               <p className='mx-3 font-bold text-xl'>{title}</p>
               <div className={`flex flex-col w-full items-center `} >
               {Category.map((items)=>(
                        <div className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg flex `}>
                                 <div className='h-[100%] w-[35%]  '>
                                           <img src={items.urlToImage} className='h-full w-full object-contain '/>
                                 </div>
                                 <div className='h-full w-[65%] '>
                                        
                                 </div>
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}