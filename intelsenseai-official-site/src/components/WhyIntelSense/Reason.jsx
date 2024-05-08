import React from "react";

const Reason = ({ info }) => {
  const { icon, reason, description } = info || {};
  return (
    <>
      <div className="col-12 col-md-3 mx-lg-3 d-flex d-md-block flex-column align-items-center justify-content-center">
        <p className="fs-1">{icon}</p>
        <h3 className="py-md-3">{reason}</h3>
        <p className="w-75 text-center text-md-start">{description}</p>
      </div>
    </>
  );
};

export default Reason;
