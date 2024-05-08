import React from "react";

import "./Service.scss";
import appdev from "../../Assets/images/app dev.jpg";
import cloud from "../../Assets/images/cloud.jpg";
import business from "../../Assets/images/business (2).jpg";
import team from "../../Assets/images/team.jpg";
import Meta from "../../components/Meta/Meta";

import {FcComboChart, FcDoughnutChart, FcLock, FcMultipleDevices, FcSupport} from "react-icons/fc";
import {FcPhoneAndroid} from "react-icons/fc";
import {FcEditImage, FcBriefcase, FcAssistant} from "react-icons/fc";

const Service = () => {
    return (
        <>
            <Meta title={"Services"}/>
            <section className="service-top"></section>
            <section className="service-page">
                <div className="container p-md-5 service-container">
                    <div className="py-5">
                        <h1 className="pb-5">OUR SERVICES</h1>
                        <h6>
                            Embark on your digital transformation journey with confidence, from securing dedicated
                            developers to bringing your dream project to life, and turbocharging your cloud transition.
                            Our suite of services has you covered every step of the way, ensuring a seamless evolution
                            into the digital realm.
                        </h6>
                    </div>
                    <div className="row">

                        <hr/>
                        <div id="app" className="col-12 py-5">
                            <div className="row">

                                <div className="col-12 col-md-6">
                                    <h2 className="pb-md-4">App Development</h2>
                                    <p>
                                        Transform your digital ambitions into market-leading products with our
                                        end-to-end software development solutions. Our robust and strategic approach
                                        empowers your company to gain full visibility into the development journey,
                                        enabling you to monitor progress at every stage. With seamless communication
                                        and
                                        collaboration, we ensure your product is not only functional but perfectly
                                        attuned to market needs.

                                        <br></br>

                                        At our core, we cultivate a culture of ownership and pride among our team,
                                        prioritizing transparency to unleash the full potential of every development
                                        cycle for your ultimate product success.
                                    </p>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div>
                                        <img className="img-fluid" src={appdev} alt=""/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <FcMultipleDevices size="75"/>
                                            <h4 className="card-title">Custom Web Application Development</h4>
                                            <p className="card-text">
                                                Crafting custom web applications that seamlessly integrate with your
                                                business requirements and objectives, delivering tailor-made solutions
                                                for your specific needs and goals.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <FcPhoneAndroid size="75"/>
                                            <h4 className="card-title">Custom Mobile Application Development</h4>
                                            <p className="card-text">
                                                Our experienced team specializes in iOS and Android app development. We
                                                excel in cross-platform mobile app creation, utilizing cutting-edge
                                                technology to streamline development across major platforms, optimizing
                                                time and resources.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <FcEditImage size="75"/>
                                            <h4 className="card-title">UI/UX Design</h4>
                                            <p className="card-text">
                                                Our experienced team specializes in iOS and Android app development. We
                                                excel in cross-platform mobile app creation, utilizing cutting-edge
                                                technology to streamline development across major platforms, optimizing
                                                time and resources.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr/>
                        <div id="business" className="col-12 py-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="text-center">
                                        <img className="business img-fluid" src={business} alt=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h2 className="pb-md-4">Business Solutions</h2>
                                    <h5>
                                        Business solutions encompass a wide array of strategies, technologies, and
                                        practices aimed at addressing challenges and maximizing opportunities within
                                        organizations. These solutions can range from software applications to
                                        consulting services, designed to improve efficiency, productivity, and overall
                                        performance.
                                    </h5>


                                </div>

                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcBriefcase size="75"/>
                                            <h4 className="card-title">Enterprise Software</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcAssistant size="75"/>
                                            <h4 className="card-title">Consulting Services</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcComboChart size="75"/>
                                            <h4 className="card-title">Digital Transformation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcSupport size="75"/>
                                            <h4 className="card-title">Customized Solutions</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3"></div>

                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcDoughnutChart size="75"/>
                                            <h4 className="card-title">Data Analytics</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card card-business">
                                        <div className="card-body">
                                            <FcLock size="75"/>
                                            <h4 className="card-title">Security Solutions</h4>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <hr/>
                        <div id="cloud" className="col-12 py-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h2 className="pb-md-4">Cloud Service</h2>
                                    <p>
                                        Our suite of cloud services encompasses a broad spectrum of functionalities,
                                        ranging from the deployment of virtual machines and database management to the
                                        implementation of high-performance networks and optimization of serverless
                                        solutions. Our aim is to facilitate dynamic scalability, bolster security
                                        measures, and expedite innovation for your business.
                                        <br></br>
                                        <br></br>

                                        Crafted with simplicity and scalability in mind, our cloud services empower
                                        seamless business expansion, alleviating concerns regarding IT infrastructure
                                        management. Additionally, we provide an array of security features meticulously
                                        designed to safeguard your valuable data assets.
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img src={cloud} alt="" className="cloud img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div id="team" className="col-12 py-5">
                            <div className="row py-md-4">
                                <div className="col col-md-6">
                                    <h3 className="pb-md-4">Team Augmentation</h3>

                                    <p>

                                        Enhance performance through the utilization of skilled resources by augmenting
                                        internal team members with external expertise. Aligning with the company's
                                        culture, procedures, and tools, these resources facilitate the achievement of
                                        targeted project objectives.

                                        <br></br>
                                        <br></br>

                                        Access a diverse talent pool comprising professionals with specialized skills,
                                        enriching your collective knowledge base and reducing the necessity for
                                        extensive training. This strategy ensures operational efficiency and project
                                        success.

                                        <br></br>
                                        <br></br>

                                        Equip your team with elite external talents to adopt a flexible and
                                        cost-efficient approach towards project development.
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">

                                    <div>
                                        <img src={team} alt="" className="cloud img-fluid"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default Service;
