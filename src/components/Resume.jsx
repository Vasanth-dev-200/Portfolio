import React from "react";

const Resume = () => {
  return (
    <div id="resume-tab" className="tabcontent">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Resume</h1>
      </div>
      {/* Experience */}
      <div className="row">
        <div className="col-12">
          <h2 className="title title--h3">
            <img
              className="title-icon"
              src="./assets/icons/dark/icon-education.svg"
              alt=""
            />
            Education
          </h2>
          <div className="timeline">
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                DMI Engineering College (BE)
              </h5>
              <span className="timeline__period">2019 — 2023</span>
              <p className="timeline__description">
                Completed BE in Computer Science and Engineering from DMI
                Engineering College (2019-2023) with a CGPA of 7.34, gaining
                strong skills in programming and web development.
              </p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Walker Hr. Sec. School, Dohnavur (HSC)
              </h5>
              <span className="timeline__period">2018 — 2019</span>
              <p className="timeline__description">
                Completed Higher Secondary Certificate (HSC) at Walker Hr. Sec.
                School, Dohnavur (2018-2019) with 55% score.
              </p>
            </article>
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Walker Hr. Sec. School, Dohnavur (SSLC)
              </h5>
              <span className="timeline__period">2016 — 2017</span>
              <p className="timeline__description">
                Completed Secondary School Leaving Certificate (SSLC) at Walker
                Hr. Sec. School, Dohnavur (2016-2017) with an 82.2% score.
              </p>
            </article>
          </div>
        </div>
        <div className="col-12">
          <h2 className="title title--h3">
            <img
              className="title-icon"
              src="./assets/icons/dark/icon-experience.svg"
              alt=""
            />
            Experience
          </h2>
          <div className="timeline">
            {/* Item */}
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                React Developer
              </h5>
              <span className="timeline__period">2024 — Present</span>
              <p className="timeline__description">
                As a React Developer at Roriri Software Solutions, I build and
                optimize responsive web applications using React.js. I focus on
                delivering seamless user experiences through efficient code and
                API integration.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="row">
        <div className="col-12">
          <h2 className="title title--h3">My Skills</h2>
          <div className="box box__border">
            {/* Progress */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "80%", zIndex: "2" }}
              >
                <div className="progress-text">
                  <span>React</span>
                  <span>80%</span>
                </div>
              </div>
              <div className="progress-text">
                <span>React</span>
              </div>
            </div>
            {/* Progress */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "75%", zIndex: "2" }}
              >
                <div className="progress-text">
                  <span>Java Script</span>
                  <span>75%</span>
                </div>
              </div>
              <div className="progress-text">
                <span>Java Script</span>
              </div>
            </div>
            {/* Progress */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "50%", zIndex: "2" }}
              >
                <div className="progress-text">
                  <span>Node</span>
                  <span>50%</span>
                </div>
              </div>
              <div className="progress-text">
                <span>Node</span>
              </div>
            </div>
            {/* Progress */}
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "40%", zIndex: "2" }}
              >
                <div className="progress-text">
                  <span>Version Control</span>
                  <span>40%</span>
                </div>
              </div>
              <div className="progress-text">
                <span>Version Control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
