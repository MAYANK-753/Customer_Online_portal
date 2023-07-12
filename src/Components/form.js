import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { InputGroup, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Alert from "react-bootstrap/Alert";
import StickyHeader from "./header";
// import './feedbackform.css';

function FeedbackForm() {
  const [displayform, setDisplay] = useState(true);
  const [em_value, setEmValue] = useState("");
  const [nm_value, setNmValue] = useState("");
  const [ph_value, setPhValue] = useState();

  const [checked_val, setCheckBoxChecked] = useState([]);
  const [error_msg, setErrorMsg] = useState(
    "Please enter the value for the above field"
  );

  useEffect(() => {
    
    setNmValue("Mayank Saha");
    setEmValue("mayanksaha.753@gmail.com");
    setPhValue("+91 9667887651");
  }, [])

  const handleOnChange = (isChecked, value) => {
    let temp = [...checked_val];
    var pre = value.split("_")[0];
    if (isChecked) {
      temp = temp.filter((item) => item.split("_")[0] !== pre);
      temp.push(value);
      setCheckBoxChecked(temp);
      return;
    }

    setCheckBoxChecked(temp.filter((item) => item !== value));
  };

  const validateForm = () => {
    setErrorMsg("Please enter the value for the above field");

    [...document.getElementsByClassName("alert-danger")].forEach((element) => {
      element.style.display = "none";
    });
    if (nm_value === "") {
      document.getElementById("name_er").style.display = "block";
    } else if (em_value === "") {
      document.getElementById("email_er").style.display = "block";
    } else if (!em_value.includes(".com") || !em_value.includes("@")) {
      document.getElementById("email_er").style.display = "block";
      setErrorMsg("Invalid Email");
    } else if (!ph_value) {
      document.getElementById("phone_er").style.display = "block";
    } else if (ph_value.length < 13) {
      document.getElementById("phone_er").style.display = "block";
      setErrorMsg("Invalid Phone number");
    } else if (checked_val.length < Object.keys(feedback_type).length) {
      let keys = Object.keys(feedback_type);
      checked_val.forEach((val) => {
        keys = keys.filter((item) => item !== val.split("_")[0]);
      });
      keys.forEach((val) => {
        document.getElementById(`er_${val}`).style.display = "block";
      });
    } else return true;
  };

  const formSubmit = (e) => {
    
  
    if (validateForm()) {
      var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
      var new_id = 0;
      if (existingEntries == null) existingEntries = [];
      else {
        let lastentry = existingEntries.slice(-1)[0];
        new_id = parseInt(lastentry["id"]) + 1;
      }
      var entry = {
        id: new_id,
        email: em_value,
        name: nm_value,
        phone: ph_value,
        checkbox_values: checked_val,
        other_comments: document.getElementById("other_comments").value,
      };
      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem("allEntries", JSON.stringify(existingEntries));
      setDisplay(true);
    }
  };
  

  const feedback_type = {
    qos: "Please rate the quality of the service you received from our customer support.",
    qop: "Please rate the quality of the products available on our e-commerce website.",
    roc: "Was our e-commerce website user-friendly?",
    exp: "Please rate your overall experience with our e-commerce website.",
    ship: "How satisfied are you with the shipping and delivery process?",
    cust: "How satisfied are you with our customer service?",
  };

  const feedback_opts = ["Excellent", "Good", "Fair", "Bad"];

  return (
    <Container>
      <StickyHeader/>
      {displayform ? (
        <Card>
          <Card.Header>
            <cite title="Source Title">
              We are committed to providing you with the best services
              experience possible, so we welcome your comments.
            </cite>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              Please fill out this questionnaire.
            </blockquote>
          </Card.Body>
          <Container className="padding30px">
            <Form onSubmit = {formSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Customer Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="E.g. jon snow"
                      value={nm_value}
                      onChange={(e) => setNmValue(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="name_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      required
                      placeholder="E.g. abc@gmail.com"
                      value={em_value}
                      onChange={(e) => setEmValue(e.target.value)}
                    />
                  </Form.Group>
                  <Alert variant="danger" id="email_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="required-field">Phone</Form.Label>
                    <InputGroup>
                      <PhoneInput
                        placeholder="9999999999"
                        value={ph_value}
                        onChange={setPhValue}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Alert variant="danger" id="phone_er">
                    &#9432;{error_msg}
                  </Alert>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                {Object.keys(feedback_type).map((ty, index) => (
                  <React.Fragment key={ty}>
                    <Col>
                      <Form.Group className="mb-3" controlId={ty}>
                        <Form.Label className="required-field">
                          {feedback_type[ty]}
                        </Form.Label>
                        <InputGroup>
                          <div className="mb-3">
                            {feedback_opts.map((opt, key) => (
                              <Form.Check
                                inline
                                label={opt}
                                name={`${ty}_feedback_opts`}
                                id={`${ty}_${key}`}
                                checked={checked_val.includes(ty + "_" + opt)}
                                onChange={(e) =>
                                  handleOnChange(
                                    e.target.checked,
                                    ty + "_" + opt
                                  )
                                }
                                type="checkbox"
                                value={opt}
                                key={opt}
                              />
                            ))}
                          </div>
                        </InputGroup>
                      </Form.Group>
                      <Alert variant="danger" id={`er_${ty}`}>
                        &#9432;{error_msg}
                      </Alert>
                    </Col>
                    {(index + 1) % 2 === 0 && <div className="w-100" />}{" "}
                    {}
                  </React.Fragment>
                ))}
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicComments">
                    <Form.Label>Other Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} id="other_comments" />
                  </Form.Group>
                </Col>
              </Row>
              <Button className="btn_purp" type="submit" onClick={(e) => formSubmit(e)}>
                Submit Review
              </Button>
            </Form>
          </Container>
        </Card>
      ) : (
        <Card bg="light" text="dark">
          <Card.Body>
            <div className="padding30px">
              <div class="circle">
                <div class="checkmark"></div>
              </div>
            </div>
            <Card.Text>Thank you for providing the feedback</Card.Text>
            <Form.Text muted>
              We will work towards improving your experience
            </Form.Text>
            <div className="padding30px">
              <Button
                className="btn_purp" onClick={(e) => {window.location.href = "/customer/feedback/submission"}}
              >
                Close
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default FeedbackForm;