import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>this is home</h2>
            <p>{ user.displayName}</p>
        </div>
    );
};

export default Home;