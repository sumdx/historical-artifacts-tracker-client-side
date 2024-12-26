import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    signInUser,
    user,
    signInUserWithGoogle,
    signOutUser,
    loading,
    signUpUser,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const user = { email: currentUser?.email };
        axios
          .post("https://b10a11-server-side-sumdx.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            
          })
          .catch((err) => {
            
          });
      } else {
        axios
          .post("https://b10a11-server-side-sumdx.vercel.app/logout", user, {
            withCredentials: true,
          })
          .then((res) => {
            
          })
          .catch((err) => {
            
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
