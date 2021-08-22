import React from 'react'
import classes from './Login.module.css'

function Login() {
    return (
        <div className={classes.main}>
        <div className={classes.login}>
            <div className={classes.loginHeader}>
                <h2>Login</h2>
            </div>
            <div className={classes.inputDiv}>
                <input type="text" />
                <input type="text" />
                <button>Signin</button>
            </div>
            <p></p>
        </div>
        </div>
    )
}

export default Login
