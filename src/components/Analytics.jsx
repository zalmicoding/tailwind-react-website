import React from 'react'
import Pencel from '../assets/1.jpg'

const Analytics = () => {
  return (
        <div className='w-full py-16 px-4 '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img src={Pencel} alt="/" className='' />
            <div className='ml-5'>
                <p className='text-[#f7b045]'>DATA ANALYTICS DASHBOARD </p>
                <h1 className='text-[#124956eb]'>Manage  Data Analytic centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, animi amet repellendus quam facere sequi modi porro neque non, voluptates atque recusandae aut. Molestias voluptate nemo velit debitis sit incidunt.

                </p>

                <button className='bg-[black] text-[#50d150]  w-[100px] rounded-md font-medium my-6 mx-auto py-3' > Get Started</button>
            </div>
        </div>  
        </div> 
  )
}

export default Analytics