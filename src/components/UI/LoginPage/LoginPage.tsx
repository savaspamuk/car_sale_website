import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form, FormGroup } from "reactstrap";
import "./LoginPage.css";
import { auth, app } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={signIn}>
      <div className="login-register-form">
        <p className="section__title">Enter your information</p>
        <p className="section__subtitle">
          New user?
          <span>
            <a href="/register">Click here to Register</a>
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
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default LoginPage;
