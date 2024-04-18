import {updateProfile , GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [on, setOn] = useState(false);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, image) =>{
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          });
        
    }
    
    
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider;
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the state auth changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            setOn(false)
            
        });
        return () => {
            unSubscribe();
        }
    }, [on])
    const authInfo = { createUser, signIn, logOut,signInWithGoogle, user, loading,updateUserProfile, setOn , signInWithGithub}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;