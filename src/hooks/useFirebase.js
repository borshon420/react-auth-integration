import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=> {
        onAuthStateChanged(auth, user=> {
            if(user){
                console.log('inside state change', user)
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        logout,
        signInUsingGoogle,
        signInUsingGithub
    }
}

export default useFirebase;