import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './Login.css';
import { Form,Button } from "react-bootstrap";

const Register = () => {
    const {user, signInUsingGoogle } = useAuth();

    return (
        <div className="register-form">
            <div className='register'>
                <h2>Register: Create Account</h2>
               <Form>
               <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>
  

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
  <Form.Group className="mb-3" controlId="formBasicRePassword">
    <Form.Label>Re-Password</Form.Label>
    <Form.Control type="password" placeholder="Re-Password" />
  </Form.Group>
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