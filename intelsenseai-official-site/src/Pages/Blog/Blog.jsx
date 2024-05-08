import React from "react";
import { Link } from "react-router-dom";

import Meta from "../../components/Meta/Meta";
// import { blogData } from "../../utils/BlogData";
import "./Blog.scss";
import Blogs from "../../components/Blog/Blogs";
import FeaturedBlog from "../../components/Blog/FeaturedBlog";


const Blog = () => {
  
  return (
    <>
      <Meta title={"Blogs"} />
      <section className="blog-wrapper">
        <div className="hero background-1E1F2E py-5">
          <div className="container-lg py-5 my-sm-5">
            <h2 className="heading fw-bold white fs-2 mb-0">THE</h2>
            <h2 className="heading white fs-2 mb-0">INTELSENSE</h2>
            <h1 className="blog-heading white py-3">BLOG</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-sm-3">
              <Link to="/blog/everything-ai" className="white mx-2 base-hvr-color">
                EVERYTHING AI
              </Link>
              <Link to="/blog/podcast" className="white mx-2 base-hvr-color">
                PODCAST
              </Link>
              <Link to="/blog/research" className="white mx-2 base-hvr-color">
                RESEARCH
              </Link>
              <Link to="/blog/news" className="white mx-2 base-hvr-color">
                NEWS
              </Link>
            </div>
          </div>
          <div className="line"></div>
          
          {/* Featured blog with component */}
        </div>



        {/* Blogs with Blogs component */}
        <Blogs />

      </section>
    </>
  );
};

export default Blog;
