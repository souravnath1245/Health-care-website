import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

const Services = (props) => {
  const { title,details, img } = props.service;
  return (
    <div className="servicesCard mx-auto p-3 text-center">
      <div className="image mx-auto">
      <img src={img} alt="" srcset="" />
      </div>
      <h3 className="text-center text-danger">{title}</h3>
      <p className='text-center p-1'>{details}</p>
      <Link to={`/service/${title}/${details}`}>
      <button className="btn btn-warning justify-content-center fw-bold">More About {title}</button>
        </Link>
    </div>
  );
};

export default Services;
