import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

/***
 * avatar is taken from daisy component=> https://i.ibb.co/HCg8TLs/avatar.jpg
 * navbar is taken from daisy,=> 
 * # responsive (dropdown menu on small screen, center menu on large screen)
 * then customized
 * linkes are replaced with navlink
 * some color themes are in tailwind.config.js
 * */

const Header = () => {
    //   const { user, logOut } = useContext(AuthContext);
    const user = { uid: false }
    const menuItems = (
        <>
            <li>
                <NavLink className="text-white hover:text-yellow-300 text-style" to="/home"> Home</NavLink>
            </li>

            <li>
                <NavLink className="text-white hover:text-yellow-300 text-style" to="/menu">Menu</NavLink>
            </li>

            {user?.uid && (
                <div className="avatar lg:flex lg:items-center">
                    <div className="w-10 h-10 ml-4 my-3 lg:my-0 lg:ml-9 lg:mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || ""} alt="photoURL" />
                    </div>
                </div>
            )}
            <li>
                {user?.uid ? (
                    <button
                        className="text-white hover:text-yellow-300 text-style"
                    // onClick={logOut}
                    >
                        Sign Out
                    </button>
                ) : (
                    <NavLink className="text-white hover:text-yellow-300 text-style" to="/login">
                        Login
                    </NavLink>
                )}
            </li>
        </>
    );
    return (
        <div className="navbar bg-[#1b2024] lg:justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        {menuItems}
                    </ul>
                </div>

                {/* <img src={Logo} alt="Logo" /> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
        </div>
    );
};

export default Header;