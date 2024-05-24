import React from 'react';

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto py-8 px-6 m-28 10 28 10">
      <h1 className="text-3xl font-bold text-center mt-28">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md mt-5">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
