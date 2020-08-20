import React from "react";
import Morgate from "../assets/images/morgate.png";
import Midwestern from "../assets/images/midwestern.png";
import Highpoint from "../assets/images/highpoint.png";
import Matrix from "../assets/images/matrix.png";

const Organizations = () => {
  return (
    <div>
      <section className='organizations'>
        <div className='container organize__container'>
          <h3>
            Trusted by <span>hundreds</span> of the world best medical
            <span> organizations</span>
          </h3>
          <div className='organize__container__images'>
            <img src={Morgate} alt='morgate-logo' />
            <img src={Midwestern} alt='midwestern-logo' />
            <img src={Highpoint} alt='highpoint-logo' />
            <img src={Matrix} alt='matrix-logo' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organizations;
