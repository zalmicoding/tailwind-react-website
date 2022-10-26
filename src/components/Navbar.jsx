import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'> 
      <h1 className='w-full text-3xl font-bold text-[#000000]'>NavBar</h1>

      <ul className='flex'>
        <li className='p-2'>Home</li>
        <li className='p-2'>Company</li>
        <li className='p-2'>Resources</li>
        <li className='p-2'>About</li>
        

      </ul>
       <div>
          <AiOutlineMenu size={20}/>
       </div>
    </div>
    
  )
}

export default navbar