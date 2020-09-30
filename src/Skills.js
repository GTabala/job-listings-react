import React from "react";

const Skills = ({ lang, role, level}) => {
  return (
    <div className="languages">
      <div className="skills">{role}</div>
      <div className="skills">{level}</div>
      {lang.map((itm) => (
        <div className="lang">{itm}</div>
      ))}
      </div>
  );
};

export default Skills;



