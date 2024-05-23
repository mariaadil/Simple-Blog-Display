import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
