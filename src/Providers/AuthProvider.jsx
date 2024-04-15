import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; 
import app from '../firebase/firebase.config'; 

export const AuthContext = createContext(null);
const auth = getAuth(app); 

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const authInfo = {
        user,
        createUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
