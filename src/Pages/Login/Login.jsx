import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
                showToastMessage();
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }


    const showToastMessage = () => {
        toast.success('🦄 User login Successfully', {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
            });
    };


    return (
        <div className='flex justify-center items-center min-h-screen'>
             <ToastContainer
                theme="dark"
            />
            <div className='lg:w-1/3 md:w-1/2 w-full mx-5 border lg:px-10 px-5 py-5 rounded '>
                <h4 className='text-accent text-center mb-10 text-2xl font-semibold'>Sign In Now</h4>
                <form onSubmit={handleSignIn}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" className="text-white btn btn-primary">Sign In</button>                    
                    <p className='my-3 text-[red]'><small>{ error}</small></p>
                </form>
            <div>
                    <p className='my-3'>have'nt account please <Link to="/signup" className='btn-link text-primary'>Sign Up</Link></p>
        </div>
            </div>
        </div>
    );
};

export default Login;