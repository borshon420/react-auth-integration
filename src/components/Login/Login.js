import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub} = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Login</button>
            <button onClick={signInUsingGithub}>GitHub Login</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;