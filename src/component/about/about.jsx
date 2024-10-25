import React from "react";
import "./about.scss";
import rasm from "../../assets/about1.png";
import rasm1 from "../../assets/about.png";

const About = () => {
  return (
    <div className="about container">
      <p className="about__link">Here are our some of the best clients.</p>
      <h3 className="about__title"> What People Say About Us</h3>
      <div className="about__wrapper">
        <div className="about__card">
          <img src={rasm} alt="qwerty" />
          <div className="about__main">
            <h4 className="about__title">Hamza Faizi</h4>
            <p className="about__text">
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
          </div>
        </div>
        <div className="about__card">
          <img src={rasm1} alt="qwerty" />
          <div className="about__main">
            <h4 className="about__title">Hafiz Huzaifa</h4>
            <p className="about__text">
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
