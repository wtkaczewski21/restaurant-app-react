import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/MenuItem/MenuItem";

import "./Menu.css";
import images from "../../constants/images";
import data from "../../constants/data";

function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="menu-title">
        <SubHeading title="Menu that fits your taste" />
        <h1 className="custom-header">Today's Special</h1>
      </div>
      <div className="menu-content">
        <div className="menu-cocktails">
          <h2 className="menu-heading">Cocktails</h2>
          <div className="menu-items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
        <div className="menu-img">
          <img src={images.menu} alt="menu image" />
        </div>
        <div className="menu-wines">
          <h2 className="menu-heading">Wines</h2>
          <div className="menu-items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <button type="button" className="custom-button">
        View More
      </button>
    </div>
  );
}

export default Menu;
