import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png'
import search from '../assets/search.png'

const Layout = () => {
  return (
    <>
      <nav className="w-full flex">
        <div>
           <Link to="/" className="text-xl text-black"><img src={logo} /></Link>
        </div>
        <div>
          <ul className="flex item-center">
            <li>
              <Link to="/" className="text-xl text-black">магазин</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/setup">Setup</Link>
            </li>
          </ul>
        </div>
        <div>
        <button className=""><img src={search} alt="" /></button>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;