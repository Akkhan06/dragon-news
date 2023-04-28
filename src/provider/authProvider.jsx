import React, {createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const Auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {displayName: "Afsar Khan"}
    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;