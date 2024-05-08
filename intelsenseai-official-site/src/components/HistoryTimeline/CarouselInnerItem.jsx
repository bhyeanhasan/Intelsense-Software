import React from "react";

const CarouselInnerItem = ({ idx, itemInfo }) => {
  const { subTitle, title, image, description } = itemInfo || {};
  const activeClass = idx ? "" : "active";
  return (
    <div className={`carousel-item my-3 ${activeClass}`}>
      <div className="row">
        <div className="col-12 col-md-6 p-md-5">
        {/* <div className="col-12 p-md-5"> */}
          <p className="fs-6">{subTitle}</p>
          <p className="fs-3 fs-md-3 fs-lg-2  fw-bold mt-md-4">{title}</p>
          <p className="mt-md-5 fs-5 fw-lighter">{description}</p>
        </div>
        <div className="col-12 col-md-6 p-md-5 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid"
            src={image}
            // className="d-block w-100"
            alt={subTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselInnerItem;
