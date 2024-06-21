import React from 'react'
import { useParams } from 'react-router-dom'

function Gotowebsite() {

    const { outsidewebsite } = useParams();
    const decodedUrl = decodeURIComponent(outsidewebsite);
  return (
    <div className='h-screen w-screen mb-10'>
      <iframe src={decodedUrl} className='h-full w-full'/>
    </div>
  )
}

export default Gotowebsite
