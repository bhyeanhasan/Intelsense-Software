import React from "react";
import Marquee from "react-fast-marquee";
import { partnersImage } from "../../utils/Data";
import "./PartnersPortfolio.scss";

const PartnersPortfolio = () => {
  return (
    <>
      <section className="partners-portfolio-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <h2 className="heading">
              <strong>Partners</strong> in our Portfolio
            </h2>
            <Marquee speed={50} gradient={false}>
              {partnersImage?.map(({ image, width, height }, index) => {
                return (
                  <div className="d-flex" key={index}>
                    <img
                      style={{ width: `${width}`, height: `${height}` }}
                      src={image}
                      className="img-fluid mx-5 my-5 p-3"
                      alt="partners_image"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPortfolio;
