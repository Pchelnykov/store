import React, { useRef } from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./header.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";

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
  const { currentUser } = useAuth();
  const profileActionRef = useRef(null);
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

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return ( { useRef }
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
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user-icon"
                  onClick={toggleProfileActions}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span>Logout</span>
                  ) : (
                    <div>
                      <Link to="/singup">Singup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
                <p>{currentUser.displayName}</p>
              </div>
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
