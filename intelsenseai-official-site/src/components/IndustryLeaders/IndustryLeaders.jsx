import React from "react";
import Image1 from "../../Assets/images/HOME/Industry-Leaders/1.jpg";
import Image2 from "../../Assets/images/HOME/Industry-Leaders/2.jpg";
import Image3 from "../../Assets/images/HOME/Industry-Leaders/3.jpg";
import Image4 from "../../Assets/images/HOME/Industry-Leaders/4.jpg";
import Image5 from "../../Assets/images/HOME/Industry-Leaders/5.jpg";
import quote from "../../Assets/images/HOME/Industry-Leaders/quote.png";
import "./IndustryLeaders.scss";

const IndustryLeaders = () => {
  return (
    <>
      <section className="industry-leaders-wrapper py-5 background-E2F0F6">
        <div className="container-lg">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img
                        src={Image1}
                        className="img-fluid main_image"
                        alt="profile_image"
                      />
                      <img
                        src={quote}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Natural Language Processing has the potential to
                        transform many industries, from customer service to
                        healthcare, by enabling machines to understand and
                        respond to human language at scale.
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        John McCarthy
                      </h6>
                      {/* <small className="d-block text-center text-md-start">
                        Micrososft
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img
                        src={Image2}
                        className="img-fluid main_image"
                        alt="profile_image"
                      />
                      <img
                        src={quote}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        I think natural language processing is going to be one
                        of the most important areas of artificial intelligence
                        over the next decade."
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Sam Altman
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img
                        src={Image3}
                        className="img-fluid main_image"
                        alt="profile_image"
                      />
                      <img
                        src={quote}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Natural language processing is one of the most exciting
                        areas in AI today, with the potential to transform how
                        we interact with machines and with each other
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Andrej Karpathy
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img
                        src={Image4}
                        className="img-fluid main_image"
                        alt="profile_image"
                      />
                      <img
                        src={quote}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        Deep learning has revolutionized natural language
                        processing by enabling machines to learn the underlying
                        structure of language and to generate more
                        natural-sounding responses.
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Yann LeCun
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-3 px-5 pe-md-0">
                    <div className="rounded-3 position-relative">
                      <img
                        src={Image5}
                        className="img-fluid main_image"
                        alt="profile_image"
                      />
                      <img
                        src={quote}
                        alt="quote"
                        className="quote position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-4 mt-md-0 ps-md-5 d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="heading fw-bold text-md-start">
                        Industry Leaders Talkies
                      </h2>
                      <h3 className="sub-heading text-md-start mb-3">
                        I have always been convinced that the only way to get
                        artificial intelligence to work is to do the computation
                        in a way similar to the human brain. That is the goal I
                        have been pursuing. We are making progress, though we
                        still have lots to learn about how the brain actually
                        works
                      </h3>
                      <h6 className="fw-bold text-center text-md-start">
                        Geoffrey Hinton
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryLeaders;
