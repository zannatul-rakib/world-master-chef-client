import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>This is login page</h2>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

export default Login;