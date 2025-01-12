import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init";
import useAxiosSecure from "./useAxiosSecure";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()

    const signupUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (updateDetails)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateDetails )
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("From observer",currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosSecure.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setUser(currentUser)

            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    }, [axiosSecure])


    const authInfo = {
        user,
        loading,
        signupUser,
        googleLogin,
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