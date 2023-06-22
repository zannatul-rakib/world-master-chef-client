import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/error.svg"

const Error = () => {
    return (
		<div className='grid justify-items-center'>
			<Link to="/"
					className="my-5 bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Go Back</Link>
			<img src={image} alt="" />

				
        </div>
    );
};

export default Error;