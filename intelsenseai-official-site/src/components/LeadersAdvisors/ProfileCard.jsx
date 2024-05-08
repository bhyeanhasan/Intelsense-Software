import React from "react";

import { openTeamModal } from "../../features/Modal/modalSlice";
import { useDispatch } from "react-redux";


const ProfileCard = ({ profileInfo, idx }) => {
  const { image, name, designation } = profileInfo || {};
  const dispatch = useDispatch();

  return (
    <>
      <div className="leader-card col-12 col-md-4 col-lg-3 m-md-3 py-4 d-flex flex-column align-items-center">
        <div className="leader-profile-img m-0 p-0">
          <div className="m-0 p-0">
            <img className="" src={image} alt="" />
          </div>
          <span
            className="fs-1 leader-button"
            onClick={() => dispatch(openTeamModal({ ...profileInfo }))}
          >
            +
          </span>
        </div>

        <div className="text-center pt-3">
          <h5 className="m-0">{name}</h5>
          <p className="mb-0">{designation}</p>
        </div>
      </div>

    </>
  );
};

export default ProfileCard;
