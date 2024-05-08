import React from "react";
import "./ServicesDetails.scss";
import {
    FaMobile
} from "react-icons/fa";
import {FcMultipleDevices,FcNeutralTrading,FcMindMap,FcWorkflow,FcAcceptDatabase,FcStatistics    } from "react-icons/fc";

const ServicesDetails = () => {
    return (
        <>

            <section className="details-wrapper  py-5">
                <div className="container py-sm-5">
                    <div className="row">
                        <div className=" details col-md-12 py-2">
                            <h4 className="heading  mb-4 text-sm-start">
                                Providing exemplary software development outsourcing services with a focus on
                                quality and
                                excellence.
                            </h4>
                            <h3 className="sub-heading text-sm-start">
                                Offers a dependable and proficient team of professionals adept at managing diverse
                                facets of the software development lifecycle. We prioritize efficiency, effectiveness,
                                and tailor our services to precisely meet your requirements.
                            </h3>
                        </div>

                        <div className="col-md-12">
                            <div className="row">

                                <div className="col-md-4 text-center mt-2">
                                    <FcMultipleDevices size="64"/>
                                    <h5>Mobile and Web Application</h5>
                                    <p>Create innovative solutions customized to your business objectives.</p>
                                </div>
                                <div className="col-md-4 text-center mt-2">
                                    <FcNeutralTrading size="64"/>
                                    <h5>Effortless Scalability</h5>
                                    <p>Experience seamless application performance, adeptly handling heightened demands and expansion.</p>
                                </div>
                                <div className="col-md-4 text-center mt-2">
                                    <FcMindMap  size="64"/>
                                    <h5>Cloud services</h5>
                                    <p>Unlock flexibility, and security with our comprehensive cloud services tailored to your business needs.</p>
                                </div>
                                <div className="col-md-4 text-center mt-2">
                                    <FcWorkflow  size="64"/>
                                    <h5>DevOps services</h5>
                                    <p>Streamline operations with our DevOps services, optimizing collaboration, automation, and deployment for accelerated software delivery.</p>
                                </div>
                                <div className="col-md-4 text-center mt-2">
                                    <FcStatistics  size="64"/>
                                    <h5>AI & ML</h5>
                                    <p>Harness the power of AI and ML technologies to drive innovation, automate processes, and unlock valuable insights for your business.</p>
                                </div>
                                <div className="col-md-4 text-center mt-2">
                                    <FcAcceptDatabase  size="64"/>
                                    <h5>Database management</h5>
                                    <p>Enhance efficiency & security with our database management solutions, ensuring seamless data organization, accessibility, & protection</p>
                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
);
};

export default ServicesDetails;
