import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
