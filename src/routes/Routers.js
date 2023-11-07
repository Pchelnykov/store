import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Singup from "../pages/Singup";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import ProtectedRoute from "./protectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Singup />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="shop/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;
