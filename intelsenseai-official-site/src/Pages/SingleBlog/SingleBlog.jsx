import React from 'react'
import { useParams } from 'react-router-dom';

import { FaUserCircle } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

import "./SingleBlog.scss";
import { blogData } from '../../utils/BlogData';
import Meta from '../../components/Meta/Meta';


const SingleBlog = () => {
  const {blogId} = useParams();
  const {blogThumb, author, readTime, pubDate, title, content} = blogData.find(blog => blog.title === blogId) || {};
  return (
    <>
        <Meta title={title} socialimage={blogThumb}/>

      <section className="blog-page-hero">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-11 col-md-8 d-flex justify-content-center">
            <img className="img-fluid" src={blogThumb} alt="" />
          </div>
          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-between my-5 pb-5">
            <h4 className="d-flex align-items-center">
              <FaUserCircle />
              <span className="ms-3">{author}</span>
            </h4>
            <h6 className="d-flex align-items-center">
              <BsClock />
              <span className="ms-2">{readTime}</span>
            </h6>
          </div>
        </div>
      </section>
      <section className="bg-light-subtle">
        <div className="container blog-body bg-body p-2  p-md-5 mb-5">
          <h1 className="pt-5">
            {title}
          </h1>
          <p>
            <span className="border border-info border-end-0 border-top-0 p-2">
              {pubDate}
            </span>
          </p>
          <div className="blog-content mt-5"
          dangerouslySetInnerHTML={{__html: content}}
          >
          </div>
        </div>
        <div className="my-5">
          {/* <h6 className="text-center">Share this article</h6> */}
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
