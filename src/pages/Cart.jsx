import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet";
import "../styles/cart.css";
import { Col, Container, Row } from "reactstrap";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg="9" className="p-5">
            {cartItems.length === 0 ? (
              <h2 className="fs-4 text-center">No item added to the cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3" className="p-5">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs=4 fw-bold ">${totalAmount}</span>
              </h6>
            </div>
            <p className="fs-7 mt-2">
              taxes and shipping will calculate in checkout
            </p>
            <div>
              <button className="buy__btn w-100">
                <Link to="/checkout">Checkout</Link>
              </button>
              <button className="buy__btn w-100">
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="image" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i className="ri-delete-bin-line" onClick={deleteProduct}></i>
      </td>
    </tr>
  );
};

export default Cart;
