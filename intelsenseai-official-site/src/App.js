import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout/Layout.jsx";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/index.jsx";
import InvestorRelation from "./Pages/InvestorRelation/InvestorRelation";
import Product from "./Pages/Product/Product";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Leadership from "./Pages/Leadership/Leadership";
import Career from "./Pages/Career/Career";
import Service from "./Pages/Service/Service";
import Job from "./Pages/Job/Job";
import ScrollToTop from "./utils/scrollToTop";
import TermsConditions from "./Pages/Terms & Conditions/TermsConditions.jsx";
import PrivacyPolicy from "./Pages/privacy-policy/PrivacyPolicy.jsx";
import ComingSoon from "./components/comingsoon/ComingSoon.jsx";
import SenseSpech from "./Pages/Product/Sensespech/SenseSpech.jsx";
import Senseai from "./Pages/Product/Senseai/Senseai.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/sense.ai" element={<Senseai />} />
            <Route path="/products/sense-speech" element={<SenseSpech />} />
            <Route path="/services" element={<Service />} />
            <Route path="/investor-relation" element={<InvestorRelation />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/everything-ai" element={<ComingSoon />} />
            <Route path="/blog/podcast" element={<ComingSoon />} />
            <Route path="/blog/research" element={<ComingSoon />} />
            <Route path="/blog/news" element={<ComingSoon />} />
            {/* <Route path="/blog/1" element={<Blog1 />} /> */}
            <Route path="/blogs/:blogId" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/career" element={<Career />} />
            <Route path="/jobs/:jobitem/:jobtitle" element={<Job />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
