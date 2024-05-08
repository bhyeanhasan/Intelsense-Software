import React from "react";
import Banner from "../../Assets/images/Hero/hero.jpg";
import "./Hero.scss";
import {Link} from "react-router-dom";
import Logo from "../../Assets/images/logo.png";

const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="container-lg">
                    <div className="page row align-items-center">
                        <div className="moto col-12 col-md-6">
                            <div className="hero-response">
                                <h1 className="text-center text-sm-start align-middle">
                                    Empowering Innovation, Crafting Solutions
                                </h1>
                                <h4 className="text-center text-sm-start">
                                    Seeding Success, Harvesting Solutions: Cultivating Growth in the Digital World.
                                </h4>

                                <Link to="/services">
                                    <button className="btn  py-3 btn-hero">Our Services</button>
                                </Link>


                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-sm-5 mt-md-0">
                            <div className="mx-auto">
                                <img className="hero-img" src={Banner}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
