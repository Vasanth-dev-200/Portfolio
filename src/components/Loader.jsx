import React from "react";

const Loader = () => {
  return (
    <div className="preloader">
      <div className="preloader__wrap">
        <div className="circle-pulse">
          <div className="circle-pulse__1" />
          <div className="circle-pulse__2" />
        </div>
        <div className="preloader__progress">
          <span />
        </div>
      </div>
    </div>
  );
};

export default Loader;
