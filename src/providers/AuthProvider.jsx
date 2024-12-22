import React, { createContext } from 'react';

export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {

    const singInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        singInUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;