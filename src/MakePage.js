import React from "react";
import Skills from "./Skills";

const MakePage = ({ Offers }) => {
  return (
    <div>
      {Offers.map((job) => {
        return (
          <div className="offer">
            <div className="compLogo"></div>
            <div className="mainInfo">
              <div className="companyInfo">
                <div className="company">{job.company}</div>
                {job.new ? <div className="new">NEW!</div> : ""}
                {job.featured ? <div className="featured">featured</div> : ""}
              </div>
              <div className="position">{job.position}</div>
            </div>
            <Skills lang={job.languages} />
          </div>
        );
      })}
    </div>
  );
};

export default MakePage;
