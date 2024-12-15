import React from 'react'

const Guide = () => {
  return (
    <>
    <div className='container mx-28 px-6 bg-black border border-lime-300 mt-52'>
      <h1 className='font-extrabold text-5xl text-center text-lime-600 py-12'>Steps to Guide you through FlashType</h1>
    <div className='grid grid-rows-4 gap-5'>
        <div className='grid grid-cols-2'>
          <div>
          <img className='' src="/step1.png" alt="" />
          </div>
          <div>
          <h1 className='font-bold text-3xl px-3 text-lime-700 py-10'>Step 1 :</h1>
          <p className='px-3 text-xl text-lime-200'>Click on the "Get Started" button, which takes you to the test page</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
          <h1 className='font-bold text-3xl px-3 text-lime-700 py-10'>Step 2 :</h1>
          <p className='px-3 text-xl text-lime-200'>Set your timer according to your wish for the countdowm</p>
          </div>
          <div>
          <img src="/step2.png" alt="" />
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
          <img className='' src="/step3.png" alt="" />
          </div>
          <div>
          <h1 className='font-bold text-3xl px-3 text-lime-700 py-10'>Step 3 :</h1>
          <p className='px-3 text-xl text-lime-200'>After setting the counter then click the start typing button to begin typing</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
          <h1 className='font-bold text-3xl px-3 text-lime-700 py-10'>Step 4 :</h1>
          <p className='px-3 text-xl text-lime-200'>Once the timer is done it stops from further typing text and provide you the results.</p>
          </div>
          <div>
          <img src="/step4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Guide
