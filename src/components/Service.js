import React from "react";
import Eye from "../assets/images/eyeicon.png";
import Heart from "../assets/images/hearticon.png";
import Teeth from "../assets/images/teethicon.png";

const Service = () => {
  return (
    <div>
      <section className='service'>
        <div className='container service__container'>
          <h1>Services</h1>
          <div className='card__container'>
            <div className='card'>
              <div className='card__body'>
                <img src={Heart} alt='heart-icon' />
                <h3>Cardiology</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card__body'>
                <img src={Eye} alt='eye-icon' />
                <h3>Eye Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card__body'>
                <img src={Teeth} alt='teeth-icon' />
                <h3>Dental Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
