import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    return (
        
                <>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">Blog</Link></li>
                    <li> <Link to="/chef">Chef</Link></li>
                    <li> <Link to="/recipe">Recipe</Link></li>
                </>
    );
};

export default MenuItem;