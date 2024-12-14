import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-center bg-gradient-to-tr from-lime-300 via-zinc-400 to-black">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">FlashType</h1>
        <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">Here at Flashtype we provide you typing test for improving your typing speed.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/typetest" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-lime-600 rounded-lg bg-black hover:bg-black">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-lime-600 hover:bg-lime-600">
                Learn more
            </a>  
        </div>
    </div>
</section>

    </>
  )
}

export default Hero
