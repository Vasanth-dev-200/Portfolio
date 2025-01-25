import React from "react";

const About = () => {
  return (
    <div id="about-tab" className="tabcontent active">
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          About Me
        </h1>
        <p>
          Motivated React Developer with 6 months of hands-on experience in
          building dynamic and responsive web applications. Proficient in HTML,
          CSS, JavaScript, and React.js, with a strong foundation in version
          control using Git, as well as experience with jQuery and Bootstrap.
          Successfully completed the Roriri 5050 Project, an events management
          website with both user and admin functionality.
        </p>
        <p>
          Passionate about continuous learning and currently enhancing skills in
          React to stay up-to-date with modern development practices. Seeking to
          contribute to innovative projects that prioritize user experience,
          performance, and scalability, while growing as part of a collaborative
          development team.
        </p>
      </div>
      {/* What */}
      <div className="mt-1">
        <h2 className="title title--h3">What I'm Doing</h2>
        <div className="row">
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="../assets/icons/dark/icon-design.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Web Design</h3>
                <p className="case-item__caption">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="../assets/icons/dark/icon-dev.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Web Development</h3>
                <p className="case-item__caption">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="../assets/icons/dark/icon-app.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Mobile Responsive</h3>
                <p className="case-item__caption">
                  Build websites that adapt to all devices for a seamless user
                  experience on any screen.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="../assets/icons/dark/icon-education.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Continuous Learning</h3>
                <p className="case-item__caption">
                  Always updating skills with the latest technologies and
                  trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
