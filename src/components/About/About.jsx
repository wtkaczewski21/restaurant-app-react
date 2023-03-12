import React from "react";
import images from "../../constants/images";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-aboutus">
        <h2 className="custom-heading">About Us</h2>
        <p className="about-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          recusandae voluptatum rem. Rerum ipsum cum eius quae officia, nisi
          accusantium perspiciatis culpa soluta quod distinctio hic mollitia
          quia explicabo quibusdam.
        </p>
        <button type="button" className="custom-button">
          Read More
        </button>
      </div>
      <div className="about-fork">
        <img src={images.fork} alt="about fork" />
      </div>
      <div className="about-history">
        <h2 className="custom-heading">Our History</h2>
        <p className="about-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          recusandae voluptatum rem. Rerum ipsum cum eius quae officia, nisi
          accusantium perspiciatis culpa soluta quod distinctio hic mollitia
          quia explicabo quibusdam.
        </p>
        <button type="button" className="custom-button">
          Read More
        </button>
      </div>
    </div>
  );
}

export default About;
