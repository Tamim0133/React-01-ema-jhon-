import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <img id="header-img" className="img-fluid" src={logo} alt="" />

      <ul className="d-flex bg-dark py-1 my-2 ">
        <li>
          <a href="/Shop">Shop</a>
        </li>
        <li>
          <a href="/Order">Order Review</a>
        </li>
        <li>
          <a href="/Manage">Manage Inventory</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
