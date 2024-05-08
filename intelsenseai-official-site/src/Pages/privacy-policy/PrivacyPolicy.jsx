import React from "react";
import "./style.scss";
import Meta from "../../components/Meta/Meta";
import About from "../About/About";


const PrivacyPolicy = () => {

    return (
        <>
            <Meta title={"Privacy Policy"}/>
            <section className="wrapper">
                {/* HERO SECTION */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <div className="card mt-5 card-pp">
                                <div className="card-body overflow-auto">
                                    <h5 className="card-title">Privacy Policy</h5>
                                    <h6 className="font-weight-bold">
                                        Last updated November 10, 2023
                                    </h6>
                                    <p className="card-text text-justify">
                                        <br/>
                                        <br/>
                                        We are IntelsenseAl ("Company," "we," "us," "our").
                                        <br/>
                                        <br/>
                                        We operate the website https://www.intelsense.ai/ (the "Site"),
                                        as well as any other related products and services that refer or
                                        link to these legal terms (the "Legal Terms") (collectively, the
                                        "Services"). Intelsense Al started as a plan to bridge the gap
                                        of inconsistent and asymmetric access to linguistic tools across
                                        the world. Starting from education to job fields, all sorts of
                                        speech-based technologies are available in English only or
                                        mostly which deprives the majority of the native population in
                                        every country. After 4 years, Intelsense has grown into a
                                        company with more than 30 employees, everyone working to develop
                                        a more inclusive world where language is not a barrier for using
                                        Al technologies. Our brainstorming started with simple speech
                                        tools like assistants and chatbots, then we started to recognize
                                        the efficiency needs of different industries and strived to
                                        create innovative concepts to solve their problems. You can
                                        contact us by email at info@intelsense.ai
                                        <br/>
                                        <br/>
                                    </p>
                                    <h5 className="card-title">Summary Of Key Points</h5>
                                    <p>
                                        This summary provides key points from our privacy notice, but
                                        you can find out more details about any of these topics by
                                        clicking the link following each key point or by using our table
                                        of contents below to find the section you are looking for. What
                                        personal information do we process? When you visit, use, or
                                        navigate our Services, we may process personal information
                                        depending on how you interact with us and the Services, the
                                        choices you make, and the products and features you use. Learn
                                        more about personal information you disclose to us.
                                        <br/>
                                        <br/>
                                        Do we process any sensitive personal information? We do not
                                        process sensitive personal information.
                                        <br/>
                                        <br/>
                                        Do we receive any information from third parties? We may receive
                                        information from public databases, marketing partners, social
                                        media platforms, and other outside sources. Learn more about
                                        information collected from other sources.
                                        <br/>
                                        <br/>
                                        How do we process your information? We process your information
                                        to provide, improve, and administer our Services, communicate
                                        with you, for security and fraud prevention, and to comply with
                                        law. We may also process your information for other purposes
                                        with your consent. We process your information only when we have
                                        a valid legal reason to do so. Learn more about how we process
                                        your information.
                                        <br/>
                                        <br/>
                                    </p>
                                    {/* Add more paragraphs as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
};

export default PrivacyPolicy;

