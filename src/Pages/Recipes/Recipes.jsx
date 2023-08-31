import { useEffect } from "react";
import { useState } from "react";
import FamousRecipe from "../ChefDetails/FamousRecipe/FamousRecipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])
    return (
        <div className="container mx-auto my-10">
            <h2 className='text-accent text-center mb-20 font-bold text-3xl'>All Famous Recipe</h2>
            <div>
                <div className='grid grid-col-1 gap-y-10 lg:grid-cols-3 lg:gap-x-20'>
                    {
                        recipes.map(recipe => <FamousRecipe key={recipe.id} recipe={recipe} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;