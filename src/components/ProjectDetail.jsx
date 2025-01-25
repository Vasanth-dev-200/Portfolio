import React from "react";

const ProjectDetail = () => {
  return (
    <div className="col-12 col-md-12 col-lg-10">
      <div className="box box-content">
        {/* Post */}
        <div className="pb-3">
          <header className="header-post">
            <h1 className="title title--h1">Design Conferences in 2019</h1>
            <div className="caption-post">
              <p>
                Above all, think of life as a prototype. We can conduct
                experiments, make discoveries, and change our perspectives. We
                can look for opportunities to turn processes into projects that
                have tangible outcomes.
              </p>
            </div>
            <div className="header-post__image-wrap">
              <img
                className="cover lazyload"
                src="../assets/img/image_header.jpg"
                data-zoom=""
                alt=""
              />
            </div>
          </header>
          <div className="caption-post">
            <p>
              Above all, think of life as a prototype. We can conduct
              experiments, make discoveries, and change our perspectives. We can
              look for opportunities to turn processes into projects that have
              tangible outcomes. We can learn how to take joy in the things we
              create whether they take the form of a fleeting experience or an
              heirloom that will last for generations. We can learn that reward
              comes in creation and re-creation.
            </p>
            <p>
              It is not enough that we build products that function, that are
              understandable and usable, we also need to build products that
              bring joy and excitement, pleasure and fun, and, yes, beauty to
              people’s lives. Creativity is to discover a question that has
              never been asked.
            </p>
          </div>
          <div className="gallery-post">
            <img
              className="gallery-post__item cover lazyload"
              src="../assets/img/image_10.jpg"
              data-zoom=""
              alt=""
            />
            <img
              className="gallery-post__item cover lazyload"
              src="../assets/img/image_11.jpg"
              data-zoom=""
              alt=""
            />
            <div className="gallery-post__caption">
              Work by Colin Adams, Mark Craig
            </div>
          </div>
          <div className="caption-post">
            <h3 className="title title--h3">
              If you’re not prepared to be wrong, you’ll never come up with
              anything original.
            </h3>
            <p>
              Here is one of the few effective keys to the design problem: the
              ability of the designer to recognize as many of the constraints as
              possible his willingness and enthusiasm for working within these
              constraints. The most profound technologies are those that
              disappear. They weave themselves into the fabric of everyday life
              until they are indistinguishable from it.
            </p>
            <blockquote className="block-quote">
              <p>
                The alternative to good design is always bad design. There is no
                such thing as no design.
              </p>
              <span className="block-quote__author">Adam Judge</span>
            </blockquote>
            <p>
              Above all, think of life as a prototype. We can conduct
              experiments, make discoveries, and change our perspectives. We can
              look for opportunities to turn processes into projects that have
              tangible outcomes.
            </p>
            <p>
              We can learn how to take joy in the things we create whether they
              take the form of a fleeting experience or an heirloom that will
              last for generations. We can learn that reward comes in creation
              and re-creation, no just in the consumption of the world around
              us. Active participation in the process of creation is our right
              and our privilege. We can learn to measure the success of our
              ideas not by our bank accounts by their impact on the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
