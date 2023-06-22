import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }
   return children;
    
};

export default PrivateRouter;