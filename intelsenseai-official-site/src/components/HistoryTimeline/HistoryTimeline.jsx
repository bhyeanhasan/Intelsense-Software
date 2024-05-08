import React from "react";
import { historyTimelineData } from "../../utils/HistoryTimelineData";
import CarouselIndicatorButton from "./CarouselIndicatorButton";
import CarouselInnerItem from "./CarouselInnerItem";

const HistoryTimeline = () => {
    const indicatorButtons = historyTimelineData.map((obj,idx)=> <CarouselIndicatorButton key={idx} idx={idx} buttonText={obj.year}/>);
    const innerItems = historyTimelineData.map((obj, idx)=> <CarouselInnerItem key={idx} idx={idx} itemInfo={obj}/>)
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-transparent text-white"
        data-bs-interval="false"
        data-bs-wrap="false"
      >
        <div className="carousel-indicators bg-transparent justify-content-start carousel-indicators-custom">
            {indicatorButtons}
        </div>
        <div className="carousel-inner py-5">
            {innerItems}
        </div>
      </div>
    </>
  );
};

export default HistoryTimeline;
