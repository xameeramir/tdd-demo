import React from 'react';

const Login = () => {
    return (<p>Login
        <input id="email" required/>
        <input id="password" required minLength='8' />
    </p>);
}

export default Login;