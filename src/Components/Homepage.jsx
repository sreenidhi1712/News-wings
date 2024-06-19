import React, { useEffect ,useState} from 'react'
import './Style.css'
import axios from 'axios';
import { CiBookmark } from "react-icons/ci";
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch } from 'react-redux';


function Homepage() {
     

  const Dispatch  = useDispatch();

  const addbookmark = (items)=>{
    Dispatch(addtobookmark(items))
  }

    const trending = [
        {image:"https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         title:"Sports"
        },
        { image:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"travel"
        },
        { image:"https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Lifestyle"
        },
        { image:"https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Business"
        },
        {image:"https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600",
             title:"Entertainment"
        }
]

    const [news, setNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&page=1&pageSize=3`);
        setLatestNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching latest news:', error);
      }
    };

    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&page=1&pageSize=3`);
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
      }
    };

    const fetchdata = async ()=>{
        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb&page=1&pagesize=3')
            setNews(response.data.articles)
        }catch(error){
            console.error('Error fetching headlines:', error);
        }
       
    }
    fetchdata();
    fetchLatestNews();
    fetchHeadlines();
  }, []);

   
  return (
    <div className='w-screen mb-10'>
{/* news cards  https://newsapi.org/v2/top-headlines?country=us&apiKey=4c8372e1b7fa43c9a89c2a176b9461bb */}
           <div className='flex overflow-x-scroll hide-scrollbar w-full  mt-28   '> 
               {news.map((items)=>(
                        <div className={`h-36 w-[85%] mx-3 flex items-end flex-shrink-0 rounded-lg  bg-cover bg-center`} style={{ backgroundImage: `url(${items.urlToImage})` }}>
                                 <p className='font-bold text-sm text-white  ml-3'>{items.title}</p>
                        </div>
                     )
               )}
           </div>


           <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>Trending Topic</p>
               <div className={`flex overflow-x-scroll hide-scrollbar w-full `} >
               {trending.map((items)=>(
                        <div className={`h-32 w-[40%] mt-5 mx-3 flex-shrink-0  bg-slate-200  rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${items.image})` }}>
                                 <p className='text-white font-bold mt-3 ml-3'>{items.title}</p>
                        </div>
                     )
               )}
               </div>
           </div>

           <Cards title={"Headlines"} Category={headlines} addbookmark={addbookmark}/>

           <Cards title={"Latest News"} Category={latestNews} addbookmark={addbookmark}/>
          


    </div>
  )
}

export default Homepage



const Cards = ({title,Category,addbookmark})=>{
    return <>
     {/* headlines */} 
    <div className='flex flex-col w-full mt-5'>
               <p className='mx-3 font-bold text-xl'>{title}</p>
               <div className={`flex flex-col w-full items-center `} >
               {Category.map((items)=>(
                        <div className={  `h-32 w-[90%]  my-2 bg-slate-200  rounded-lg flex `}>
                                 <div className='h-[100%] w-[35%]  '>
                                           <img src={items.urlToImage} className='h-full w-full object-contain '/>
                                 </div>
                                 <div className='h-full w-[65%] '>
                                 <CiBookmark onClick={()=>{
                                        addbookmark(items)
                                 }} />
                                 </div>
                        </div>
                     )
               )}
               </div>
           </div>
   

    </>
}

