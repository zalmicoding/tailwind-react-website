import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#000000] bg-[#fee0e0] h-[34rem]'>
        <div className="max-w-800px mt-[-140px] w-full h-screen mx-auto text-center flex flex-col   justify-center">
            <p className='lg:text-3xl sm:text-4xl text:xl font-bold  p-2'>software company</p>

            <h6 className='text-[#b2c08d] lg:text-4xl sm:text-6xl text:2xl font-bold md:py-6'>phi horizon</h6>

            <div className='flex justify-center items-center'>

               <p className='lg:text-3xl sm:text-4xl text:xl font-bold'>Fast , flexible financing for</p>
               <Typed
                    className=' lg:text-3xl sm:text-4xl text-[#b2c08d] text:xl font-bold pl-2'    
                    strings={['website','apps','wordpress','hosting']}

                    typeSpeed={120} 
                    
                    backSpeed={140}
                    
                    loop />
                   
                    
            </div>  
        
            <p className='lg:text-2xl sm:4xl  lg:pl-4 text:lg  mt-4 font-bold pl-2 text-[#55dafceb]'>phi horizon is a company where they provide sercices about software </p>
            <button className='bg-[black] text-[#50d150]  w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
           

           

        </div>

    </div>
  )
}

export default Hero