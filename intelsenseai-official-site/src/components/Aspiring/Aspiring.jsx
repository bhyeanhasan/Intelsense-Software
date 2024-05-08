import React from "react";
import Image from "../../Assets/images/HOME/banner.jpg";
import "./Aspiring.scss";

const Aspiring = () => {
  return (
    <>
      <section className="aspiring-wrapper position-relative background-E2F0F6">
        <img src={Image} className="img-fluid" alt="aspiringLeaders" />
        <div className="info position-absolute px-sm-5">
          <div className="px-md-5">
            <h2 className="heading white px-sm-5">
              Code With Purpose, Impact With Precision.
            </h2>
            <h3 className="sub-heading white px-sm-5">
              “From ideation to execution, we craft innovative applications to meet your unique business needs and drive growth.”.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aspiring;
