import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import * as action from "../../../Store/action/auth";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();

    const signin = () => {
        dispatch(action.auth())
    }

  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <div className={classes.loginHeader}>
          <h2>Login</h2>
        </div>
        <div className={classes.inputDiv}>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button onClick={signin}>Signin</button>
          <p>Don't have account ?</p>
          <p className={classes.signup}>
            <Link className={classes.link} to="/signup">
              Signup
            </Link>
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Login;
