import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(user);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // Login
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)

    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    const reset = (email) => {
        return sendPasswordResetEmail(auth, email)

    }

    // Google authentication
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authData = { user, setUser, createUser, logIn, logOut, loading, setLoading, updateUser, reset, googleLogin }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;