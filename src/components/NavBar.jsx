import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
  return (
    <div className='flex dark:bg-gray-700 bg-purple-200 p-4 lg:text-lg justify-center gap-6'>
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default NavBar
