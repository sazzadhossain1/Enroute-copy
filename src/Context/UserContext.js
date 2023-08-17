import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

// google //
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google signIn //
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // Login with email and password //
  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Send email verification //
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // get user display name and photo url //
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // LogOut user //
  const logOut = () => {
    return signOut(auth);
  };

  // get current user //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
    });
    return () => unSubScribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    googleSignIn,
    loginEmailPassword,
    verifyEmail,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
