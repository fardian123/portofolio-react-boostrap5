import React from "react";
import imgHero from "../assets/heroBanner.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  // Inisialisasi AOS

  useEffect(() => {
    Aos.init({});
  });

  return (
    <section className="container hero" id="aboutme">
      <div className="row align-items-center py-5 mt-5 col-reverse">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6">
          <div className="">
            <p className="hero-intro-text mb-0">Hello i'm</p>
            <h1 className="display-4 hero-name-text">Fardian Zahri Chaniago</h1>
            <p className="lead">
              I am a passionate web developer with experience in React, Laravel,
              Bootstrap, and TailwindCSS.
            </p>
            <button className="btn btn-dark btn-lg btn-rounded cta-btn">
              curriculum vitae
            </button>
          </div>
        </div>
        {/* Bagian Kanan - Gambar */}
        <div
          className="col-md-6 d-flex justify-content-center"
          
        >
          <img src={imgHero} width={300} alt="HeroImage" className="heroImg" data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
