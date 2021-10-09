import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            setUser(result.user) 
            console.log(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return {
        user,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;