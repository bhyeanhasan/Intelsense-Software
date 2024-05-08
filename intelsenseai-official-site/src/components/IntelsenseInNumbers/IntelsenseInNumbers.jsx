import React from "react";
import Image from "../../Assets/images/HOME/IAI-in-numbers/numbers.svg";
import "./IntelsenseInNumbers.scss";

const IntelsenseInNumbers = () => {
  return (
    <>
      <section className="intelsenseai-in-numbers-wrapper base-background py-5">
        <div className="main">
          <div className="container-lg">
            <div className="row">
              <h2 className="heading fw-bold white">
                INTELSENSE AI IN NUMBERS
              </h2>
              <div className="col-12 my-5">
                <img
                  src={Image}
                  className="img-fluid"
                  alt="intelsenseai_in_numbers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntelsenseInNumbers;
