import React from "react";

function SkillsCard({ icon, name, precentage }) {
  return (
    <div className="skills-card">
      <div>
        <img className="icon" src={icon} />
      </div>
      <div className="skills-name">{name}</div>
      <div className="skills-percentage">Proficiency : {precentage}</div>
    </div>
  );
}

export default SkillsCard;
