
import { NavLink } from 'react-router-dom';

const MenuItem = () => {
    return (

        <>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/blog">Blog</NavLink></li>
            <li> <NavLink to="/chef">Chef</NavLink></li>
            <li> <NavLink to="/recipes">Recipe</NavLink></li>
        </>
    );
};

export default MenuItem;