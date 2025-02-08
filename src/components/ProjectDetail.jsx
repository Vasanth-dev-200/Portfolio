import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ProjectDetail = ({ projects }) => {
  const param = useParams().id;
  const [projectData, setProjectData] = useState("");

  useEffect(() => {
    const project = projects.find((item) => Number(item.id) === Number(param));
    setProjectData(project);
  }, [param]);

  return (
    <>
      {!projectData || projectData.length == 0 ? (
        <Loader />
      ) : (
        <div className="pb-3">
          <header className="header-post">
            <h1 className="title title--h1">{projectData.title}</h1>
            <div className="header-post__image-wrap">
              <img
                className="cover lazyload"
                src={
                  `.${projectData.image}` ||
                  "../assets/images/default-fallback-image.png"
                }
                alt={projectData.title}
              />
            </div>
          </header>
          <div className="caption-post">
            <p>{projectData.description}</p>
          </div>

          <footer className="footer-post">
            <a
              className="footer-post__share"
              href={projectData.url}
              target="_blank"
            >
              <i className="font-icon icon-link" />
              <span>Live link</span>
            </a>
          </footer>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
