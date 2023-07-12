import React, { useState } from 'react';

import Input from './shared/Input';
import './Login.css';
import Card from './shared/Card';
import Button from './shared/Button';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const forgotPass = "http://localhost:3000/verify";
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const iscustomer = true;
    const isDealer = false;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if(iscustomer){
            navigate("/login/product");
        }else if(isDealer){
            navigate("/dealer");
        }

    }
return(
    <Card className="logincard" > 
        <h2>Login</h2>
        <form className="loginform" onSubmit={handleSubmit} >
            <Input id="username" element="input" type="text" label="Username" onChange={(event) =>setUserName(event.target.value)} />
            <Input id="password" element="input" type="text" label="password" onChange={(event) =>setPassword(event.target.value)} />
        <Button element="button" name="Submit" type="submit" />
        </form>
        <a href={forgotPass}>forgot password?</a>
    </Card>
);
};

export default Login;