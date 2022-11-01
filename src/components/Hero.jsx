import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#000000]'>
        <div className="max-w-800px mt-[-140px] w-full h-screen mx-auto text-center flex flex-col   justify-center">
            <p className='lg:text-5xl sm:text-4xl text:xl font-bold  p-2'>amazon service provider</p>

            <h6 className='text-[#f7b045] lg:text-7xl sm:text-6xl text:2xl font-bold md:py-6'>growfast ecommerce</h6>

            <div className='flex justify-center items-center'>

               <p className='lg:text-5xl sm:text-4xl text:xl font-bold'>Fast , flexible financing for</p>
               <Typed
                    className=' lg:text-5xl sm:text-4xl text:xl font-bold pl-2'    
                    strings={['amazon','shopify','ecommerce','google']}

                    typeSpeed={120} 
                    
                    backSpeed={140}
                    
                    loop />
                   
                    
            </div>  
        
            <p className='lg:text-5xl sm:4xl  lg:pl-4 text:xl font-bold pl-2 text-[#55dafceb]'>growfast is a company where they provide sercices about amazon and online learning</p>
            <button className='bg-[#f7b045] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>get started</button>
           

           

        </div>~

    </div>
  )
}

export default Hero