import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

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
  const [entries] = useState(allEntries);
  const [displayDetail, setDisplay] = useState(false);
  const [singleEntry, setSingleEntry] = useState({ name: '', email: '', phone: '', checkbox_values: [], comments: '' });

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
      return null; // or any loading state/component
    }

    return (
      <Container>
        <Card>
          <Card.Header>
            <cite title="Source Title">Feedback Details</cite>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>Customer Name</Col>
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
              <Col>other Comments</Col>
              <Col>{singleEntry.comments}</Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  };

  return (
    <>
      {displayDetail ? (
        singleEntryForm()
      ) : (
        <div className="padding30px">
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Form Details</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                {Object.keys(feedback_type).map(ty => (
                  <th key={ty}>{feedback_type[ty]}</th>
                ))}
                <th>other_comments</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(entry => (
                <tr key={entry.id}>
                  <td>
                    <a href={`/submission/${entry.id}`} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  {Object.keys(feedback_type).map(ty => (
                    <td key={ty}>{handleCheckVal(ty, entry)}</td>
                  ))}
                  <td>{entry.comments}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Submissions;
