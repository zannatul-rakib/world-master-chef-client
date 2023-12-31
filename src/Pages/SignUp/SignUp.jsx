import React, { useContext, useState } from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
    const { googleSignIn, githubSignIn, createUser } = useContext(AuthContext);
    
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
                setError(error.message);
            });
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                navigate('/');
                
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const name = `${firstName} ${lastName}`;
        const photo = form.photo.value;

        const user = {email,  password, name, photo}
        console.log(user);

        // password validation 
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Please should be a lowercase character.");
            return;
        }
        else  if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please should be a Uppercase character.");
            return;
        }
        else  if (!/(?=.*[0-9])/.test(password)) {
            setError("Please should be a Number.");
            return;
        }
        else  if (!/(?=.*[@$!%*?&])/.test(password)) {
            setError("Please should be a Special character.");
            return;
        }
        else if (!password.length > 6) {
            setError("Password should be 6 character");
            return;
        }


        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            showToastMessage();
            form.reset();
            navigate('/');
            
        })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    const showToastMessage = () => {
        toast.success('🦄 User Created Successfully', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            });
    };
    

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <ToastContainer
                theme="dark"
            />
            <div className='lg:w-1/2 w-full m-5 border lg:px-10 px-5 py-5 rounded'> 
                <h4 className='text-accent text-center mb-10 text-2xl font-semibold'>Sign Up Now</h4>
            <form  onSubmit={handleSignUp}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="photo" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phot URL</label>
                </div>
                    </div>
                    <p className='text-[red] mb-4'><small>{error}</small></p>
            <button type="submit" className="text-white btn btn-primary">Sign Up</button>
                </form>
                <div className='text-center flex flex-col justify-center items-center'>
               
                    <p className='my-2'>Or Sign Up With</p>
                    <ul className=' w-28 flex my-3 justify-between items-center'>
                        <li className='cursor-pointer text-xl' onClick={handleGoogleSignIn}>
                            <FcGoogle/>
                        </li>
                        <li className='cursor-pointer text-xl text-[#0f90f3]'>
                        <BsFacebook/>
                        </li>
                        <li onClick={handleGithubSignIn} className='cursor-pointer text-xl text-[#f6f8fa]'>
                        <BsGithub/>
                        </li>
                    </ul>
                    <p>Already Have an Account Please <Link to="/login" className='btn-link text-primary'>Sign In</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;