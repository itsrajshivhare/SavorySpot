import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import About from "./About";
import Prod from "../../img/logo-savory.png";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Prod}></img>
  </a>
);

const Header = () => {
  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();}

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
