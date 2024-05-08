import React from "react";

import "./Leadership.scss";
import { Link } from "react-router-dom";
import LeadersTeam from "../../components/LeadersAdvisors/LeadersTeam";
import Meta from "../../components/Meta/Meta";

const Leadership = () => {
  return (
    <>
      <Meta title={"Leadership"} />
      <section className="leadership-wrapper">
        <section className="leadership-intro">
          <div className="leadership-intro-img d-flex justify-content-center align-items-center">
            <div className="intro-gradient purple"></div>
          </div>
          <div className="intro-text text-center py-5 mb-5 text-white d-flex flex-column justify-content-center align-items-center ">
            <h2 className="w-75">
              Empowering the next billion users to access technology in the
              language and revolutionizing language processing through advanced
              Voice AI solutions
            </h2>
            <p>Building Voice AI Solutions for the Next Billion Users</p>
          </div>
        </section>
        <section className="d-flex justify-content-center">
          <div className="w-75 p-5 bg-white rounded mission-block">
            <h2 className="py-2">Our mission</h2>
            <p>
              Intelsense was founded with a mission to democratize the world’s
              access to cutting-edge language (NLP) and Speech Processing
              technology. 90% of Speech & NLP solutions are exclusively
              available in European languages. In Bangladesh, most of the people
              are not fully familiar with these languages and most technologies
              are not available in bangla. We want to break down the language
              barriers encountered by people in Asia, the Middle-East and Africa
              by enabling 6 billion people to access the internet in the
              language and mode of their choice.
            </p>
            <p>
              At Intelsense, we are committed to facilitating an inclusive world
              in which people’s access to technology is not limited by their
              native language. Our team looks to find out how voice tech can
              evolve the way business operations at consumer level can be
              transformed into a matter of seconds and data efficiency. Using Ai
              can significantly change how e-commerce and banking actions look
              like at present, making them more convenient.
            </p>
            <p className="text-center pt-5">
              <Link className="rounded-pill mission-button px-4 py-2">
                Read More
              </Link>
            </p>
          </div>
        </section>

        {/* Leaders Team */}
        <LeadersTeam />

        {/* Advisor  */}
        {/* <Advisor /> */}
      </section>
    </>
  );
};

export default Leadership;
