import { createContext, useEffect, useState } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createRegisterData = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateProfil = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  const Loginwithgoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createRegisterData,
    Loginuser,
    updateProfil,
    Logout,
    Loginwithgoogle,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
      if (currentuser?.email) {
        setUser(currentuser);

        const { data } = await axios.post(
          `${import.meta.env.VITE_SOME_KEY}/jwt`,
          {
            email: currentuser?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
