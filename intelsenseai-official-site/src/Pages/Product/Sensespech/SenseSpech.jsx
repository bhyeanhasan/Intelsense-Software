import React from "react";
import Meta from "../../../components/Meta/Meta";
import SenseSpeechHero from "../../../Assets/images/Product/sense-spech-cover.jpeg"
import { Link } from "react-router-dom";
const SenseSpech = () => {
  return (
    <>
      <Meta title={"SenseSpeech"} />
      <section className="contact-wrapper">
        <div className="hero py-5">
          <h2 className="heading fw-bold white mb-0">SenseSpeech</h2>
        </div>
        <div className="info-wrapper-section-1">
          <div className="container-lg py-5">
            <div className="row">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <h4>Experience the Future of Digital Onboarding  with SenseSpeech – Intelsense's Cutting-Edge Voice AI Driven Digital Onboarding Solution</h4>
              </div>
              <div className="col-12 col-md-6 heroimg">
                <img src={SenseSpeechHero} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="info-wrapper-section-2 white py-sm-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <p>
                The traditional onboarding or sign-up process is very tedious to say the least. It requires you to attentively type all the information that have been requested in the form. Any mistake may lead you to an even more frustrating user journey. The more you have to be cautious, the more it feels like a stressor. And if this is something you need to do in a rush, with a fragile health or upset mood, it flagrantly adds up to the frustration. Good news is, this user pain point is soon to be over. And the benefits are not going to be limited to English speaking users.

                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5">
                <p>
                Intelsense AI has recently launched 'SenseSpeech'- country's first Voice AI based Digital Onboarding Solution.  As Bangladesh pushes towards its 'Digital Bangladesh' vision, we believe that SenseSpeech represents a major milestone. Not only this will make the entire onboarding process more tolerable for any digital services- which you as a reader may strongly relate with. More importantly, it shall also become a catalyst for driving a tech inclusive future by simplifying digital access for diverse local communities.

                </p>
              </div>
            </div>
          </div>
        </div>
        

        <div className="info-wrapper-section-2 text-center">
          <div className="container-lg py-5">
            <Link to={"/contact"}>
            <button className="btn btn-light text-center fw-bold ">
            Connect with us to learn more about SenseSpeech
            </button>
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SenseSpech;
