import React from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

function Signup() {
  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <div className={classes.loginHeader}>
          <h2>Signup</h2>
        </div>
        <div className={classes.inputDiv}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Signup</button>
          <p>Already have account ?</p>
          <p className={classes.signup}>
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Signup;
