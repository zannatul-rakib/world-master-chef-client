
import { useLoaderData } from 'react-router-dom';
import FamousRecipe from './FamousRecipe/FamousRecipe';

const ChefDetails = () => {
    const { chefDetails, famousRecipes } = useLoaderData();
    // console.log(chefDetails, famousRecipes)
    const { name, picture, country, experience, num_recipes, bio } = chefDetails;
    return (
        <div className='lg:mx-20 mx-5 my-20'>
            <div className='flex flex-col lg:flex-row lg:justify-between  lg:items-center gap-10 mb-20' >
                <div className='w-[400] h-[500px] overflow-hidden relative'>
                    <img src={picture} className='w-full h-full object-contain' alt="" />
                </div>
                <div className=' text-white rounded-sm py-20 px-5 shadow-2xl bg-base-200'>
                    <h2 className='text-2xl font-semibold text-accent mb-5'>{name}</h2>
                    <p>Experience: {experience}</p>
                    <p>Country: {country}</p>
                    <p>Num of Recipe: {num_recipes}</p>
                    <p>Bio: {bio}</p>
                </div>
            </div>
            <div className='grid justify-items-center'>
                <h2 className='text-accent text-center mb-20 font-bold text-3xl'>Their Famous Recipe</h2>
                <div className='grid grid-col-1 gap-y-10 lg:grid-cols-3 lg:gap-x-20'>
                    {
                        famousRecipes.map(recipe => <FamousRecipe key={recipe.id} recipe={recipe} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;