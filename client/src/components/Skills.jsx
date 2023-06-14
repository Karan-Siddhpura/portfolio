import React, { useEffect } from "react";
import SkillsCard from "./SkillsCard";
import AOS from "aos";
import data from "./data";

function Skills() {
  useEffect(() => {
    AOS.init({
      offset: 170,
      duration: 700,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="skills" data-aos="zoom-in-up" data-aos-duration="1500">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {data.map((card) => {
          return (
            <SkillsCard
              icon={card.icon}
              name={card.name}
              precentage={card.percentage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
