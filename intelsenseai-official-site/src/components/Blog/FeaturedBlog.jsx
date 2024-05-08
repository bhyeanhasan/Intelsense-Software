import React from 'react';

import featBlogImage from "../../Assets/images/BLOG/SenseVoice.jpg";
import { Link } from 'react-router-dom';


const FeaturedBlog = () => {
    return (
        <div className="container featured-blog background-1E1F2E">
            <h2 className="mb-md-5">FEATURED BLOG</h2>
            <div className="text-center">
                <div className="text-center">
                    <img src={featBlogImage} alt="Thumbnail of featured blog" />
                </div>
                <h3 className="my-2 my-md-4">
                    Introducing Sense Voice, an AI-driven Voice Assistant to transform your digital shopping experience
                </h3>
                <div className="d-flex justify-content-center mb-5">
                    <p className="text-center text-white">
                        Ever wondered about getting instant answers in the form of “speech” rather than typing? Well, it is no longer a mystery, rather a reality nowadays
                    </p>
                </div>
                <Link
                    to={`/blogs/Introducing Sense Voice, an AI-driven Voice Assistant to transform your digital shopping experience`}
                    className="rounded-pill fw-bold read-button">
                    READ
                </Link>
            </div>
        </div>
    );
}

export default FeaturedBlog