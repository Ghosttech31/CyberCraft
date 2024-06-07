import React from "react";
import { MdSchool } from "react-icons/md";
import { GiVikingChurch } from "react-icons/gi";
import { GiVikingShield } from "react-icons/gi";
import { GiGreatPyramid } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Event's Details
        </h1>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="8:00AM - 9:30AM"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<GiVikingChurch />}
          >
            <h3 className="vertical-timeline-element-title">ADDRESSING</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CYBERSECURIT & DATASCIENCE
              <br /> SEMINAR HALL
              <br />
              <h5>DAY 1</h5>
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="9:30AM - 4:00PM"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<GiVikingShield />}
          >
            <h3 className="vertical-timeline-element-title">HACKATHON</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CYBERSECURIT & DATASCIENCE
              <br /> LAB 6,7,8
              <br />
              <h5>DAY 1</h5>
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="9:00AM - 12:30PM"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<GiGreatPyramid />}
          >
            <h3 className="vertical-timeline-element-title">PRESENTATION</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CYBERSECURIT & DATASCIENCE
              <br /> SEMINAR HALL
              <br />
              <h5>DAY 2</h5>
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="1:30PM - 3:00PM"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">PRICE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ACS COLLEGE OF ENGINEERING
              <br /> AUDITORIUM
              <br />
              <h5>DAY 2</h5>
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
