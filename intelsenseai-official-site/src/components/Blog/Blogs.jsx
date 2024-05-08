import React from 'react';

import { blogData } from '../../utils/BlogData';
import BlogPostCard from './BlogPostCard';


const Blogs = () => {
    const content = blogData.map((blogInfo, idx) => <BlogPostCard key={idx} idx={blogInfo.title} blogInfo={blogInfo} />)
    return (
        <div className="row justify-content-center py-5">
            {content}
        </div>
    );
}

export default Blogs;