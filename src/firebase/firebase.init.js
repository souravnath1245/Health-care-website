import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

const initialAuthorentication =()=>{
    initializeApp(firebaseConfig)
}

export default initialAuthorentication;