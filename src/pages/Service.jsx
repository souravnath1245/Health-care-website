import React from "react";
import Services from "../components/Services/Services";
import useSevices from "../useServices";
import "./Page.css";

const Service = () => {
  const { services } = useSevices();

  return (
    <div id="service" className="section container my-4">
      <div className="content my-4">
        <h1 className="text-center text-uppercase fw-bolder text-danger">
          Service
        </h1>
      </div>
      <div className="serviceSection">
        {services.slice(0, 6).map((service) => (
          <Services key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
