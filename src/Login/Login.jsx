import React, { useState } from 'react';

const Login = () => {

    const [loginState, setLoginState] = useState({ message: '' });

    const loginUser = () => {
        setLoginState({ message: 'success' })
    }

    return (
        <form onSubmit={loginUser}>
            <label id="message">{loginState.message}</label>
            <p>Login            </p>

            <input id="email" required />
            <input id="password" required minLength='8' />

            <button type="submit">login</button>
        </form>);
}

export default Login;