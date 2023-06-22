import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';
import {FaUserAstronaut} from "react-icons/fa"
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';



const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logOut'))
            .catch(error => console.log(error.message))
    }

    return (
        <div className='container mx-auto'>
            <div className="lg:px-20 bg-base-200">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>         
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-25 border">
                            <MenuItem/>
                        </ul>
                    </div>
                    <Link to="/">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <img src={logo} className="h-8 mr-2" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Master Chef</span>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <MenuItem/>
                    </ul>
                </div>
                <div className="navbar-end">
                        {
                            user ? <>             
                            <button tabIndex={0} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                            </button>
                            <div tabIndex={0} id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                </ul>
                                <div className="py-2">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                            </> : 
                        <Link to="/login" className='btn btn-primary'>Login</Link>
                   }
                </div>
            </div>
           </div>
        </div>
    );
};

export default Header;