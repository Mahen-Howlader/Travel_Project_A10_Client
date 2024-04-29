import { createContext, useEffect, useState } from "react";
import auth from "../Fiirebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const contextProvide = createContext(null);

function Contexapi({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  function createEmailAndPassword(email, password) {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateProfileFun(name, photoURL) {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  }

  function signInEmailPassword(email, password) {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOutFun() {
    setLoading(false);
    setUser(null);
    return signOut(auth);
  }

  function facebookLogin() {
    return signInWithPopup(auth, facebookProvider);
  }

  function googleLogin() {
    return signInWithPopup(auth, googleProvider);
  }

  //   observerb
  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(true);
    });
    return () => subcribe();
  }, []);

  const data = {
    createEmailAndPassword,
    updateProfileFun,
    signInEmailPassword,
    loading,
    user,
    setUser,
    logOutFun,
    googleLogin,
    facebookLogin,
    dataLoading,
    setDataLoading,
  };
  return (
    <contextProvide.Provider value={data}>{children}</contextProvide.Provider>
  );
}

export default Contexapi;
