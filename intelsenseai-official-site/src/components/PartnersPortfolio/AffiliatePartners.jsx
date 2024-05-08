import React from "react";
import Marquee from "react-fast-marquee";

import "./PartnersPortfolio.scss";
import { AffiliatePartnersImages } from "../../utils/Data";

export const AffiliatePartners = () => {
  return (
    <>
    <section className="partners-portfolio-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <h2 className="heading">
            <strong>Our Affiliate Partners</strong>
          </h2>
          <Marquee speed={50} gradient={false}>
            {AffiliatePartnersImages?.map(({ image }, index) => {
              return (
                <div className="d-flex" key={index}>
                  <img
                    style={{ width: "400px", height: "300px",borderRadius:"30px" }}
                    src={image}
                    className="img-fluid mx-2 my-5 p-3"
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
  )
}
