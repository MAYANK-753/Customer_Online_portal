import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './StickyHeader.css';

function StickyHeader() {
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const loginButtonRef = useRef(null);

  const handleLogin = () => {
    const customer = {
      name: 'Mayank',
      zipCode: '12345',
    };

    setCustomerName(customer.name);
    setZipCode(customer.zipCode);
    setShowLoginWindow(false);
  };

  const handleLogout = () => {
    setCustomerName('');
    setZipCode('');
  };

  const handleLoginButtonClick = () => {
    setShowLoginWindow(true);
  };

  const handleLoginWindowClose = () => {
    setShowLoginWindow(false);
  };

  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Feedback Form</Navbar.Brand>
          {customerName ? (
            <Button variant="outline-primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-primary" onClick={handleLoginButtonClick} ref={loginButtonRef}>
              My Account
            </Button>
          )}
        </Container>
      </Navbar>
      <br />

      {showLoginWindow && (
        <div
          className="sticky-header-login-window"
          style={{
            top: loginButtonRef.current.offsetTop + loginButtonRef.current.offsetHeight + 10,
            left: loginButtonRef.current.offsetLeft,
          }}
        >
          <p>Name: Mayank {customerName}</p>
          <p>zipCode: 12345 {zipCode}</p>
          <br />
          <button onClick={handleLogin}>Logout</button>
          <button onClick={handleLoginWindowClose}>Close</button>
        </div>
      )}
    </>
  );
}

export default StickyHeader;
