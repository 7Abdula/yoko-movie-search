import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="py-6 header flex flex-col md:flex-row md:gap-6 md:px-[200px] items-center justify-center px-8 w-full z-20 fixed">
      <div className="flex items-center mr-14 cursor-pointer">
        <img src={Logo} alt="Logo" className="min-w-16" />
        <h1 className="font-geo text-white text-3xl ml-2">YOKO</h1>
      </div>
      <input type="text" placeholder="Search" className="mt-16 md:mt-0 md:ml-auto outline-0 border-2 rounded-lg pl-2  max-w-sm md:min-w-[250px] w-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.12)] font-ibm text-gray-700 py-[6px] text-sm front-medium" />
      <button className="mt-4 md:mt-0 bg-[#B00B1E] rounded-lg py-2 md:py-1 px-4 md:px-7 font-geo font-medium text-sm md:text-xl text-white drop-shadow-[0_2px_2px_rgba(156,90,90,0.25)] border border-[#873E3E] border-opacity-50 button-search">Search</button>
    </div>
  )
}

export default Header