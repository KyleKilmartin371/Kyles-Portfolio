import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
      });
      const { name, email, message } = formState;
      const [errorMessage, setErrorMessage] = useState("");
    
      function handleChange(e) {
        if (e.target.name === "email") {
          const isValid = validateEmail(e.target.value);
          console.log(isValid);
          if (!isValid) {
            setErrorMessage("Your email is invalid");
          } else {
            setErrorMessage("");
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage("");
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        }
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return(
        <Container id="contact">
            <Row>
                <h2>Contact Me</h2>
            </Row>
            <Row>
                <p>
                    Please, If you have any questions, don't hesitate to contact me! ✉️ kylekilmartin371@gmail.com
                </p>
            </Row>
            <Row>
                <Col>
                <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email <br /> address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
          <button data-testid="button" type="submit">Submit</button>
      </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;