import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthContext= createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle =()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signOutUser =() =>{
        return signOut(auth);
    }

    const authInfo ={
        signInUser,
        user,
        signInUserWithGoogle,
        signOutUser,
        loading,

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;