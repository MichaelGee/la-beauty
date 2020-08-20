import React from "react";
import HeroImg from "../assets/images/doc-illus.png";
const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className='container hero__container'>
          <div className='hero__img'>
            <img src={HeroImg} alt='doc-and-nurse-image' />
          </div>
          <div className='hero__text'>
            <h1>Connecting patients & clinics</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
              eiusmod.
            </p>
            <button class='btn appoint-btn' type='button'>
              Make an appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
