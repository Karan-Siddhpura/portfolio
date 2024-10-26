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
          <p>
            <b> Project Name - NYCERS</b> <br /> In the NYCERS project, I worked
            as a Manual Tester, where I was responsible for creating detailed
            test cases to ensure the functionality and quality of the
            application on the Salesforce platform as well as other client
            websites. I collaborated closely with both onshore and offshore
            teams, along with developers, to understand the project requirements
            thoroughly and ensure effective testing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          position={"right"}
        >
          <h3 className="vertical-timeline-element-title">DEPT India</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer
          </h4>
          <p>
            <b>Project Name - Solaire Boutique</b> <br />I excel at
            understanding client requirements and translating them into dynamic,
            responsive web applications that prioritize both user experience and
            performance. Integrating API calls to dynamically fetch and display
            data, ensuring a seamless user experience across devices.
            <br />
            <b>Project Name - Vijay Sales</b> <br /> I worked on the Vijay Sales
            project, leading a POC for server-side rendering (SSR) with React.js
            and Adobe Commerce, optimizing reusable components to enhance
            performance and SEO. Alongside frontend tasks, I contributed as a
            backend developer, creating custom configurations, extending Adobe
            Commerce functionality, and developing REST endpoints and GraphQL
            APIs for seamless frontend-backend communication. Visiting the
            client’s site allowed me to refine the project based on real-time
            feedback, strengthening collaboration. This project gave me the
            chance to work across the full stack, applying both frontend and
            backend expertise.
          </p>
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
          position={"left"}
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
