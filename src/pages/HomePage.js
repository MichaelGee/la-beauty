import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import Service from "../components/Service";
import BookingInfo from "../components/BookingInfo";
import Appointment from "../components/Appointment";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Organizations />
      <Service />
      <BookingInfo />
      <Appointment />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
