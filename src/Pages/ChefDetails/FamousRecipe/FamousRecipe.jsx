import React from 'react';
import Rating from 'react-rating';
import {AiOutlineStar, AiFillStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"

const FamousRecipe = ({ recipe }) => {
    const {name, picture, rating, country, details } = recipe;
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <figure>
                    <div className="h-[300px] w-full mb-5">
                     <img src={picture} className='h-full w-full object-cover' alt={`${name} image`} />
                    </div>
                </figure>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<AiOutlineStar className='text-warning'/>}
                        placeholderSymbol={<AiFillStar className='text-warning'/>}
                        fullSymbol={<AiFillStar/>}
                    >    
                    </Rating>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$99</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamousRecipe;