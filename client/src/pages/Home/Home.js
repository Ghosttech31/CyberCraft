import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <div className=" home-container" id="home"></div>
      <div className=" home-content">
        <h2>Cyber Craft</h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "Web Devlopment!",
                "E-Commerce with Full-Stack!",
                "Mobile Application!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <Fade bottom>
          <div className="home-buttons">
            <button className="btn btn-hire">REGISTRATION</button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
