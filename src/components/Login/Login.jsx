import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div className="loginSection row">
      <div className=" col-lg-6 col- image">
        <img src="" alt="" />
      </div>
      <div className="login">
        <h2>Sign Up</h2>
        <form action="">
          <input type="email" name="email" placeholder='Enter Your Email' id="" />
        </form>

        <button onClick={signInUsingGoogle} className="btn btn-warning">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
