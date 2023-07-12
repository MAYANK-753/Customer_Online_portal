import React, {useState} from 'react';

import Input from './shared/Input';
import './DealerReg.css';
import Card from './shared/Card';
import Button from './shared/Button';
import PhoneInput from 'react-phone-number-input';

const DealerReg = () => {
    const [value, setValue] = useState();
    const [message, setMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const[regno, setRegno] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
   

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`${firstName} ${lastName}, ${value}, ${email}, ${country}, ${zipcode}, ${regno}, ${password} `);
        console.log({message});
        setFirstName("");
        setLastName("");
        setValue("");
        setEmail("");
        setCountry("");
        setZipcode("");
        setRegno("");
        setPassword("");
        setConfirmPass("");
        
    }

    // const [status, setStatus] = useState({firstname: ""});
    return (
        <React.Fragment>
            <Card className="authentication">
            <h2>Dealer Registration</h2>
            <form className='place-form' onSubmit={handleSubmit}>
                <div className="name">
                <Input id="first" element="input" type="text" label="First name" value={firstName} onChange={(event) =>setFirstName(event.target.value)} />
                <Input id="last" element="input" type="text" label="Last name" value={lastName} onChange={(event) =>setLastName(event.target.value)} />
                </div>
                <div className='phone form-control'>
                {/* <Input id="country_code" element="input" type="number" label="code"/>
                <Input id="fon" element="input" type="text" label="Phone Number"/> */}
                <div className="labelPh">
                <label>Enter Phone Number</label>
                </div>
                <PhoneInput value={value} onChange={setValue}/>
                </div>
                <Input id="email" element="input" type="email" label="Email Id" value={email} onChange={(event) =>setEmail(event.target.value)} />
                <div className="name">
                <Input id="country" element="input" type="text" label="Country" value={country} onChange={(event) =>setCountry(event.target.value)} />
                <Input id="zipcode" element="input" type="text" label="Zipcode" value={zipcode} onChange={(event) =>setZipcode(event.target.value)} />
                </div>
                <Input id="regno" element="input" type="text" label="Comapny Registration Number" value={regno} onChange={(event) =>setRegno(event.target.value)} />
                <Input id="password" element="input" type="text" label="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <Input id="confirmpass" element="input" type="text" label="Confirm Password" value={confirmpass} onChange={(event) => setConfirmPass(event.target.value)} />
            <Button element="button" name="Submit" type="submit" />
            </form>
        </Card>
        </React.Fragment>
    )
};

export default DealerReg;