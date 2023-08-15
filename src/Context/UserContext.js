import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

// google //
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
  const user = {
    name: "Sazzad Hossain Tomal",
  };

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
  const authInfo = {
    user,
    createUser,
    googleSignIn,
    loginEmailPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
