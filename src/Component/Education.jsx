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
    <section className="container">
      <h1>Skills & Education</h1>

      <div className="row d-flex justify-content-between gap-3">
        <div className="col-md-5 ">
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
                  <h4 className="education-title ">Universitas Pamulang</h4>
                  <p>Teknik Informatika</p>
                  <h4 className="education-years">2022 - Sekarang</h4>
                </div>
              </div>

              <div className="d-flex ">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info py-4">
                  <h4 className="education-title ">Universitas Pamulang</h4>
                  <p>Teknik Informatika</p>
                  <h4 className="education-years">2022 - Sekarang</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-header ">
              <h3>Skills</h3>
            </div>
            <div className="card-body d-flex">
              <div>
                <h5>Frameworks</h5>
                <div className="d-flex gap-3">
                  <img src={laravel} alt="" width={50} />
                  <img src={react} alt="" width={50} />
                </div>

                <h5 className="mt-3">UI Frameworks</h5>
                <div className="d-flex gap-3">
                  <img src={tailwind} alt="" width={50} />
                  <img src={bootstrap} alt="" width={50} />
                </div>

                <h5 className="mt-3">Package Manager</h5>
                <div className="d-flex gap-3">
                  <img src={pnpm} alt="" width={50} />
                  <img src={npm} alt="" width={50} />
                </div>
              </div>

              <div className="px-5">
                <h5>Programming Languages</h5>
                <div className="d-flex gap-3">
                  <img src={html} alt="" width={50} />
                  <img src={css} alt="" width={50} />
                  <img src={js} alt="" width={50} />
                </div>
                <div className="d-flex gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    width={50}
                  />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" width={50}/>
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
