import {getAuth,signInWithPopup ,GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initialAuthorentication from './../firebase/firebase.init';


initialAuthorentication();

const useFirebase =()=>{
    const [user, setUser] = useState([])
    const [error , setError] = useState("")

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=> {
            setUser(result.user)
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    }, [])

    const logOut =()=>{
        signOut(auth)
        .then(()=> {}
        )
    }

    return {
        user, 
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;