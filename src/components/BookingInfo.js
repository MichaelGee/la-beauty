import React from "react";
import Mark from "../assets/images/markicon.svg";
import Doc from "../assets/images/femaledoc.png";
import DocCard from "../assets/images/privatedoc.png";

const BookingInfo = () => {
  return (
    <div>
      <section className='bookingInfo'>
        <div className='container bookingInfo__container'>
          <div className='bookingInfo__text'>
            <h1>Online booking process for patients</h1>
            <p>
              <span>
                <img src={Mark} alt='green-mark' />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              <span>
                <img src={Mark} alt='green-mark' />
              </span>
              Sed ut perspiciatis unde omnis iste.
            </p>
            <p>
              <span>
                <img src={Mark} alt='green-mark' />
              </span>
              Nemo enim ipsam voluptatem quia.
            </p>
            <p>
              <span>
                <img src={Mark} alt='green-mark' />
              </span>
              Neque porro quisquam est, qui dolorem ipsum.
            </p>
          </div>
          <img src={Doc} alt='female-doc' className='female-doc' />
          <img src={DocCard} alt='doc-card' className='doc-card' />
        </div>
      </section>
    </div>
  );
};

export default BookingInfo;
