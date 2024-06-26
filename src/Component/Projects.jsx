import React from "react";
import project1 from "../assets/project1matrixcalc.png";
import project2 from "../assets/project2portofolio.png";
import project3 from "../assets/projeck3bookshelfapp.png";
import project4 from "../assets/project4isclandingpage.png"

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Portofolio Website",
      description:
        "A professional portfolio website showcasing projects I have completed and personal information, including social media profiles.",
      imageUrl: project2,
      link: "https://fardian-zahri.vercel.app/",
      animation: "fade-right",
    },
    {
      id: 2,
      title: "Matrix Calculator Dekstop App",
      description:
        "A desktop-based application capable of calculating a matrix with a specified order. created as a final project for the 'Discrete Mathematics' course.",
      imageUrl: project1,
      link: "https://github.com/fardian123/dekstop-app-matrix-calculator",
      animation: "fade-right",
    },
    {
      id: 3,
      title: "Bookshelf App",
      description:
        "A website designed for managing a collection of books utilizing local web storage, created for submission in the Dicoding course 'Belajar Fundamental Front-End Web Development'.",
      imageUrl: project3,
      link: "https://projek-akhir-dicoding-bookshelf-app.vercel.app/",
      animation: "fade-left",
    },
    {
      id: 4,
      title: "Expedition Company Profile",
      description:
        "A company profile website with an expedition theme, created by five individuals using Bootstrap, which was used for submission to the Informatic Study Club at Universitas Pamulang.",
      imageUrl: project4,
      link: "https://11express.netlify.app/",
      animation: "fade-right",
    },
  ];

  return (
    <section className="portfolio-section py-5 mt-5" id="portfolio">
      <div className="container">
        <h2 className="text-start mb-4 pj-main-title">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-md-4 mb-4"
              data-aos={project.animation}
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className="card min-height-card">
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn pj-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
