import React from "react";

import './Career.scss'
import OurTeams from "../../components/Career/OurTeams";
import CareerIntro from "../../components/Career/CareerIntro";
import SenseFuture from "../../components/Career/SenseFuture";
import JoinMission from "../../components/Career/JoinMission";
import CareerOpportunity from "../../components/Career/CareerOpportunity";
import Meta from "../../components/Meta/Meta";

const Career = () => {
  return (
    <>
      <Meta title={"Career"} />
      
      {/* intro section */}
      <CareerIntro />

      {/* sense the future section */}
      <SenseFuture />

      {/* Join our mission section */}
      <JoinMission />

      {/* our teams section */}
      <OurTeams />

      {/* Career oppotunities */}
      <CareerOpportunity />
    </>
  );
};

export default Career;
