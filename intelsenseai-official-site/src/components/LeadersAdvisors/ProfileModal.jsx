import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { closeTeamModal } from "../../features/Modal/modalSlice";
import "./ProfileModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    transform: "translate(-50%, -50%)",
    height: "70vh",
    width: "70vw",
    zIndex: "2000",
  },
};

Modal.setAppElement("#root");

const ProfileModal = () => {
  const { isOpen, profileInfo } = useSelector((state) => state.teamModal);
  const { name, designation, image, description, linkedIn, twiter } =
    profileInfo || {};
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(closeTeamModal())}
        style={customStyles}
        contentLabel="Profile Modal"
      >
        <p className="fs-4 m-0 p-0 text-end">
          <span
            className="close-button bg-transparent text-red"
            onClick={() => dispatch(closeTeamModal())}
          >
            <MdClose />
          </span>
        </p>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-start">
            <div>
              <img className="img-fluid" src={image} alt="" />
            </div>
            <h5 className="name">{name}</h5>
            <h6 className="designation">{designation}</h6>
            <p className="d-flex justify-content-around">
              {twiter && (
                <a className="text-dark" href={twiter}>
                  <FaTwitter className="mx-2 fs-3" />
                </a>
              )}
              {linkedIn && <a className="text-dark" href={linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin className="mx-2 fs-3" />
              </a>}
            </p>
          </div>
          <div className="col-12 col-md-6 profile-description">
            {description}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfileModal;
