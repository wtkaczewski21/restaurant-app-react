import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import images from "../../constants/images";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-links-contact">
          <h2 className="footer-headings">Contact Us</h2>
          <p>63 New Lane Ridgewood, NY 11385</p>
          <p>+1 222-333-1234</p>
          <p>+1 555 000 5555</p>
        </div>
        <div className="footer-links-logo">
          <img src={images.logo} alt="footer logo" />
          <div className="footer-links-icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="footer-links-work">
          <h2 className="footer-headings">Working Hours</h2>
          <p>Monday - Friday</p>
          <p>10:00 am - 1:00 am</p>
          <p>Saturday - Sunday</p>
          <p>11:00 am - 2:00 am</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2023 Restaurant. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
