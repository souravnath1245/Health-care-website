
import "./App.css";
import initialAuthorentication from "./firebase/firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


initialAuthorentication();

function App() {
  const [user, setUser] = useState([])
  
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogleLogIn=()=>{
    signInWithPopup(auth, googleProvider).then((result)=>{
        const user = result.user;
        console.log(user);
        setUser(user);
    });
  }

  return (
    <div>

      <button onClick={handleGoogleLogIn} className="btn btn-primary">google login</button>
    </div>
  );
}

export default App;
