import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ projects }) => {
  const param = useParams().id;

  const project = projects.find((item) => Number(item.id) === Number(param));

  return (
    <>
      <div className="pb-3">
        <header className="header-post">
          <h1 className="title title--h1">{project.title}</h1>
          <div className="header-post__image-wrap">
            <img
              className="cover lazyload"
              src={project.image}
              data-zoom=""
              alt={project.title}
            />
          </div>
        </header>
        <div className="caption-post">
          <p>{project.description}</p>
        </div>

        <footer className="footer-post">
          <a className="footer-post__share" href={project.url} target="_blank">
            <i className="font-icon icon-link" />
            <span>Live link</span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default ProjectDetail;
