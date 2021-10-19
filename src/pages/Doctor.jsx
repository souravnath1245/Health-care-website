import React from "react";
import useSevices from "../useServices";
import Doctors from "./Doctors";
import "./Page.css";

const Doctor = () => {
  const { doctors } = useSevices();

  return (
    <div className="sectionDoctor container">
      <div className="headerContent my-4">
        <h1 className="text-center text-danger fw-bolder">Meet Our Qualified Doctors</h1>
      </div>
      <div className="doctorSection ">
        {doctors.map((doctor) => (
          <Doctors key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
