import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtobookmark } from '../Store-for-redux/Addtobookmark';
import { useNavigate } from 'react-router-dom';
import { viewarticle } from '../Store-for-redux/IndividualArticle';
import Cards from './Cards';
import { CiBookmark } from "react-icons/ci";

function EmptyBookmark() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <CiBookmark className='h-20 w-20' />
      <p className='text-gray-600 text-lg mt-4'>No bookmarks saved yet.</p>
    </div>
  );
}

function Bookmark() {
  const bookmarkState = useSelector(state => state.Bookmark);
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleremove = (items) => {
    Dispatch(addtobookmark(items));
  };

  const viewindividual = (items) => {
    Dispatch(viewarticle(items));
  };

  return (
    <div className='h-full w-screen'>
      {bookmarkState.length === 0 ? (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
        <CiBookmark className=' h-32 w-32' />
        <p className='text-gray-600 text-center text-xl mm:text-2xl ml:text-3xl tab:text-4xl lap:text-6xl mt-2'>No bookmarks saved yet.</p>
        </div>
      ) : (
        <Cards
          title={"Saved Bookmark"}
          Category={bookmarkState}
          addbookmark={handleremove}
          Bookmarked={bookmarkState}
          viewindividual={viewindividual}
          navigate={navigate}
        />
      )}
    </div>
  );
}

export default Bookmark;
