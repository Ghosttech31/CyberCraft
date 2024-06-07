import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          CHEIF GUEST
        </h1>
        <hr />
        <p className="pb-3 text-center">Great minds</p>
        {/* card design */}
        <div className="dude-1" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <br />
                    <h6 className="text-uppercase">GUEST - 1</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <br />
                    <h6 className="text-uppercase">GUEST - 2</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <br />
                    <h6 className="text-uppercase">GUEST - 3</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Projects;
