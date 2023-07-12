import React from 'react';

import Input from './shared/Input';
import './Def.css';
import Card from './shared/Card';


const Def = () => {
    const loginURL = "http://localhost:3000/login";
    const newURL = "http://localhost:3000/userreg";
    const dealerURL = "http://localhost:3000/dealerreg";
    return (
    <React.Fragment>
    <Card className="def authentication" >
        <Card className="cardhead" >
            <a href={loginURL}>
            <h2>Login</h2>
            </a>
        </Card>
        <Card className="cardhead" >
        <a href={newURL}>
            <h2>New User? Register</h2>
            </a>
        </Card>
        <Card className="cardhead" >
        <a href={dealerURL}>
            <h2>New Dealer? Register</h2>
            </a>
        </Card>
    </Card>
    </React.Fragment>
    );

};

export default Def;