import React, { useEffect } from "react";
import Card from "./Card";
import list from "./list";
import AOS from "aos";
function Projects() {
  useEffect(() => {
    AOS.init({
      offset: 170,
      duration: 700,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="projects" data-aos="zoom-in-right" data-aos-duration="1500">
      <h2 className="project-title">Projects</h2>
      <div className="project-list">
        {list.map((item) => {
          return (
            <Card
              image={item.image}
              title={item.title}
              content={item.content}
              link={item.link}
              github={item.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
