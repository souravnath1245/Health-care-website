import React from "react";

const Doctors = (props) => {
  const { name, img, specialist, age } = props.doctor;
  return (
    <div className="doctors my-4 py-4">
      <div className="doctorsPortfolio ">
        <div className="image mx-auto">
          <img src={img} alt="" />
        </div>
        <div className="content text-center p-3 text-danger">
          <h2 className="text-uppercase">{name}</h2>
          <strong>{specialist}</strong>
          <p>{age}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
