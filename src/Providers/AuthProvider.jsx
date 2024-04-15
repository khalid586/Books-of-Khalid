import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; 
import app from '../firebase/firebase.config'; 

export const AuthContext = createContext(null);
const auth = getAuth(app); 

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const logOut = () => signOut(auth);

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currUser=>{
            console.log(currUser);
            setUser(currUser);
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
