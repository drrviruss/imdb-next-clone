import Link from 'next/link'
import React from 'react'

function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-purple-400'>
      <Icon className='text-2xl sm:hidden'/>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem
