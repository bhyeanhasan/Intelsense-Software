import React from "react";
import ArrangeDemonstration from "../../components/ArrangeDemonstration/ArrangeDemonstration";
import Aspiring from "../../components/Aspiring/Aspiring";
import Hero from "../../components/Hero/Hero";
import IndustryLeaders from "../../components/IndustryLeaders/IndustryLeaders";
import IntelsenseInNumbers from "../../components/IntelsenseInNumbers/IntelsenseInNumbers";
import Meta from "../../components/Meta/Meta";
import PartnersPortfolio from "../../components/PartnersPortfolio/PartnersPortfolio";
import Products from "../../components/Products/Products";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";
import WhyIntelSense from "../../components/WhyIntelSense/WhyIntelSense";
import metalogo from "../../Assets/images/logo.png"
import {AffiliatePartners} from "../../components/PartnersPortfolio/AffiliatePartners";
import MediaFeatured from "../../components/MediaFeatured/MediaFeatured";
import Contact from "../Contact/Contact";
import ServicesDetails from "../../components/Services Details/ServicesDetails";

const index = () => {
    return (
        <>
            <Meta title={"Intelsense Software | Sense The Future"} socialimage={metalogo}/>
            <Hero/>
            <Services/>
            <ServicesDetails/>
            <WhyIntelSense/>
            {/*<Review/>*/}
            <AffiliatePartners/>
            {/*<Products />*/}
            <Aspiring/>
            {/*<IntelsenseInNumbers/>*/}
            <PartnersPortfolio/>
            {/*<MediaFeatured />*/}
            {/*<IndustryLeaders />*/}
            {/*<ArrangeDemonstration />*/}
            {/*<Contact/>*/}
        </>
    );
};

export default index;
