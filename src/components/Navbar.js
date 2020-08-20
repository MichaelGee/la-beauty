import React from "react";
import Logo from "../assets/images/Path.png";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a className='navbar-brand' href='#'>
          <img src={Logo} alt='logo' />
          La-Beauty
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='mr-auto'></div>
          <div className='navbar-nav'>
            <a className='nav-link active' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
            <a className='nav-link' href='#'>
              About Us
            </a>
            <a className='nav-link' href='#'>
              Department
            </a>
            <a className='nav-link' href='#'>
              Contact Us
            </a>

            <button class='btn btn-outline-success nav-link' type='button'>
              Make an appointment
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
