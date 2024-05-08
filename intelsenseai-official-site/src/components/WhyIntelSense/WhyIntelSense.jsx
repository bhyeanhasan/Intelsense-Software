import React from "react";

import { whyIntelSenseData } from "../../utils/HomePageData";
import "./WhyIntelSense.scss";
import Reason from "./Reason";


const WhyIntelSense = () => {
  const content = whyIntelSenseData.map((info, idx) => (
    <Reason key={idx} info={info} />
  ));

  return (
    <>
      <section className="why-intelsense py-5 text-dark background-E2F0F6">
        <div className="container">
          <h1 className="text-center pb-5">Why Intelsense Software</h1>
          <div className="row justify-content-around">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyIntelSense;
