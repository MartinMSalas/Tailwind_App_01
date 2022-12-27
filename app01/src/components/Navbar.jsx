import React  from 'react';
import {Bars3Icon, } from "@heroicons/react/24/outline"

const Navbar = () => {
  return ( 
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between item-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        

        <Bars3Icon className="h-6 w-6 text-blue-500"/>
      </div>
      
    </div>
   )
}
 
export default Navbar;


