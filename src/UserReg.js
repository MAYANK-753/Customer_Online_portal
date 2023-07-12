import React, { useState } from 'react';

import Input from './shared/Input';
import './UserReg.css';
import Card from './shared/Card';
import Button from './shared/Button';
import PhoneInput from 'react-phone-number-input';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import Input from "@material-ui/core/Input";

const UserReg = () => {
    const [message, setMessage] = useState("");
    const [value, setValue] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [password, setPassword] = useState({
      pass: "",
      showPassword: false,
    });
    const [confirmpass, setConfirmPass] = useState("");

    const handleClickShowPassword = () => {
      setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
      setPassword({ ...password, [prop]: event.target.value });
  };
    const handleSubmit = (event) => {
        event.preventDefault();


        setMessage(`${firstName} ${lastName}, ${value}, ${email}, ${country}, ${zipcode}`);
        console.log({message});
        setFirstName("");
        setLastName("");
        setValue("");
        setEmail("");
        setCountry("");
        setZipcode("");
        // setPassword("");
        setConfirmPass("");
    }
    return (
        <React.Fragment>
            <Card className="authentication">
            <h2>User Registration</h2>
            <form className='place-form' onSubmit={handleSubmit}>
                <div className="name">
                <Input id="first" element="input" type="text" label="First name" value={firstName} onChange={(event) =>
          setFirstName(event.target.value)
        } />
        {/* <input id="first" type="text" label="First name" onChange={event => setFirstName(event.target.value)} ></input> */}
                <Input id="last" element="input" type="text" label="Last name" value={lastName} onChange={(event) =>
          setLastName(event.target.value)
        } />
                </div>
                <div className='phone form-control'>
                {/* <Input id="country_code" element="input" type="number" label="code"/>
                <Input id="fon" element="input" type="text" label="Phone Number"/> */}
                <div className="labelPh">
                <label>Enter Phone Number</label>
                </div>
                <PhoneInput value={value} onChange={setValue}/>
                </div>
                <Input id="email" element="input" type="email" label="Email Id" value={email} onChange={(event) =>
          setEmail(event.target.value)
        } />
                <div className="name">
                <Input id="country" element="input" type="text" label="Country" value={country} onChange={(event) =>
          setCountry(event.target.value)
        } />
                <Input id="zipcode" element="input" type="text" label="Zipcode" value={zipcode} onChange={(event) =>
          setZipcode(event.target.value)
        } />
                </div>
                {/* <Input id="password" element="input" type={password.showPassword ? "text" : "password"} label="Password" value={password.pass} onChange={handlePasswordChange("password")}                 endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {password.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                } /> */}
                 <Input
                 id="password" element="input" label="password"
                type={password.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("pass")}
                value={password.pass}
                
            /> 
                <Input id="confirmpass" element="input" type="text" label="Confirm Password" value={confirmpass} onChange={(event) => setConfirmPass(event.target.value)} />
            <Button element="button" name="Submit" type="submit"/>
            </form>
        </Card>
        </React.Fragment>
    )
};

export default UserReg;