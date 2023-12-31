import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import "../styles/login.css";
const Login = () => {
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col className="m-auto text-center" lg="6">
              <h3 className="fs-4 fw-bold">Login</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="password" placeholder="Enter your password" />
                </FormGroup>
                <button className="buy__btn auth__btn">Sing in</button>
                <p className="mt-2">
                  Don't have an account?
                  <Link to="/singup">Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
