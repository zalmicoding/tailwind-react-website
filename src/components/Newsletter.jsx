import React from 'react'

const Newsletter = () => {
  return (
   <div className='w-full py-16 bg-[#4534] px-4'>
     
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2'>

          <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>this company create a software</h1>
          <p>Signup to newsLatter and stay up to date</p>
        

      </div>
      
        <div className='my-4'>
            <div className=' sm:flex-row item-center w-full'>
              
              <input type="email" name="" id=""  className='p-3 flex w-full rounded-md ' placeholder=' Enter Email '/>
              <button className='bg-[black] text-[#50d150]  w-[100px] rounded-md font-medium my-6 mx-auto py-3'>Notify me </button>
              

            </div>
              <p> Signup to newsLatter and stay up to date  </p>

        </div>

    </div>   
        
  </div>
  )
}

export default Newsletter