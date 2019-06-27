import React, { Component }  from 'react';
import './Login.css'
import axios from 'axios'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(evt){
        evt.preventDefault();

        let response = await axios.post("//localhost:8000/login",{
            username: this.state.username,
            password: this.state.password
        });

        console.log(response.data.status)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render(){
        return(
            <div id="LoginContainer">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <label class="LoginLabel">Username</label>
                    <input onChange={this.handleChange} type="text" name="username" class="LoginInput"/>
                    <label class="LoginLabel">Password</label>
                    <input onChange={this.handleChange} type="password" name="password"  class="LoginInput"/>
                    <input type="submit" value="Login" class="LoginButton"/>
                </form>
            </div>
        );
    }
}

export default Login;
