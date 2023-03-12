import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <SubHeading title="Contact" />
        <h2 className="custom-heading">Find us</h2>
        <div className="contact-content">
          <p>63 New Lane Ridgewood, NY 11385</p>
          <h3 className="contact-hours-heading">Opening Hours</h3>
          <p className="contact-hours">Mon - Fri: 10:00 am - 1:00 am</p>
          <p className="contact-hours">Sat - Sun: 11:00 am - 2:00 am</p>
        </div>
        <button className="custom-button" type="button">
          Visit Us
        </button>
      </div>
      <div className="contact-image">
        <img src={images.contact} alt="contact img" />
      </div>
    </div>
  );
}

export default Contact;
