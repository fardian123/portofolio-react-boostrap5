import React from "react";

import laravel from "../assets/devpack/laravel.svg";
import react from "../assets/devpack/react.svg";

import pnpm from "../assets/devpack/pnpm.svg";
import npm from "../assets/devpack/npm.svg";

import git from "../assets/devpack/git.svg";
import github from "../assets/devpack/github.svg";

import bootstrap from "../assets/devpack/bootstrap.svg";
import tailwind from "../assets/devpack/tailwind.svg";

const Education = () => {
  return (
    <section className="container" id="education">
      <h1>Skills & Education</h1>

      <div className="row d-flex flex-wrap flex-column flex-md-row justify-content-between gap-3">
        <div
          className="col-12 col-md-5 "
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <div className="card mt-2">
            <div className="card-header">
              <h3 className="pre-title">Learning Path</h3>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info">
                  <h4 className="education-title">Universitas Pamulang</h4>
                  <p>Teknik Informatika</p>
                  <h4 className="education-years">2022 - Sekarang</h4>
                </div>
              </div>
              <div className="d-flex">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info py-4">
                  <h4 className="education-title">SMK Nusantara 01 Ciputat</h4>
                  <p>Rekayasa Perangkat Lunak</p>
                  <h4 className="education-years">2019 - 2022</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-5"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <div className="card d-flex gap-1">
            <div className="card-header">
              <h3> Skills</h3>
            </div>
            <div className="card-body d-flex">
              <div>
                <h5>Frameworks</h5>
                <div className="d-flex gap-3">
                  <img src={laravel} alt="" width={40} className="item" />
                  <img src={react} alt="" width={40} className="item" />
                </div>
                <h5 className="mt-3">UI Frameworks</h5>
                <div className="d-flex gap-3">
                  <img src={tailwind} alt="" width={40} className="item" />
                  <img src={bootstrap} alt="" width={40} className="item" />
                </div>
                <h5 className="mt-3">Package Manager</h5>
                <div className="d-flex gap-3">
                  <img src={pnpm} alt="" width={40} className="item" />
                  <img src={npm} alt="" width={40} className="item" />
                </div>
              </div>
              <div className="px-3">
                <h5 className="text-wrap">Versions Control System</h5>
                <div className="d-flex gap-2">
                  <img src={git} alt="" width={40} />
                  <img src={github} alt="" width={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
