import React from "react";
import imgHero from "../assets/heroBanner.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const HeroSection = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    console.log("useEffect is running"); // Debug log
    console.log("el.current:", el.current); // Debug log

    if (el.current) {
      const options = {
        strings: ["Fardian Zahri Chaniago"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

      typed.current = new Typed(el.current, options);
      console.log("Typed.js initialized"); // Debug log
    } else {
      console.log("el.current is null"); // Debug log
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,
    });

    return () => {
      if (typed.current) {
        typed.current.destroy();
        console.log("Typed.js destroyed"); // Debug log
      }
    };
  }, []);

  return (
    <section className="container hero" id="aboutme">
      <div className="row align-items-center py-5 mt-5 col-reverse">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6">
          <div className="">
            <p className="hero-intro-text mb-0">Hello i'm</p>
            <h1 className="display-4 hero-name-text">
              <span ref={el}>Fardian Zahri Chaniago</span>
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
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
