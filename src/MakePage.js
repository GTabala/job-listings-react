import React from "react";
import Skills from "./Skills";

const MakePage = ({ Offers }) => {
  return (
    <div className="container">
      <div className="filter">clear</div>
      {Offers.map((job) => {
        return (
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
                <ul className="noDot">
                  <li>{job.postedAt}</li>
                </ul>{" "}
                <ul>
                  <li className="dotted">{job.contract}</li>
                </ul>
                <ul>
                  <li className="dotted">{job.location}</li>
                </ul>
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
