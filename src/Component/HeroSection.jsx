import React from "react";
import imgHero from "../assets/heroBanner.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="container hero" id="aboutme">
      <div className="row align-items-center py-5 mt-5 col-reverse">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6">
          <div className="">
            <p className="hero-intro-text mb-0">Hello i'm</p>
            <div className="display-4 hero-name-text">
              Fardian Zahri Chaniago
            </div>
            <div className="lead d-flex fs-3">
              <p className="px-1">i was  </p>
              <Typewriter
                options={{
                  strings: ["student", "Front-End Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <button className="btn btn-dark btn-lg btn-rounded cta-btn hero-btn">
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
