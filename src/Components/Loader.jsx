import React from 'react'
import { LuLoader2 } from "react-icons/lu";

function Loader() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <LuLoader2 className='h-20 w-20 animate-spin text-blue-500' />
    </div>
  )
}

export default Loader
