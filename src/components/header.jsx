import React from 'react'
import MenuItem from './menuitem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-5'>
        <MenuItem title="home" address="/" Icon={AiFillHome}/>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex items-center gap-4'>
        
      <DarkModeSwitch/>
      <Link href ="/"className='flex gap-1 items-center'>
          <span className="text-2xl font-bold bg-purple-400 py-1 px-2 rounded-lg"> IMDB </span>
          <span className='text-xl hidden sm:inline'> Clone </span>
      </Link>

      </div>
      
    </div>
  )
}

export default Header
