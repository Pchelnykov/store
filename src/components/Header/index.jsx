import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./header.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    dispalay: "Home",
  },
  {
    path: "shop",
    dispalay: "Shop",
  },
  {
    path: "cart",
    dispalay: "Cart",
  },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const headerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const navigate = useNavigate();
  const navigateToCart = () => navigate("/cart");

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__sticky");
      } else {
        headerRef.current.classList.remove("header__sticky");
      }
    });
  };

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  React.useEffect(() => {
    stickyHeaderFunction();

    return () => {
      window.removeEventListener("scroll", stickyHeaderFunction);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <motion.img whileTap={{ scale: 1.3 }} src={logo} alt="logo" />
              <div>
                <h1>Multismart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__menu">
                {nav__links.map((items, id) => (
                  <li key={id} className="nav__item">
                    <Link
                      to={items.path}
                      className={(navClass) =>
                        navClass.isActive ? `nav__active` : ``
                      }
                    >
                      {items.dispalay}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i
                  className="ri-shopping-bag-line"
                  onClick={navigateToCart}
                ></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user-icon"
                />
              </span>
              <div className="mobile__menu">
                <span>
                  <i className="ri-menu-line" onClick={menuToggle}></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
