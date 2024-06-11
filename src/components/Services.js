import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="section-center services-center section">
        <h3>exceptional service offerings</h3>
        <p>
          Experience unparalleled convenience with our service package. Enjoy
          fast shipping, 24/7 support, and worry-free repairs for two years.
        </p>
        <div className="services-list">
          {services.map((service) => {
            const { id, icon, title, description } = service;
            return (
              <article className="service" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
