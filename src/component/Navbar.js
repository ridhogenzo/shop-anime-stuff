import React from "react";
import Logo from "../assets/images/mascot.png";
import Kyou from "../assets/images/kyou.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import Button from "../elements/button";

export default function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand pl-5" href="/">
        <img src={Logo} alt="Logo" />
        <img src={Kyou} alt="Kyou" style={{ paddingLeft: 90 }} />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">
            <Button type="link" href="/cart">
              <AiOutlineShoppingCart size="2rem" color="orange" />
            </Button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Button type="link" href="/transaction">
              <BiTransfer size="2rem" color="orange" />
            </Button>
          </a>
        </li>
        <li className="nav-item border-separate">
          <a className="nav-link">
            <Button type="link" href="/wishlist">
              <AiOutlineHeart size="2rem" color="orange" />
            </Button>
          </a>
        </li>
        <li className="nav-item sign-in">
          <a className="nav-link">
            <Button type="link" href="/login">
              <span className="text-orange">Sign In</span>
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
