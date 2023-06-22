import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';
import {FaUserAstronaut} from "react-icons/fa"
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import userImage from '../../../assets/user.svg'



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
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               <MenuItem/>
                            </ul>
                        </div>
                        <Link to="/">
                            <div className="mb-6 md:mb-0">
                                <span className="flex items-center">
                                    <img src={logo} className="h-8 mr-2" alt="FlowBite Logo" />
                                    <span className="self-center hidden lg:block text-xl font-semibold whitespace-nowrap dark:text-white">Master Chef</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <MenuItem />
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user.photoURL ? <img src={user.photoURL} /> : <img src={userImage} />
                                           }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            {
                                                user.displayName ?<a className="justify-between">
                                                {user.displayName}
                                            </a> : <a className="justify-between">
                                                Profile
                                            </a>
                                            }
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </> : 
                                <>
                                 <Link to="/login" className='btn-primary px-4 py-1 rounded lg:btn me-2'>Login</Link>
                                <Link to="/signup" className='btn-primary px-4 py-1 rounded lg:btn'>Sign up</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;