import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signupUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updateDetails)=>{
        return updateProfile(auth.currentUser, updateDetails )
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser =()=>{
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("From observer",currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signupUser,
        updateUserProfile,
        loginUser,
        logOutUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;