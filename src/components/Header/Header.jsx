import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Header.css";
import images from "../../constants/images";

function Header() {
  return (
    <div className="header" id="home">
      <div className="header-text">
        <SubHeading title="Tasty & Delicious Food" />
        <h1 className="custom-header">May the best food find your appetite.</h1>
        <p className="header-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          repudiandae. Ab corporis, debitis, accusantium quam officia, nesciunt
          et maiores reiciendis reprehenderit harum quia sequi fugiat dolor
          commodi fuga natus itaque.
        </p>
        <button type="button" className="custom-button">
          Explore Menu
        </button>
      </div>
      <div className="header-image">
        <img src={images.welcome} alt="header image" />
      </div>
    </div>
  );
}

export default Header;
