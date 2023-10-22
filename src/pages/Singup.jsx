import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import "../styles/login.css";
const Singup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Helmet title="Singup">
      <section>
        <Container>
          <Row>
            <Col className="m-auto text-center" lg="6">
              <h3 className="fs-4 fw-bold">Singup</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type="submit" className="buy__btn auth__btn">
                  Singup
                </button>
                <p className="mt-2">
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Singup;
