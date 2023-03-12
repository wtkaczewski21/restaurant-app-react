import React from "react";
import "./MenuItem.css";

function MenuItem({ title, price, tags }) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <div className="menu-item-name">
          <p>{title}</p>
        </div>

        <div className="menu-item-dash" />

        <div className="menu-item-price">
          <p>{price}</p>
        </div>
      </div>
      <div className="menu-item-sub">
        <p>{tags}</p>
      </div>
    </div>
  );
}

export default MenuItem;
