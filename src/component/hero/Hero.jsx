import React from "react";
import "./Hero.scss";
import img from "../../assets/img.png";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="hero container">
        <div className="hero__main">
          <h1 className="hero__title">Discover Most Suitable Watches</h1>
          <p className="hero__text">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
        </div>
        <img className="hero__img" src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
