import React, { Component }  from 'react';
import './Login.css'

function Login(){
    return(
        <div id="LoginContainer">
            <h3>Login</h3>
            <form>
                <label class="LoginLabel">Username</label>
                <input type="text" name="username" class="LoginInput"/>
                <label class="LoginLabel">Password</label>
                <input type="password" name="password"  class="LoginInput"/>
                <input type="submit" value="Login" class="LoginButton"/>
            </form>
        </div>
    );
}

export default Login;
