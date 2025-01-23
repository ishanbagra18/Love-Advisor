import React from 'react'

const Form = () => {
  return (

    <>
<div
  style={{ cursor: "url('/pen.png'), pointer" }}
>      
          <div className='flex flex-col items-center justify-center p-10'>
          <p className='text-xl font-bold p-1 rounded'
  style={{
    textShadow: '0px 0px 10px pink, 0px 0px 20px pink, 0px 0px 40px pink, 0px 0px 80px pink',
  }}
>
  Contact With Us
</p>


            <h1 className='text-3xl text-black tracking-widest'>Write a Message</h1>

            <form className='pt-4'>

                <div className='flex gap-8 mb-6'>
                <input placeholder='Full Name ' className=' p-2 bg-pink-100 w-[280px]' type="text" />
                <input placeholder='Email Address' className=' p-2 bg-pink-100 w-[280px]' type="text" />
                </div>




                <div className='flex gap-8 mb-6'>
                <input placeholder='Phone' className=' p-2 bg-pink-100 w-[280px]' type="text" />
                <input placeholder='Subject' className=' p-2 bg-pink-100 w-[280px]' type="text" />
                </div>


                <textarea placeholder="Write a message" className='w-[590px] h-[150px] bg-pink-100 p-3' name="" id=""></textarea>


            </form>

            <button className='bg-pink-400 p-2 font-semibold rounded-lg'>Send Message</button>
        </div>
    </div>
    </>
  )
}

export default Form