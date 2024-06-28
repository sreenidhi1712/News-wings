import React, { useEffect, useState } from 'react'
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import axios from 'axios';
import Cards from './Cards';
import Loader from './Loader';

function Category() {
  const apiKeyCategory = import.meta.env.VITE_API_KEY_CATEGORY;
  const { categoryName } = useParams();
  const [news, setNews] = useState([]);
  const Bookmarked = useSelector(state => state.Bookmark);
  const Dispatcher = useDispatch();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageId, setCurrentPageId] = useState(null); // Current page ID
  const [nextPageId, setNextPageId] = useState(null); // Next page ID
  const [historyStack, setHistoryStack] = useState([]); // Stack for previous page IDs
  const [loading, setLoading] = useState(true);

  const addbookmark = (items) => {
    Dispatcher(addtobookmark(items));
  };

  const viewindividual = (items) => {
    Dispatcher(viewarticle(items));
  };

  const handlenext = () => {
    if (nextPageId) {
      setHistoryStack([...historyStack, currentPageId]);
      setCurrentPageId(nextPageId);
    }
  };

  const handleprev = () => {
    if (historyStack.length > 0) {
      const prevPageId = historyStack.pop();
      setHistoryStack(historyStack);
      setCurrentPageId(prevPageId);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const url = `https://newsdata.io/api/1/latest?apikey=${apiKeyCategory}&category=${categoryName}&image=1&size=9&q=india&language=en${currentPageId ? `&page=${currentPageId}` : ''}`;
        const response = await axios.get(url);
        setNews(response.data.results);
        setTotalPages(Math.ceil((response.data.totalResults) / 9));
        setNextPageId(response.data.nextPage); // Assuming the API returns this
        setLoading(false);
      } catch (error) {
        console.log('Error fetching latest news:', error);
      }
    };
    fetchCategory();
  }, [currentPageId]);

  return (
    <>
    {loading ? <Loader/> :<div className='mb-10 flex flex-col items-center'>
      <Cards
        title={categoryName}
        Category={news}
        addbookmark={addbookmark}
        Bookmarked={Bookmarked}
        viewindividual={viewindividual}
        navigate={navigate}
      />
      <div className='flex mb-12 w-[90%] justify-between'>
        <button
          className={`h-6 w-[30%] rounded-md ml-2 bg-green-400 disabled:bg-lime-700 lap:h-8 lap:w-[10%]`}
          disabled={historyStack.length === 0}
          onClick={handleprev}
        >
          Prev Page
        </button>
        <button
          className={`h-6 w-[30%] rounded-md mr-2 bg-green-400 disabled:bg-lime-700 lap:h-8 lap:w-[10%]`}
          disabled={!nextPageId}
          onClick={handlenext}
        >
          Next Page
        </button>
      </div>
    </div>
}
    </>
  );
}

export default Category;
