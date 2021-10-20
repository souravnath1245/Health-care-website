import React from 'react';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import {useState} from 'react'
import './Login.css';
import { Form,Button } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const auth = getAuth();

  const history = useHistory()
    const {user, signInUsingGoogle } = useAuth();

   
    const handleEmail=(e)=>{
      setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
      setPassword(e.target.value);
    }
    const handleRegistation=(e)=>{
        e.preventDefault();
      if(password.length < 6){
           setError("Password Must be at least 6 characters long")
      }
        createUserWithEmailAndPassword(auth,  email, password)
        .then((result)=> {
          const user = result.user;
          console.log(user);
        })
        .then(result=> {
          history.push('/home')
        })
        .catch((error)=>{
          setError(error.message);
        })
    }

    return (
        <div className="register-form">
         
            <div className='register'>
                <h2>Register: Create Account</h2>
               <Form onSubmit={handleRegistation}>
               <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control value={user?.displayName}  type="text" placeholder="Your Name" />
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <p className="row mb-3 text-danger">{error}</p>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        <div className='anotherLogin'>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={signInUsingGoogle} className="btn-warning">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;