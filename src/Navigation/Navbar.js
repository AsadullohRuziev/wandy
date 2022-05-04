import logo from '../assets/logo.png';
import search from '../assets/search.png';
import person from '../assets/person.png';
import bag from '../assets/bag.png';
import heart from '../assets/heart.png';
import { Outlet, Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>

      <nav class="bg-white">



        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">


          <div class="relative flex items-center justify-between h-16">

            {/* Burger button */}
            <div class="absolute inset-y-0 left-0 flex items-center justify-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* logo */}
            <div class="flex-initial flex items-center justify-between sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                {/* <img class="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" /> */}
                <Link to='/'> <img class="hidden lg:block h-8 w-auto" src={logo} alt="Workflow" /></Link>
              </div>
            </div>







            {/* Linklar */}
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-2">
                <div class="group inline-blok">
                  <span class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">магазин</span>
                  <ul class="bg-blue-800 transform scale-0 group-hover:scale-100 absolute transition duration-300 mt-4  min-w-32 p-3">
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>собственное производство</Link></li>
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>джинсы</Link></li>
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>обувь</Link></li>
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>Демисезон</Link></li>
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/blogs'>Кроссовки и кеды</Link></li>
                    <li class="rounded-sm px-3 py-1 text-white hover:text-yellow-500"><Link to='/setup'>летняя обувь </Link></li>
                  </ul>
                </div>
                <div>
                  <Link to='/blogs' class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">о бренде</Link>

                  <Link to='/blogs' class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">отзывы</Link>

                  <Link to='/contact' class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">контакты</Link>

                  <Link to='/contact' class="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">сервис и помощь</Link>
                </div>

              </div>
            </div>
            {/* iconlar */}
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <img src={search} />
              </button>
              <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <img src={person} />
              </button>
              <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>

                <img src={heart} />
              </button>

              <div class="ml-3 relative">
                <div>
                  <button type="button" class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 " src={bag} alt="" />
                  </button>
                </div>


                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>



        </div>








        {/* Burger Button  */}
        <div class="sm:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}


