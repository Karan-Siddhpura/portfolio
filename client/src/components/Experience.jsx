import React, { useEffect } from "react";
import AOS from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  useEffect(() => {
    AOS.init({
      offset: 170,
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="experience"
      className="exp"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="exp-heading">
        <h2>Education</h2>
        <h2>Experience</h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          position={"right"}
        >
          <h3 className="vertical-timeline-element-title">Accenture India</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quality Engineer
          </h4>
          <p>6 months of work experience.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          position={"left"}
        >
          <h3 className="vertical-timeline-element-title">
            BSc - Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Usha Pravin Gandhi College
          </h4>
          <p>9.85CGPI</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
        >
          <h3 className="vertical-timeline-element-title">
            Jr College Sardhar Vallabhbhai Patel College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Commerce</h4>
          <p>12th percentage - 75.08%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          position={"left"}
        >
          <h3 className="vertical-timeline-element-title">
            Poorna Prajna High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">School</h4>
          <p>10th percentage - 74.80</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
