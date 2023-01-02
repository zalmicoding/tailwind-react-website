import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const[ nav , setNAv ] = useState(false)
  const handleNav = () => { 
          setNAv(!nav)
    }
   return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black'> 
      <h1 className='w-full text-3xl font-bold text-[#000000]'> {!nav  ? "Logo" : "" }</h1>

      <ul className='hidden lg:flex'>
        <li className='p-2'>Home</li>
        <li className='p-2'>Company</li>
        <li className='p-2'>Resources</li>
        <li className='p-2'>About</li>
        <li className="p-2">contact</li>
        

      </ul>
       <div onClick={handleNav} className="block lg:hidden">
          {!nav  ? <AiOutlineMenu size={20}/> : <AiOutlineClose  size={20} /> }
       </div>
       <div  className={`fixed left-0 top-0 w-[40%] bg-[white] border-r border-r-aquamarine  h-full ease-in-out duration-300 
        ${
    nav ? "translate-x-0 " : "translate-x-[-100%]"
        }`}>
   <h1 className='w-full text-3xl font-bold text-[#000000] m-4'>Logo</h1>
          <ul className='uppercase p-4'>
            <li className='p-2 border-b'>Home</li>
            <li className='p-2 border-b'>Company</li>
            <li className='p-2 border-b'>Resources</li>
            <li className='p-2 border-b'>About</li>
            <li className='p-2'>contact</li>

          </ul>
       </div>
    </div>
    
  )
}

export default Navbar


