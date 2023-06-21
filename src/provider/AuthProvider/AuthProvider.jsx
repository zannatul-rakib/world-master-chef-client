import React, { createContext } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth"

export const AuthContext = createContext(null);

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const user = {displayName: "jagir"};

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;