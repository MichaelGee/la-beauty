import React from "react";
import pin from "../assets/images/pin.svg";
import headphone from "../assets/images/headphone.svg";
import clock from "../assets/images/clock.svg";
import facebook from "../assets/images/facebook.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";
import Logo from "../assets/images/Path.png";

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <div className='container footer__container'>
          <div className='first__section'>
            <div className='first_left_part'>
              <div className='contact__details'>
                <p>
                  <span>
                    <img src={pin} alt='pin' />
                  </span>
                  59 Street, 1200 Techpark
                </p>
                <p>
                  <span>
                    <img src={headphone} alt='headphone' />
                  </span>
                  +0123456789
                </p>
                <p>
                  <span>
                    <img src={clock} alt='clock' />
                  </span>
                  8:00 am - 17:00 pm, Monday - Friday
                </p>
              </div>
              {/* SOCIAL ICONS */}
              <div className='social__icons'>
                <img className='social__logo' src={facebook} alt='facebook' />
                <img className='social__logo' src={insta} alt='instagram' />
                <img className='social__logo' src={linkedin} alt='linkedin' />
              </div>
            </div>
            {/* FIRST SECTION RIGHT PART */}
            <div className='first_right_part'>
              <div className='first__column'>
                <ul>
                  <li className='list_title'>
                    <h5>Quick Link</h5>
                  </li>
                  <li>Who we are</li>
                  <li>Our mission</li>
                  <li>Awards</li>
                  <li>Experience</li>
                </ul>
              </div>
              <div className='second__column'>
                <ul>
                  <li className='list_title'>
                    <h5>Departments</h5>
                  </li>
                  <li>Who we are</li>
                  <li>Our mission</li>
                  <li>Awards</li>
                  <li>Experience</li>
                </ul>
              </div>
              <div className='third__column'>
                <ul>
                  <li className='list_title'>
                    <h5>Others</h5>
                  </li>
                  <li>Who we are</li>
                  <li>Our mission</li>
                  <li>Awards</li>
                  <li>Experience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='second__section'>
            <div className='second_left_part'>
              <img src={Logo} alt='logo' className='footer_logo' />
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor incididunt
                <br /> ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='second_right_part'>
              <p>Stay up to date on the latest Le-Beauty news.</p>
              {/* EMAIL FORM */}
              <form class='email_form'>
                <input type='text' placeholder='Your Email' name='search' />
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className='footer-end'>
        <p>&copy; Copyright Le-Beauty 2019. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
