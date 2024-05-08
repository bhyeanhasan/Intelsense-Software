import React from "react";

import { leadersData } from "../../utils/LeadersAndAdvisorsData";
import ProfileCard from "./ProfileCard";
import ProfileModal from "./ProfileModal";
import './LeadersTeam.scss';


const LeadersTeam = () => {
  const content = leadersData.map((leaderInfo, idx) => (
    <ProfileCard key={idx} idx={idx} profileInfo={leaderInfo} />
  ));
  return (
    <>
      <div className="leadership-team background-E2F0F6 pb-5">
        <div className="container mt-5 pt-5 text-dark">
          <h2 className="text-center pt-5">Our Leadership Team</h2>
          <h6 className="text-center pt-1 pb-5">We are inventors, explorers. builders, and doers</h6>
          <div className="row justify-content-center">{content}</div>
        </div>
      </div>

      <div>
        <ProfileModal />
      </div>
    </>
  );
};

export default LeadersTeam;
