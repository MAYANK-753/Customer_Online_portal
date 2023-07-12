import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import StickyHeader from './header';

const feedback_type = {
  qos: 'Please rate the quality of the service you received from our customer support.',
  qob: 'Please rate the quality of the products available on our e-commerce website.',
  roc: 'Was our e-commerce website user-friendly?',
  exp: 'Please rate your overall experience with our e-commerce website.',
  ship: 'How satisfied are you with the shipping and delivery process?',
  cust: 'How satisfied are you with our customer service?',
};

function Submissions() {
  const allEntries = JSON.parse(localStorage.getItem('allEntries'));
  const [entries, setEntries] = useState(allEntries);
  const [displayDetail, setDisplay] = useState(false);
  const [singleEntry, setSingleEntry] = useState({
    name: '',
    email: '',
    phone: '',
    checkbox_values: [],
    comments: '',
    productName: '',
    dateTime: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    if (!path.includes('submissions')) {
      const id = path.split('/').pop();
      const entry = allEntries.find(item => parseInt(item.id) === parseInt(id));
      setDisplay(true);
      setSingleEntry(entry);
    }
  }, [allEntries]);

  const handleCheckVal = (ty, entry) => {
    const val = entry.checkbox_values.find(item => item.split('_')[0] === ty);
    return val ? val.split('_')[1] : '';
  };

  const singleEntryForm = () => {
    if (Object.keys(singleEntry).length === 0) {
      return null; 
    }

    return (
      <Container>
        
        <Card>
          <Card.Header>
            <h3>{singleEntry.productName}</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>Dealer name</Col>
              <Col>{singleEntry.name}</Col>
            </Row>
            <Row>
              <Col>Email</Col>
              <Col>{singleEntry.email}</Col>
            </Row>
            <Row>
              <Col>Phone</Col>
              <Col>{singleEntry.phone}</Col>
            </Row>
            {Object.keys(feedback_type).map(ty => (
              <Row key={ty}>
                <Col>{feedback_type[ty]}</Col>
                <Col>{handleCheckVal(ty, singleEntry)}</Col>
              </Row>
            ))}
            <Row>
              <Col>Date and Time</Col>
              <Col>{singleEntry.dateTime}</Col>
            </Row>
            <Row>
              <Col>Other Comments</Col>
              <Col>{singleEntry.comments}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  };

  const handleSearch = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setEntries(allEntries);
    } else {
      const filteredEntries = allEntries.filter(
        entry =>
          entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.dateTime.includes(searchTerm)
      );
      setEntries(filteredEntries);
    }
  };

  return (
    <>
      <div className="padding30px">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
          <input
            type="text"
            placeholder="Search by email, product, or date and time"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: '300px' }}
          />
        </div>
        {displayDetail ? (
          singleEntryForm()
        ) : (
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Dealer name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Date and Time</th>
                <th>Form Details</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.productName}</td>
                  <td>{entry.dateTime}</td>
                  <td>
                    <a href={`/customer/feedback/submission/${entry.id}`} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default Submissions;
