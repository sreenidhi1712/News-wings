import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Individual() {
     const Indiviarticle = useSelector(state=>state.Article)
    // const navigate = useNavigate();
    const [latestNews, setLatestNews] = useState([]);
    const [news,setNews]= useState([])
    // const {ArticleId} = useParams();
    const url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=d3952cc9efb9478ebe65bb150ffe954c&pageSize=3&language=en&page=1`;
const latesturl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=d3952cc9efb9478ebe65bb150ffe954c&pageSize=3&language=en&page=2`;
const headlineurl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=d3952cc9efb9478ebe65bb150ffe954c&pageSize=3&language=en&page=3`;

    useEffect(()=>{
        const fetchLatestNews = async () => {
          try {
            const response = await axios.get(url);
            setLatestNews(response.data.articles);
          } catch (error) {
            console.error('Error fetching latest news:', error);
          }
          };
         const fetchdata = async ()=>{
          try{
            const response = await axios.get(latesturl)
            setNews(response.data.articles)
        }catch(error){
            console.log('Error fetching headlines:', error);
        }
         }
         fetchdata();
         fetchLatestNews();
    },[])

  return (
    <>
   
    {Indiviarticle.map((item)=>(
<div className='h-screen w-screen flex flex-col items-center overflow-x-hidden ' >
    <div className='h-14 w-full flex items-center  justify-center bg-slate-400'>
     
        <p className='py-5 font-bold text-white '>News Details</p>
    </div>
            <div className=' '>
                    <p className='font-bold mx-3'>{item.title}</p>
            </div>
            <div className=' w-[90%] h-[20%] mt-3'>
                <img className='h-full w-full object-cover object-center' src={item.urlToImage}/>

            </div>
            <div className='w-[98%] mt-5'>
                            <p className='text-justify mb-2'>{item.description}.</p>
                       
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