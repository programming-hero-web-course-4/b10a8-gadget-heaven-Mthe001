import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import './stats.css'
import { GrLogin } from "react-icons/gr";
const Statistics = () => {
    return (
        <div>

            <div className=''>
                <nav className='flex  items-center w-7/12  mt-5  text-black font-semibold px-4 justify-between   mx-auto'>
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
                                <h3 className='text-gray-700 font-semibold px-2 py-3'>Menu</h3>

                                <li>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/statistics">Statistics</NavLink>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                    <NavLink className="text-xl" to="/login"><GrLogin /></NavLink>

                                </li>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-4 menu-horizontal px-4 ">
                            <NavLink to="/">Home</NavLink>

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

            </div>

        </div>
    );
};

export default Statistics;