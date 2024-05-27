import React from "react";
import imgHero from "../assets/heroBanner.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // typed js config
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fardian Zahri Chaniago."],
      typeSpeed: 77,
      loop:true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container hero" id="aboutme">
      <div className="row align-items-center py-5 mt-5 col-reverse">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6">
          <div className="" data-aos="fade-right">
            <p className="hero-intro-text mb-0">Hello i'm</p>
            <h1 className="display-4 hero-name-text">
              <span ref={el}>Fardian Zahri Chaniago </span>{" "}
            </h1>
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
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={imgHero}
            width={300}
            alt="HeroImage"
            className="heroImg"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
