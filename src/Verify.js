import React, { useState } from 'react';

import Input from './shared/Input';
import './Verify.css';
import Card from './shared/Card';
import Button from './shared/Button';
import { useNavigate } from "react-router-dom";

const Verify = () => {
    
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();
    const isValidEmail = true;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(isValidEmail){
            window.alert("Email Verified Successfully")
            navigate("/createpass");
        }else{
            window.alert("Please Enter a valid Email")
        };


        // console.log({message});
    };

    return(
        <Card className="passcard" >
            <h2>Verify Email</h2>
            <form className="loginform" onSubmit={handleSubmit} >
            <Input id="username" element="input" type="email" label="Enter Email" />
            <Button element="button" name="Verify" type="submit" />
            </form>
        </Card>
    );
};

export default Verify;