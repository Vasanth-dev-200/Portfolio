import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  const [imageUrl, setImageUrl] = useState("./assets/img/main-photo.svg");

  useEffect(() => {
    const isProjectPage = location.includes("/project/");

    const img = isProjectPage
      ? "../assets/img/main-photo.svg"
      : "./assets/img/main-photo.svg";

    setImageUrl(img);
  }, [location]);

  return (
    <header className="header box">
      <div className="header__left">
        <div className="header__photo">
          <img
            className="header__photo-img"
            src={imageUrl}
            alt="Ronald Robertson"
          />
        </div>
        <div className="header__base-info">
          <h4 className="title titl--h4">Praveen Vasanthan</h4>
          <div className="status">React developer</div>
          <ul className="header__social">
            <li>
              <a
                href="https://www.linkedin.com/in/praveen-vasanthan-55a2a9260/"
                target="_blank"
              >
                <i className="font-icon icon-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/praveenVasanthan" target="_blank">
                <i className="font-icon icon-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__contact">
          <li>
            <span className="overhead">Email</span>vasanth.dev.200@gmail.com
          </li>
          <li>
            <span className="overhead">Phone</span>+91 9600782912
          </li>
        </ul>
        <ul className="header__contact">
          <li>
            <span className="overhead">Birthday</span>15 September, 2002
          </li>
          <li>
            <span className="overhead">Location</span>Dohnavur, Tirunelveli
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
