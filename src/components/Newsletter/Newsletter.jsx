import React from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-heading">
          <SubHeading title="Newsletter" />
          <h2 className="custom-heading">Subscribe To Our Newsletter</h2>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button className="custom-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
