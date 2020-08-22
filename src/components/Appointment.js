import React from "react";
import App from "../assets/images/patientapp.png";
import Mark from "../assets/images/markicon.svg";

const Appointment = () => {
  return (
    <div>
      <section className='appointmentInfo'>
        <div className='container appointmentInfo__container'>
          <img src={App} alt='female-with-phoneapp' className='female-doc' />
          <div className='appointmentInfo__text'>
            <h1>Are you not feeling well? Let us take care of you at home</h1>
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
        </div>
      </section>
    </div>
  );
};

export default Appointment;
