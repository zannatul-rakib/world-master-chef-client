
import { GiWorld, GiCookingPot } from "react-icons/gi"
import { AiOutlineDoubleRight, AiOutlineLike } from "react-icons/ai"
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, picture, id, country, experience, num_recipes, likes } = chef;
    return (
        <div>
            <div className="card card-compact w-[300px] bg-[#211720] text-[#fff] shadow-xl">
                <figure>
                    <div className="h-[300px] w-full">
                        <img src={picture} className='h-full w-full object-cover' alt={`${name}image`} />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between items-center">
                        <p className='flex justify-start gap-1 items-center'><span className='text-[17px] text-[#00FFFF]'><GiWorld /></span> {country}</p>
                        <p>Experience: {experience} Years</p>
                    </div>
                    <p className="flex justify-start gap-1 items-center"> <span className='text-[20px] text-[#C9CC3F]'><GiCookingPot /></span> {num_recipes}+ Recipes</p>

                    <div className="flex justify-between items-center">
                        <p className="flex justify-start gap-1 items-center"><span className='text-[20px] cursor-pointer text-[#FF5733]'><AiOutlineLike /></span> {likes}</p>
                        <Link to={`/chef/${id}`} className="px-5 py-3 rounded bg-primary flex justify-center items-center gap-2">Show Recipes <AiOutlineDoubleRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;