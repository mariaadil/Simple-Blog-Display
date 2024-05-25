import React from 'react';
import amsterdamImage from '../Images/Amsterdam, Netherlands_.jpg';
import image2 from '../Images/download (1).jpg'; 
import image3 from '../Images/manifest.jpg';  
import image4 from '../Images/download (2).jpg';  

const images = [amsterdamImage, image2, image3, image4];

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <img src={images[index]} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
