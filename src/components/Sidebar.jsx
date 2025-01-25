import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <aside className="col-12 col-md-12 col-lg-2">
      <div className="sidebar box sticky-column">
        <ul className="nav js-tabs">
          <li className="nav__item">
            <Link to="/" className={`${location === "/" && "active"}`}>
              <i className="icon-user" />
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/resume"
              className={`${location === "/resume" && "active"}`}
            >
              <i className="icon-file-text" />
              Resume
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/projects"
              className={`${
                location === "/projects" || location.startsWith("/project/")
                  ? "active"
                  : ""
              }`}
            >
              <i className="icon-codesandbox" />
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className={`${location === "/contact" && "active"}`}
            >
              <i className="icon-book" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
