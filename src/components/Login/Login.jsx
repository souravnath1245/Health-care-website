import React from "react";
import useAuth from "../../hooks/useAuth";
import {useLocation, useHistory} from 'react-router-dom'
import './Login.css'
import { Form,Button } from "react-bootstrap";

const Login = () => {
  const {setIsLoading, signInUsingGoogle } = useAuth();
  const history = useHistory()
  const location = useLocation();
  console.log("came from",location.state?.from);
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin =()=>{
    signInUsingGoogle()
    .then(result=>{
      history.push(redirect_uri)
    }).finally(()=> setIsLoading(false))
  }

  return (
    <div className="loginSection container mx-auto row justify-content-center align-items-center ">
      <div className=" col-lg-6 col-sm-10 mx-auto  image">
        <img src="" alt="" />
      </div>
      <div className="col-lg-6 col-sm-10 login mx-auto">
        <h2 className='fw-bolder'>Sign Up</h2>
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Already Register" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    <div className='anotherLogin'>
    <span>Or login with </span>
        <button onClick={handleGoogleLogin} className="btn btn-warning">
          Google Sign In
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
