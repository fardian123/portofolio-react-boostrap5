import React from "react";

import laravel from "../assets/devpack/laravel.svg";
import react from "../assets/devpack/react.svg";

import html from "../assets/devpack/html.svg";
import css from "../assets/devpack/css.svg";
import js from "../assets/devpack/js.svg";

import pnpm from "../assets/devpack/pnpm.svg";
import npm from "../assets/devpack/npm.svg";

import bootstrap from "../assets/devpack/bootstrap.svg";
import tailwind from "../assets/devpack/tailwind.svg";

const Education = () => {
  return (
    <section className="container" id="education">
      <h1>Skills & Education</h1>

      <div className="row d-flex flex-wrap flex-column flex-md-row justify-content-between gap-3">
        <div className="col-12 col-md-5">
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
                  <h4 className="education-title">Universitas Pamulang</h4>
                  <p>Teknik Informatika</p>
                  <h4 className="education-years">2022 - Sekarang</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="card d-flex gap-1">
            <div className="card-header">
              <h3> Hard Skills</h3>
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
              <div>
                <h5>Programming Languages</h5>
                <div className="d-flex mt-2 gap-2">
                  <img src={html} alt="" width={40} />
                  <img src={css} alt="" width={40} />
                  <img src={js} alt="" width={40} />
                </div>
                <div className="d-flex mt-2 gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    width={40}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                    width={40}
                  />
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
