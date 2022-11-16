import React from 'react'

const Newsletter = () => {
  return (
   <div className='w-full '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div>
                <h1 className='lg:text-3xl sm:text-4xl'>this is company </h1>
                <p> SignUp for newsletter and stay up to date </p>
            </div>

            <div className='my-4'>
               <div>
                  <input type="email" placeholder='Email'/>
                  <button className='bg-[black] text-[#50d150]  w-[100px] rounded-md font-medium my-6 mx-auto py-3'>Notify me</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter