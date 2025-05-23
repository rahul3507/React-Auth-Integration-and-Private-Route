import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children})=> {
    const [user,setUser]=useState(null)

    const createUser = (email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = ( email ,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
      return signOut(auth);
    }

    //observe auth state change
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
          console.log("Current value of the current user", currentUser);
          setUser(currentUser)
        });
        return ()=>{
          unSubscribe();
        }
    },[])
    const authInfo= {user, createUser,signInUser, logOut}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


AuthProvider.PropTypes= {
    children: PropTypes.node
}