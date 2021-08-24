import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import * as action from '../../../Store/action/auth'
import { useDispatch } from "react-redux";

function Signup() {

    const dispatch = useDispatch();
    const [data, setData] = useState({name: 'a', email: '', password: ''})

    const handleSubmit = (e) => {
        const { name, value } = e.target;
            setData(prevState => ({
                ...prevState,
                [name]: value
            }));
    }
    const signup = () => {
        dispatch(action.auth(data.email, data.password))
        console.log(data.name, data);
    }

  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <div className={classes.loginHeader}>
          <h2>Signup</h2>
        </div>
        <div className={classes.inputDiv}>
          <input name='name' value={data.name} type="text" placeholder="Name" onChange={handleSubmit}/>
          <input name='email' value={data.email} type="email" placeholder="Email" onChange={handleSubmit} />
          <input name='password' value={data.password} type="password" placeholder="Password" onChange={handleSubmit} />
          <button onClick={signup}>Signup</button>
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
