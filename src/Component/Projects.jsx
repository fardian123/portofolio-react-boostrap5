import React from 'react';
import pj1 from "../assets/lp.jpg"


function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem sit amet nisi ultricies fermentum.",
      imageUrl: {pj1},
      link: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem sit amet nisi ultricies fermentum.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem sit amet nisi ultricies fermentum.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#"
    },
    {
      id: 4,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem sit amet nisi ultricies fermentum.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#"
    }
  ];

  return (
    <section className="portfolio-section py-5 mt-5" id="portfolio">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={pj1} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">View Project</a>
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
