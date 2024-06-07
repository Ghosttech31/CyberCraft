import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <h1>ACS College Of Engineering</h1>
              <h3>National Level Hackathon</h3>
              <br />
              <br />

              <img
                src="https://media.licdn.com/dms/image/C511BAQF9WIev4SmUOg/company-background_10000/0/1584114286599/acs_college_of_engineering_cover?e=2147483647&v=beta&t=y-Y4bSL59coTv9hmEXVgpyu8dD2VIzB-NQOsSntoH_w"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <p>
                Get ready to unleash your creativity, relentless passion for
                problem-solving at Cyber Craft. Problem statements are chosen in
                the fields of E-commerce, Task management, social media and
                Tourism. It's not just another hackathon, this event is designed
                to fuel your creativity and sharpen your problem-solving skills.
                Prepare to push the limits of technology and become a driving
                force over the course of 2 days where aspiring developers,
                designers, and creators converge to transform their ideas into
                reality. Save the date for this event that's sure to spark
                your innovation.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
