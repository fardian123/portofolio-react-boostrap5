import React from "react";
import imgHero from "../assets/ProfileHero1.png";

const HeroSection = () => {
  return (
    <div className="container hero">
      <div className="row align-items-center py-5 mt-5">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6">
          <div className="">
            <p className="hero-intro-text mb-0">Hello i'm</p>
            <h1 className="display-4 hero-name-text">Fardian Zahri Chaniago</h1>
            <p className="lead">
              Situs kami menyediakan solusi terbaik untuk kebutuhan Anda.
              Temukan berbagai informasi menarik dan bermanfaat di sini.
            </p>
            <button className="btn btn-primary btn-lg">Mulai Sekarang</button>
          </div>
        </div>
        {/* Bagian Kanan - Gambar */}
        <div className="col-md-6 d-flex justify-content-center">
          <img src={imgHero} width={300} alt="Hero Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
