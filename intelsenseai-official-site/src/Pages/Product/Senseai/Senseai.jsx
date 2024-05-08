import React from "react";
import emailjs from "emailjs-com";

import senseai from "../../../Assets/images/Product/senseai.jpg";
import senseaihero from "../../../Assets/images/Product/sensai-cover.jpeg";
import "./Senseai.scss";
import Meta from "../../../components/Meta/Meta";
import { FAQSection } from "../../../components/sense.ai/FAQSection";

const Senseai = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;
    console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        window.alert("Email sent.");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <Meta title={"SenseAI (Ekush LLM)"} />
      <section className="contact-wrapper">
        <div className="hero py-5">
          <h2 className="heading fw-bold white mb-0">Sense.ai (Ekush LLM)</h2>
        </div>
        <div className="info-wrapper-section-1">
          <div className="container-lg py-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="text-justify">
                Intelsense AI proudly presents Sense.ai, featuring Ekush LLM, the country's first-ever Bangla Large Language Model (LLM). Developed to redefine Bangla language processing and artificial intelligence, Sense.ai embodies a groundbreaking advancement in linguistic technology, empowering Bangla speakers with unparalleled communication experiences. Leveraging state-of-the-art transformer architecture, Sense.ai delivers unrivaled accuracy and fluency in comprehending and generating Bangla text across various digital platforms. From enhancing chatbots and virtual assistants to revolutionizing content creation and sentiment analysis, Sense.ai transforms the way businesses and organizations engage with Bangla-speaking audiences.
                </p>
                <p className="text-justify">
                With its unique multi-stage training process and proprietary Voice AI technology, Sense.ai not only preserves Bangla language and culture but also fosters inclusivity and empowerment within the Bangla-speaking community. Harnessing the potential to impact sectors like telemedicine and agriculture, Sense.ai stands as a beacon of innovation and accessibility, poised to transform lives, especially those of differently-abled individuals, through its cutting-edge linguistic and technological prowess.
                </p>
              </div>
              <div className="col-12 col-md-6 heroimg">
                <img src={senseaihero} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="info-wrapper-section-2 white py-sm-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <p>
                Our mission with Sense.ai is twofold: Firstly, we are dedicated to building a reliable, high-performance, scalable enterprise-grade AI ecosystem, specifically tailored to the unique requirements of businesses. 
                </p>
                <p>Secondly, we aim to spearhead transformative AI research to enhance the development, deployment, and accessibility of GenAI applications in Bangladesh, ensuring they are robust, efficient, and cost-effective.</p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5">
                <p>
                Language is a fundamental aspect of our freedom, and digitizing it is essential in today's interconnected world. Everyone deserves access to language, regardless of barriers. In a world dominated by English-centric AI models, it's crucial that we invest in developing language models tailored to local languages like Bangla. Our people deserve technology that understands and empowers them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-wrapper-section-3 py-5">
          <div className="container-lg py-5">
            <h4 className="text-center">
            We're super excited to release Ekush-bn-v0.1, the first Bangla LLM from our Ekush series of models. This model is trained under compute and data constraints to show that we can get GPT-4-like performance on Bangla  language with a frugal budget.At this moment we are prepared to cater the necessities of enterprise to improve and enhance their product and services. We are working super hard to make Ekush accessible to the mass and enable everyone to experience the excellence.
              soon.
            </h4>
          </div>
        </div>
        <div className="contact-section container-lg py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="info">
                {/* <img src={senseaiLogo} alt="senseai"/> */}
                <h3 className="heading text-start fw-bold my-4">
                  Be Among the First
                </h3>
                <p className="sub-info white">
                  The world's first Bangla LLM not only provides cuttingedge
                  performance in the Bangla language but also brings a unique
                  solution to the table, revolutionizing how businesses approach
                  language models for enhanced efficiency and communication.
                </p>
              </div>
              <div className="map">
                <img src={senseai} alt="senseai" />
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto ps-md-5 mt-4 mt-md-0">
              <form onSubmit={sendEmail}>
                <p className="fw-bold text-primary mb-2">Name</p>
                <input
                  type="text"
                  name="user_name"
                  className="form-control mb-3"
                  id="validationTooltip01"
                  placeholder="Full name"
                  required
                />
                <p className="fw-bold text-primary mb-2">Email</p>
                <input
                  type="email"
                  name="user_email"
                  className="form-control mb-3"
                  placeholder="Your E-mail"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <p className="fw-bold text-primary mb-2">Phone</p>
                <input
                  type="number"
                  name="user_phone"
                  className="form-control mb-3"
                  placeholder="Enter your phone number"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <p className="fw-bold text-primary mb-2">Message</p>
                <input
                  type="text"
                  name="user_message"
                  className="form-control pt-5 pb-5 text-center mb-3"
                  placeholder="Type your message here..."
                  id="validationTooltip05"
                  required
                />
                <p className="agreement px-4 text-center">
                  For early access please sign up here or contact directly at 
                  <a href="mailto:info@intelsense.ai" className="ms-2 text-primary"> info@intelsense.ai</a>
                </p>
                <button
                  className="button2 mt-4 hvr-grow d-block mx-auto"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="faq-section">
          <div className="container-lg py-5">
            <h3 className="heading text-center fw-bold my-4 pb-4">
              {" "}
              Frequently Asked Questions (FAQ)
            </h3>
            <FAQSection/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Senseai;


