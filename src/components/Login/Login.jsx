import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory, Link } from "react-router-dom";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import login1 from "../../images/loginImage/login1.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { setIsLoading, signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="loginSection container mx-auto row justify-content-center align-items-center ">
      <div className=" col-lg-6 col-sm-10 mx-auto  image">
        <img src={login1} alt="" />
      </div>
      <div className="col-lg-6 col-sm-10 login mx-auto">
        <h2 className="fw-bolder">Sign Up</h2>
        <span className="text-warning">{error}</span>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <span>Please Create Account First </span>
        <Link to="/register">
          <a href="">Create an Account </a>
        </Link>

        <div className="anotherLogin">
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
