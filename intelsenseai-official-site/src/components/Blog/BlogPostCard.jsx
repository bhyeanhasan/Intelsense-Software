import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import './BlogPostCard.scss';
import { Link } from 'react-router-dom';


const BlogPostCard = ({ blogInfo, idx }) => {
    const { blogThumb, pubDate, title } = blogInfo || {};
    return (
        <div className="col-11 col-md-3 m-2 m-md-4 p-3 p-md-3 blog-post-card border rounded-1">
            <div>
                <img className="img-fluid" src={blogThumb} alt="" />
            </div>
            <div className="d-flex justify-content-between">
                <p>{pubDate}</p>
                <p>
                    <FaArrowRight className="blog-post-arrow" />
                </p>
            </div>

            <Link
                to={`/blogs/${idx}`}
                className='text-dark'
            >
                <h5>{title}</h5>
            </Link>

        </div>
    )
};

export default BlogPostCard;