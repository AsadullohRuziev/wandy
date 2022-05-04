import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div class="group inline-blok">
        <span class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">магазин</span>
        <ul class="bg-blue-800 transform scale-0 group-hover:scale-100 absolute transition duration-300 mt-4  min-w-32 p-3">
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>собственное производство</Link></li>
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>джинсы</Link></li>
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>обувь</Link></li>
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>Демисезон</Link></li>
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>Кроссовки и кеды</Link></li>
          <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>летняя обувь </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home