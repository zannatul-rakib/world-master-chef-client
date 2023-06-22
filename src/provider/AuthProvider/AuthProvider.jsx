import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export const AuthContext = createContext(null);

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            // setLoading(false);
        });

        return () => {
            return subscribe
        }
    },[])

    const authInfo = {
        user,
        googleSignIn,
        githubSignIn,
        logOut,
        createUser, 
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;