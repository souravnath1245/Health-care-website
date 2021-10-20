import {getAuth,signInWithPopup ,GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initialAuthorentication from './../firebase/firebase.init';


initialAuthorentication();

const useFirebase =()=>{
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true )
 

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
       
    }
   

  

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
    }, []) 

    const logOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=> {}
        ).finally(()=> setIsLoading(false))
    }

    return {
        user, 
        logOut,
        isLoading,
        signInUsingGoogle,
        setIsLoading
    }
}

export default useFirebase;