import React from "react";

// import InfoImage1 from "../../Assets/images/about/info-image-1.svg";
// import InfoImage from "../../Assets/images/about/info-image.svg";
import whoWeAreImg from "../../Assets/images/about3.jpg";
import WorkImage from "../../Assets/images/about/work.webp";
import Meta from "../../components/Meta/Meta";
import "./About.scss";
import HistoryTimeline from "../../components/HistoryTimeline/HistoryTimeline";
import PartnersPortfolio from "../../components/PartnersPortfolio/PartnersPortfolio";


const About = () => {

    return (
        <>
            <Meta title={"About US"}/>
            <section className="about-wrapper">
                {/* HERO SECTION */}
                <section>
                    <div className="aboutus-intro d-flex align-items-center justify-content-center">
                        <h1 className="fw-bold text-black text-center">
                            Code With Purpose, Impact With Precision.
                        </h1>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section>
                    <div className="col-12 background-E2F0F6 text-dark px-4 py-4">
                        <div className="container who-we-are-container">

                            <div id='company' className="row py-5">
                                <div className="col-12 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <h1 className="pb-5 text-center fw-bold">INTELSENSE SOFTWARE</h1>
                                        <img className="about-img img-fluid" src={whoWeAreImg} alt=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 py-5 text-center">

                                    <p className="fs-5  mx-auto">
                                        Intelsense Software is a leading innovator in the realm of digital solutions,
                                        dedicated to empowering businesses worldwide through cutting-edge software
                                        technologies. With a relentless commitment to excellence and a passion for
                                        pushing the boundaries of possibility, we strive to redefine the landscape of
                                        software development.
                                    </p>
                                    <p className="fs-5 mx-auto">

                                        At Intelsense Software, we believe in the transformative power of technology to
                                        drive efficiency, productivity, and growth. Our team of seasoned professionals,
                                        comprising talented engineers, visionary designers, and experienced project
                                        managers, works collaboratively to deliver bespoke software solutions tailored
                                        to meet the unique needs and challenges of our clients.
                                    </p>
                                    <p className="fs-5 mx-auto">
                                        Our comprehensive suite of services spans the entire software development
                                        lifecycle, from conceptualization and design to development, implementation, and
                                        ongoing support. Whether it's crafting intuitive mobile applications, building
                                        robust web platforms, or integrating sophisticated enterprise systems, we
                                        leverage the latest tools and methodologies to deliver solutions that exceed
                                        expectations.
                                    </p>
                                    <p className="fs-5 mx-auto">

                                        Customer satisfaction lies at the heart of everything we do. We understand that
                                        every project is unique, and we take the time to listen, understand, and adapt
                                        to our clients' specific requirements. By fostering open communication and
                                        fostering long-term partnerships, we ensure that our solutions not only meet
                                        immediate needs but also evolve to support future growth and success.
                                    </p>

                                </div>

                            </div>
                            <hr/>

                            {/* <hr /> */}
                            <div id="vision" className="row py-5">
                                <div className="col-12 col-sm-6">
                                    <p className="fs-5 mx-auto">
                                        At Intelsense Software, innovation is our driving force. We stay ahead of the
                                        curve by continuously exploring emerging technologies, embracing new
                                        methodologies, and investing in the professional development of our team. This
                                        relentless pursuit of innovation enables us to deliver forward-thinking
                                        solutions that empower our clients to stay ahead in today's dynamic and
                                        competitive business landscape.
                                    </p>

                                    <p className="fs-5 mx-auto">

                                        As we continue to grow and expand our global footprint, we remain committed to
                                        our core values of integrity, excellence, and customer-centricity. With
                                        Intelsense Software as your trusted technology partner, you can be confident
                                        that you're harnessing the full potential of digital innovation to drive your
                                        business forward.
                                    </p>


                                </div>
                                <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                                    <h1>
                                        OUR VISION
                                    </h1>
                                </div>

                            </div>
                            <hr/>
                            <div id="culture" className="row py-5">
                                <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                                    <h1>
                                        OFFICE CULTURE
                                    </h1>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="fs-5 mx-auto">
                                        At Intelsense Software, we recognize that our greatest asset is our people. We
                                        take pride in fostering a vibrant and inclusive office culture that empowers
                                        every team member to thrive professionally and personally. Our office culture is
                                        not just a set of values; it's a way of life that promotes collaboration,
                                        creativity, and continuous learning.

                                        <ul>

                                            <li>Collaboration: Together, we achieve more. Our open-door policy
                                                encourages
                                            </li>
                                            <li>sharing ideas freely, fueling innovation and success.
                                            </li>
                                            <li>Diversity and Inclusion: We celebrate differences, knowing they enrich
                                                us.
                                                Every
                                                voice is valued, creating a supportive environment for all.
                                            </li>
                                            <li>Continuous Learning: Stay ahead with us. Our workshops and mentorship
                                                programs
                                                empower personal growth and innovation.
                                            </li>
                                            <li>Work-Life Balance: Balance is key. Flexible hours and wellness
                                                initiatives
                                                support both professional and personal well-being.
                                            </li>
                                            <li>Recognition and Appreciation: We value every effort. From shout-outs to
                                                formal
                                                programs, we celebrate achievements big and small.
                                            </li>
                                            <li>Fun and Creativity: Enjoy work, foster creativity. Our fun activities
                                                and
                                                challenges strengthen bonds and inspire innovation.
                                            </li>
                                        </ul>
                                        At Intelsense Software, our office culture is more than just a set of values;
                                        it's the foundation of who we are as a company. By fostering collaboration,
                                        embracing diversity, promoting continuous learning, supporting work-life
                                        balance, recognizing achievements, and nurturing creativity, we create an
                                        environment where every team member can thrive and succeed.
                                    </p>


                                </div>
                            </div>
                            {/* <hr /> */}
                        </div>
                    </div>

                    <div id="partners" className="">
                        <PartnersPortfolio/>

                    </div>


                </section>


                {/* INFO SECTION */}
                {/*<section className="info-wrapper-sention-1 white py-sm-5">*/}
                {/*    <div className="container pt-5">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-12 col-sm-6 pe-sm-5">*/}
                {/*                <p>*/}
                {/*                    Our team comprises 31 highly skilled members, including Speech Scientists, AI*/}
                {/*                    engineers, DevOps Engineers, Backend and Frontend Developers, data analytics*/}
                {/*                    engineers, product engineers, product designers, and leads, as well as seven*/}
                {/*                    Co-founders. Our track record speaks volumes, with clients experiencing a remarkable*/}
                {/*                    return on investment on AI.*/}
                {/*                </p>*/}
                {/*                <p>Moreover, our commitment to nurturing talent is evident, with over 35 fresh graduates*/}
                {/*                    kickstarted their careers in AI engineering and VoiceTech domains with us. Many of*/}
                {/*                    these individuals have gone on to pursue further education or secure positions in*/}
                {/*                    leading tech companies worldwide.</p>*/}


                {/*            </div>*/}
                {/*            <div className="col-12 col-sm-6 ps-sm-5">*/}
                {/*                <p>*/}
                {/*                    Key achievements include delivering 07 AI products, deploying 21 AI models and*/}
                {/*                    algorithms, and establishing partnerships and ongoing operations in four countries,*/}
                {/*                    including Bangladesh, UK, USA and UAE. Notable clients include Walton, Brac Bank,*/}
                {/*                    and Scitech.*/}

                {/*                </p>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/* INFO SECTION */}
                {/* <section className="info-wrapper-sention-1 white py-sm-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  OUR STORY
                </h3>
                <p>
                  Intelsense AI was founded with a vision to revolutionize the
                  way businesses operate by leveraging the power of artificial
                  intelligence. Our journey began with a small group of AI
                  enthusiasts 4 years ago, who shared a common passion for
                  developing innovative solutions that could make a real
                  difference in the world.
                </p>
                <p>
                  Over the years, our team has grown, and so has our expertise.
                  Today, we are proud to have developed some of the most
                  advanced AI solutions in the market, helping businesses to
                  streamline their operations, increase productivity, and drive
                  growth.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 pb-1 mb-sm-0">
                  WHAT WE DO
                </h3>
                <p>
                  Intelsense.ai provides AI services, solutions, and products to
                  help organizations across different industries to implement AI
                  today. Our AI research and development facilities in
                  Bangladesh, US and Canada allow us to solve today’s complex
                  problems, customize real-life AI applications for positive
                  future impact, and drive future innovation.
                </p>
              </div>
            </div>
          </div>
        </section> */}

                {/* Our purpose section */}
                {/* <section className="info-wrapper-sention-2 white py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 pe-sm-5">
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  OUR PURPOSE
                </h3>
                <p>
                  At Intelsense AI, our purpose is to empower businesses with
                  the latest AI technology so that they can thrive in the
                  digital age. We believe that speech-based AI has the potential
                  to transform the way businesses operate and help them achieve
                  their full potential. We are committed to developing AI
                  solutions that are accessible, easy to use, and can be
                  integrated seamlessly into any existing business processes.
                </p>
                <p>
                  We believe in putting our customers first and working closely
                  with them to understand their unique needs and challenges. By
                  doing so, we can create customized solutions that address
                  their specific pain points and help them achieve their
                  business goals. We aim to simplify the communication process
                  as much as possible and increase the efficient extraction of
                  information.
                </p>
              </div>
              <div className="col-12 col-sm-6 ps-sm-5 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3"
                />
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">
                  DRIVEN TO WIN
                </h3>
                <p>
                  W're solving a hard problem that requires incredible focus and
                  commitment. Success means doing a few things differently.
                </p>
              </div>
            </div>
          </div>
        </section> */}

                {/* COMPANY HISTORY SECTION */}
                {/*<section className="history-snap-scroll base-gradient-background">*/}
                {/*    <div className="container py-5">*/}
                {/*        <h2 className="pt-5 fw-bold text-center  text-white">HISTORY TIMELINE</h2>*/}
                {/*        <HistoryTimeline/>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* WORK SECTION */}

                {/*<section className="work-wrapper white py-5">*/}
                {/*    <div className="container-lg">*/}
                {/*        <div className="row pb-5">*/}
                {/*            <div className="col-12 col-md-4 pe-sm-3 mt-5">*/}
                {/*                /!* <img*/}
                {/*  src={InfoImage1}*/}
                {/*  alt="info_Image"*/}
                {/*  className="d-block mx-auto mx-sm-0 mb-3 info-image"*/}
                {/*/> *!/*/}
                {/*                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">*/}
                {/*                    OUR STORY*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    Intelsense AI was founded with a vision to revolutionize the way businesses operate*/}
                {/*                    by leveraging the power of artificial intelligence. Our journey began with a small*/}
                {/*                    group of AI enthusiasts 4 years ago, who shared a common passion for developing*/}
                {/*                    innovative solutions that could make a real difference in the world.*/}
                {/*                </p>*/}
                {/*                <p>*/}
                {/*                    Over the years, our team has grown, and so has our expertise. Today, we are proud to*/}
                {/*                    have developed some of the most advanced AI solutions in the market, helping*/}
                {/*                    businesses to streamline their operations, increase productivity, and drive growth.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="col-12 col-md-4 px-5 px-md-0 pt-4 pt-md-0">*/}
                {/*                <div className="px-sm-5 px-md-0">*/}
                {/*                    <img*/}
                {/*                        src={WorkImage}*/}
                {/*                        className="img-fluid"*/}
                {/*                        alt="middle_image"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-12 col-md-4 ps-sm-3 mt-5">*/}
                {/*                /!* <img*/}
                {/*  src={InfoImage}*/}
                {/*  alt="info_Image"*/}
                {/*  className="d-block mx-auto me-sm-0 mb-3 info-image"*/}
                {/*/> *!/*/}
                {/*                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">*/}
                {/*                    WHAT WE DO*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    At Intelsense AI, we are dedicated to revolutionizing the potential of enterprises*/}
                {/*                    through cutting-edge Voice AI and machine learning solutions. Our expertise lies in*/}
                {/*                    speech recognition and natural language processing (NLP). By leveraging these*/}
                {/*                    powerful tools, we enable businesses to unlock new possibilities and optimize their*/}
                {/*                    operations. From our state-of-the-art SenseVoice speech-to-text engine to our*/}
                {/*                    AI-powered virtual assistant, SenseBots, we provide comprehensive solutions for*/}
                {/*                    voice-based AI, conversational chatbots and much more.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* <section className="work-wrapper white py-5">
          <div className="container-lg">
            <div className="row pb-5">
              <div className="col-12 col-md-4 pe-sm-3">
                <img
                  src={InfoImage1}
                  alt="info_Image"
                  className="d-block mx-auto mx-sm-0 mb-3 info-image"
                />
                <h3 className="sub-heading base-color fw-bold fs-3 text-sm-start mb-3 pb-2 mb-sm-0">
                  AREA OF OUR WORK
                </h3>
                <p>
                  Composition of Machine Learning and Deep Learning Techniques
                  in Computer Vision, Natural Language Processing
                  productionalizing, Intelligence Chatbots. Domain Specific/Open
                  Domain specific Recognition System . Virtual Assistance and
                  Internet of things.
                </p>
              </div>
              <div className="col-12 col-md-4 px-5 px-md-0 pt-4 pt-md-0">
                <div className="px-sm-5 px-md-0">
                  <img
                    src={WorkImage}
                    className="img-fluid"
                    alt="middle_image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4 ps-sm-3 mt-5">
                <img
                  src={InfoImage}
                  alt="info_Image"
                  className="d-block mx-auto me-sm-0 mb-3 info-image"
                />
                <h3 className="sub-heading base-color fw-bold  text-sm-end mb-3 mb-sm-0 pb-1">
                  LEADING THE MOVEMENT
                </h3>
                <p>
                  We're a team with a multitude of experience and perspective.
                  With decades of engineering, science, and domain expertise,
                  we're incorporating our best practices to create a company for
                  the long-term and building AI driven products that will
                  deliver the benefits to all of humanity.
                </p>
              </div>
            </div>
          </div>
        </section> */}
            </section>
        </>
    );
};

export default About;
