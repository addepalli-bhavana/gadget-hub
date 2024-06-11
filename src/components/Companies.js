import React from "react";
import { companyLogos } from "../utils/constants";

const Companies = () => {
  return (
    <section className="section section-center companies">
      <h3>trusted By 1000+ companies</h3>
      <p>Elevate your tech experience with gadgets trusted by over 1000 companies.</p>
      <div className="companies-list">
        <div className="companies-list-slide">
          {companyLogos.map((company) => {
            return (
              <img src={company.source} key={company.id} alt="company logo" />
            );
          })}
        </div>
        <div className="companies-list-slide">
          {companyLogos.map((company) => {
            return (
              <img src={company.source} key={company.id} alt="company logo" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
