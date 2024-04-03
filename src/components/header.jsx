import React from 'react'
import MenuItem from './menuitem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-5'>
        <MenuItem title="home" address="/" Icon={AiFillHome}/>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <Link href ="/"className='flex gap-1 items-center'>
          <span className="text-2xl font-bold bg-purple-400 py-1 px-2 rounded-lg"> IMDB </span>
          <span className='text-xl hidden sm:inline'> Clone </span>
      </Link>
    </div>
  )
}

export default Header
