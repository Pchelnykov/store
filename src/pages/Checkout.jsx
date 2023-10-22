import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Col lg="8">
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Type your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Type your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <br />
                  free shipping <span>${totalQty * 10}</span>
                </h6>

                <h4>
                  Total Cost: <span>${totalAmount + totalQty * 10}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
