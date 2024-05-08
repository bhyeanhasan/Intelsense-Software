import React from "react";
import {serviceData, serviceData2} from "../../utils/Data";
import "./Services.scss";
import {HashLink} from "react-router-hash-link";
import {
    FaCoins, FaShoppingCart, FaLaptopCode, FaLightbulb, FaUniversity, FaHandsHelping, FaClipboardList
} from "react-icons/fa";
import {MdHealthAndSafety, MdRealEstateAgent} from "react-icons/md";
import {IoRadioSharp} from "react-icons/io5";
import {BsFillCarFrontFill} from "react-icons/bs";
import {HiBuildingStorefront} from "react-icons/hi2";

const Services = () => {
    return (
        <>
            <section className="services-wrapper background-E2F0F6 py-5">
                <div className="container py-sm-5">
                    <div className="row">
                        <div>
                            <h2 className="heading text-center mb-4 ">
                                Industries We Serve
                            </h2>
                            <h3 className="sub-heading text-center mb-sm-5">
                                Collaborate closely with our clients to understand their unique challenges and deliver
                                innovative
                                software solutions that drive efficiency, growth, and success.
                            </h3>
                        </div>

                        <div className="row text-center">


                            <div className="col-md-2">
                                <FaCoins size={56}/>
                                <h4 className="service-title">Fintech</h4>
                            </div>

                            <div className="col-md-2">
                                <MdHealthAndSafety size={56}/>

                                <h4 className="service-title">Healthcare</h4>
                            </div>

                            <div className="col-md-2">
                                <IoRadioSharp size={56}/>

                                <h4 className="service-title">Telco</h4>
                            </div>

                            <div className="col-md-2">
                                <MdRealEstateAgent size={56}/>

                                <h4 className="service-title">Real Estate</h4>
                            </div>

                            <div className="col-md-2">
                                <FaShoppingCart size={56}/>

                                <h4 className="service-title">E-com</h4>
                            </div>
                            <div className="col-md-2">
                                <BsFillCarFrontFill size={56}/>

                                <h4 className="service-title">Automotive</h4>
                            </div>
                            <div className="col-md-2">
                                <FaLaptopCode size={56}/>

                                <h4 className="service-title">Software</h4>
                            </div>


                            <div className="col-md-2">
                                <FaLightbulb size={56}/>

                                <h4 className="service-title">Startup</h4>
                            </div>
                            <div className="col-md-2">
                                <FaUniversity size={56}/>

                                <h4 className="service-title">Education</h4>
                            </div>
                            <div className="col-md-2">
                                <HiBuildingStorefront size={56}/>

                                <h4 className="service-title">Retail</h4>
                            </div>
                            <div className="col-md-2">
                                <FaHandsHelping size={56}/>

                                <h4 className="service-title">Non-Profit</h4>
                            </div>
                            <div className="col-md-2">
                                <FaClipboardList size={56}/>

                                <h4 className="service-title">Miscellaneous</h4>
                            </div>

                        </div>


                    </div>


                </div>
            </section>
        </>
    );
};

export default Services;
