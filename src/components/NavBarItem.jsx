'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

function NavBarItem({title,param}) {
    const searchParams=useSearchParams()
    const genre=searchParams.get('genre')
  return (
    <div>
      <Link href={`/?genre=${param}`}
      className={`hover:text-purple-600 font-semibold ${
        genre === param
          ? 'underline underline-offset-8 decoration-4 decoration-purple-500 rounded-lg'
          : ''
      }`}
      >
      {title}
      </Link>
    </div>
  )
}

export default NavBarItem
