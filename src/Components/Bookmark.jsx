import React from 'react'
import { useSelector } from 'react-redux'


function Bookmark() {

    const bookmarkState = useSelector(state => state.bookmark); 
    
  return (
    <div>
          {bookmarkState.map((items)=>(
                    <div>
                        <h1>{items.title}</h1>
                    </div>
              
          ))}
    </div>
  )
}

export default Bookmark
