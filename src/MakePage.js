import React from "react";
import Skills from "./Skills";

const MakePage = ({ Offers }) => {
  return (
    <div className="container">
      {Offers.map((job) => {
        return (
          //  >
          <div className="offer">
            <div className="compLogo">
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="mainInfo">
              <div className="companyInfo">
                <div className="company">{job.company}</div>
                {job.new ? <div className="new">NEW!</div> : ""}
                {job.featured ? <div className="featured">FEATURED</div> : ""}
              </div>
              <div className="position">{job.position}</div>
              <div className="contractInfo">
                {job.postedAt} {job.contract} {job.location}
              </div>
            </div>
            <Skills lang={job.languages} role={job.role} level={job.level} />
          </div>
        );
      })}
    </div>
  );
};

export default MakePage;
