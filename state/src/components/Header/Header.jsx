import React from "react";
import "./header.css";

const Header = ({cart, showCart}) => {
  return (
    <header className="header">

      <div className="margin">
        <span className="count-phones">{cart.length}</span>
        <button className="cart" onClick={cart.length && showCart}>Корзина</button>
      </div>

    </header>
  );
};

export default Header;
