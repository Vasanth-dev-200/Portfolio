import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <div id="blog-tab" className="tabcontent">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">
          Projects
        </h1>
      </div>
      <div className="news-grid">
        {projects.map((item) => {
          return (
            <article key={item.id} className="news-item box">
              <div className="news-item__image-wrap overlay overlay--45">
                <Link className="news-item__link" to={`/project/${item.id}`} />
                <img
                  className="cover lazyload"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="news-item__caption">
                <h2 className="title title--h4">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
