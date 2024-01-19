import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import "./RegisterPage.css";
import { auth, app } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={register}>
      <div className="form">
        <p className="section__title">Enter your information</p>
        <p className="section__subtitle">
          Already a user?
          <span>
            <a href="/login">Go to Login page</a>
          </span>
        </p>
        <FormGroup className="form__group">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p className="password__description">
            *Password must be at least 6 characters
          </p>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn register-btn">
            Register
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default RegisterPage;
