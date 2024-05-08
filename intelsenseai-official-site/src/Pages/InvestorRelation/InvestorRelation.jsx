import React from "react";
import Video from "../../Assets/video/investorRelation.mp4";
import Meta from "../../components/Meta/Meta";
import "./InvestorRelation.scss";
import { Link } from "react-router-dom";

const InvestorRelation = () => {
  return (
    <>
      <Meta title={"Investors Relation"} />
      <section className="investor-relation-wrapper py-3 py-sm-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-11 col-md-8">
              <video className="video mb-2 mb-sm-5" autoPlay controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <h2 className="heading text-sm-start">
              An invitation to investors
            </h2>
            <p className="text-center text-sm-start mb-4">
              Intelsense AI is an innovative tech company that is poised to
              revolutionize the industry with advanced voice solutions. At our
              core, we are passionate about creating cutting-edge technology
              that improves commercial effort in establishing customer
              relationships and makes people’s lives easier..
            </p>
            <p className="text-center text-sm-start mb-4">
              Our team is composed of top AI experts with years of experience in
              this field while working for renowned global companies. We have
              developed a unique approach to AI that combines machine learning,
              natural language processing, and computer vision to deliver
              solutions that are both accurate and efficient, especially in
              local dialects, national languages other than English.
            </p>
            <p className="text-center text-sm-start mb-4">
              Our products are already considered to create a significant impact
              in several industries, including finance, healthcare,
              entertainment, and e-commerce. We are continuously working on
              improving our technology to stay ahead of the competition and meet
              the ever-changing needs of our customers.
            </p>
            <p className="text-center text-sm-start mb-4">
              We are seeking an investment to scale our operations and expand
              our reach to develop newer performance standards. With your
              investment, we can accelerate our growth and make our technology
              accessible for even micro-level businesses and individuals around
              the world.
            </p>
            <p className="text-center text-sm-start mb-4">
              Investing in our company means not only investing in cutting-edge
              AI technology but also in the future of innovation. We believe
              that AI has the power to transform industries by sealing manual
              system loss and create a better world. We are excited to be at the
              forefront of this revolution with our unique solutions.
            </p>
            <p className="text-center text-sm-start mb-4">
              If you consider investing in our company, we would love to discuss
              our vision with you in more detail and explore how we can work
              together to achieve our shared goals. Please send an email to <strong>info@intelsense.ai</strong> or <Link to={`/contact`}>drop us a text</Link> to discuss how we can collaborate
            </p>
            <p className="fw-bold text-center text-sm-start">
              Intelsense AI – Sense the beyond.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorRelation;
