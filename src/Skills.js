import React from "react";

const Skills = ({ lang }) => {
  return (
    <div className="languages">
      {lang.map((itm) => (
        <div className="lang">{itm}</div>
      ))}
    </div>
  );
};

export default Skills;
