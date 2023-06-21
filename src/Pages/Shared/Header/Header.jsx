import React from 'react';
import MenuItem from './MenuItem';
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';
import {FaUserAstronaut} from "react-icons/fa"



const Header = () => {
    return (
        <div className=' container mx-auto'>
            <div className="navbar bg-base-200 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>         
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-25 border">
                            <MenuItem/>
                        </ul>
                    </div>
                    <Link to="/">
                        <div className="avatar">
                            <div className="rounded-full h-14">
                                <img src={logo} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <MenuItem/>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown me-3">
                        <label tabIndex={0}>
                        <FaUserAstronaut className='cursor-pointer text-3xl' />      
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl border bg-base-100 rounded w-20">
                           <li><Link to="/profile">Profile</Link></li>
                           <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                <Link to="/login" className='btn'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;