import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-black rounded-lg shadow dark:bg-gray-900 mt-52">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl text-lime-300 font-semibold whitespace-nowrap dark:text-white">FlashType</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-lime-500 sm:mb-0 dark:text-lime-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-lime-500">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-lime-500">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6 text-lime-500">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-lime-500">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-lime-200 sm:mx-auto dark:border-lime-700 lg:my-8" />
        <span className="block text-sm text-lime-500 sm:text-center dark:text-lime-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">FlashType™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </>
  )
}

export default Footer
