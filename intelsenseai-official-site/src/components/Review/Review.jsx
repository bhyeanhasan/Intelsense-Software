import React from "react";
import Marquee from "react-fast-marquee";
import { reviewData } from "../../utils/Data";
import "./Review.scss";

const Review = () => {
  return (
    <section className="review-wrapper background-E2F0F6 py-5 overflow-hidden">
      <div className="py-sm-5">
        <div className="row">
          <div>
            <h2 className="heading text-center mb-4">
              <strong>What our</strong> Partners Say
            </h2>
            <h3 className="sub-heading text-center mb-sm-5">
              The Next Generation Language Processing & Voice AI Solutions
            </h3>
          </div>
          <Marquee speed={45} gradient={false} pauseOnHover={true}>
            {reviewData?.map(
              ({ name, image, description, designation }, index) => {
                return (
                  <div
                    key={index}
                    className="all-card col-12 col-md-4 mt-5 mx-4"
                  >
                    <div className="cards background-white p-3">
                      <div className="mt-4 d-flex flex-column flex-sm-row gap-4">
                        <img
                          src={image}
                          className="img-fluid logo mx-auto mx-sm-0"
                          alt="product_logo"
                        />
                        <div>
                          <p className="name mb-1 text-center text-sm-start">
                            {name}
                          </p>
                          <p className="designation text-center text-sm-start">
                            {designation}
                          </p>
                          <p className="description pb-4 text-center text-sm-start">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </Marquee>
          {/* <Marquee speed={30} gradient={false} pauseOnHover={true}>
            {reviewData?.map(
              ({ name, image, description, designation }, index) => {
                return (
                  <div
                    key={index}
                    className="all-card col-12 col-md-4 mt-5 mx-4"
                  >
                    <div className="cards background-white p-3">
                      <div className="mt-4 d-flex flex-column flex-sm-row gap-4">
                        <img
                          src={image}
                          className="img-fluid logo mx-auto mx-sm-0"
                          alt="product_logo"
                        />
                        <div>
                          <p className="name mb-1 text-center text-sm-start">
                            {name}
                          </p>
                          <p className="designation text-center text-sm-start">
                            {designation}
                          </p>
                          <p className="description pb-4 text-center text-sm-start">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </Marquee> */}
        </div>
      </div>
    </section>
  );
};

export default Review;
