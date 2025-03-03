import { NavLink, useLocation } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <div className={(pathname === '/')?'bg-purple-700 rounded-t-xl':'bg-white'}>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm space-x-9 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/company">Company</NavLink>
                </ul>
                </div>
                <a className="text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-9">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/company">Company</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <PiShoppingCart className="text-2xl"/>
                <FaRegHeart className="text-2xl"/>
            </div>
            </div>
        </div>
    );
};

export default Navbar;