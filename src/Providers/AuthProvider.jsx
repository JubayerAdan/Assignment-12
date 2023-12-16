import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "./firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleMethod = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const githubMethod = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  };
  const facebookMethod = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookAuthProvider);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const SendVerificationEmail = async () => {
    return sendEmailVerification(auth.currentUser).then(() => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleMethod,
    githubMethod,
    facebookMethod,
    updateUserProfile,
    SendVerificationEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
