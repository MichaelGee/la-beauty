import React from "react";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import Qmark from "../assets/images/question-mark.png";

const Testimonial = () => {
  return (
    <div>
      <section className='testimonial'>
        <div className='container testimonial__container'>
          <h4>Testimonial</h4>
          <h3>What clients say about us</h3>
          <div className='card__container'>
            <img src={Qmark} alt='question-mark' className='q-mark' />
            <div className='card'>
              <div className='card__body'>
                <div className='pic-and-name'>
                  <img src={client1} alt='client-pic' />
                  <div>
                    <h5>Frank Headstone</h5>
                    <h6>Patient</h6>
                  </div>
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card__body'>
                <div className='pic-and-name'>
                  <img src={client2} alt='client-pic' />
                  <div>
                    <h5>Karen Drinkwater</h5>
                    <h6>Patient</h6>
                  </div>
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card__body'>
                <div className='pic-and-name'>
                  <img src={client3} alt='client-pic' />
                  <div>
                    <h5>Janet Jackson</h5>
                    <h6>Patient</h6>
                  </div>
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
