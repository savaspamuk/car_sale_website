import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form, FormGroup } from "reactstrap";
import "./RegisterPage.css";
import { auth, app } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (event: FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/login");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={register}>
      <div className="login-register-form">
        <p className="section__title">Enter your information</p>
        <p className="section__subtitle">
          Already a user?
          <span>
            <Link to="/login">Go to Login page</Link>
          </span>
        </p>
        <FormGroup className="form__group">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
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
