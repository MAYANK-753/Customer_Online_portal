import React, { useState } from 'react';

import Input from './shared/Input';
import './Password.css';
import Card from './shared/Card';
import Button from './shared/Button';
import { useNavigate } from "react-router-dom";

const Password = () => {

    const isValidPass = true;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if(isValidPass){
            window.alert("Password Changed Successfully")
            navigate("/login");
        }else{
            window.alert("Please Enter a valid Password")
        };
    };

    return(
        <Card className="passcard" >
            <h2>Create Password</h2>
            <form className="loginform" onSubmit={handleSubmit} >
            <Input id="username" element="input" type="text" label="Enter Password" />
            <Input id="username" element="input" type="text" label="Confirm Password" />
            <Button element="button" name="Submit" type="submit" />
            </form>
        </Card>
    );
};

export default Password;