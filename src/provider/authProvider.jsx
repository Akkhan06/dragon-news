import React, {createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [lodding, setLodding] = useState(true)
    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const varification = () => {

        return sendEmailVerification(auth.currentUser)
    }

    const updateProfile = (displayName, photo) => {
        // return updateProfile(auth.currentUser, {
        //     displayName: displayName,
        //      photoURL: photo
        // })
    }
    const logOut = () => {
        setLodding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logInedUser => {
            console.log("this is login User", logInedUser)
            setUser(logInedUser)
            setLodding(false)
        })
        return () => unsubscribe()
    },[])
    const AuthInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        varification,
        updateProfile,
        lodding
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;