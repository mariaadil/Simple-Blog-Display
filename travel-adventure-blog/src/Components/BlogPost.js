import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default BlogPost;
