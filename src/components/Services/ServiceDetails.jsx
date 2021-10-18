import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId,title,details,img } = useParams();
  return (
    <div className='sectionDetails p-4 my-4'>
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="content">
            <h3>{title}</h3>
            <p>{details}</p>

        </div>
      <h1> This is number : {serviceId} </h1>
      
    </div>
  );
};

export default ServiceDetails;
