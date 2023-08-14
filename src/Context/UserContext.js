import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
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
  const authInfo = {
    user,
    createUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
