import React, {useState} from 'react';
import './Login.css'

function Login() {

    return (
    <div className='formsBackEnd'>
        <form action="/login" method="post">
        <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
        <h2>Enter the system</h2>
        <div className="input-group">
            <label htmlFor="username">Login:</label>
            <input type="text" id="username" name="username" placeholder="login" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className="login-btn">Submit</button>
        </form>
    </div>
    );
}

export default Login;