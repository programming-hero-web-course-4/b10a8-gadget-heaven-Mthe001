import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Banner from '../Banner/Banner';
import './navbar.css'
import { GrLogin } from 'react-icons/gr';

const Navbar = () => {


    return (

        <div className='bg-violet-500 w-11/12 mx-auto rounded-xl lg:h-[850px] h-[650px] md:h-[750px] mt-5'>

            <nav className='flex  items-center text-white px-4 justify-between   mx-auto'>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <h2 className='text-gray-700 font-semibold px-2 py-3'>Menu</h2>
                            <li>
                                <NavLink to="/">Home</NavLink>
                                <NavLink className="text-gray-500 font-semibold" to="/statistics">Statistics</NavLink>

                                <NavLink className="text-gray-500 font-semibold" to="/dashboard">Dashboard</NavLink>
                                <NavLink className="text-xl" to="/login"><GrLogin /></NavLink>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-4 ">
                        <NavLink>Home</NavLink>

                        <NavLink to="/statistics">Statistics</NavLink>

                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink className="text-xl" to="/login"><GrLogin /></NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex justify-end mr-2 ">
                    <button className="btn btn-ghost text-xl"><IoCartOutline /></button>
                    <button className='btn btn-ghost text-xl'><CiHeart /></button>
                </div>

            </nav>

            <Banner></Banner>
        </div>

    );
};

export default Navbar;