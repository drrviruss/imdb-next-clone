import React from 'react'
import NavBarItem from './NavBarItem'
import { Suspense } from 'react'

function NavBar() {
  return (
    <div className='flex dark:bg-gray-700 bg-purple-200 p-4 lg:text-lg justify-center gap-6'>
      <Suspense>
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated"/>

      </Suspense>
      
    </div>
  )
}

export default NavBar
