import React from "react";

const CarouselIndicatorButton = ({ idx, buttonText }) => {
  const active = idx ? null : "active";
  const ariaCurrent = idx ? "" : "true";
  return (
    <div>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={idx}
        className={`px-2 bg-transparent fs-5 fw-bold ${active}`}
        aria-current={ariaCurrent}
        aria-label={`Slide ${idx+1}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CarouselIndicatorButton;
