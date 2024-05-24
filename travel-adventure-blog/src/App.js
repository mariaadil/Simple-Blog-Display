import React, { useEffect, useState } from 'react';
import './App.css';
import BlogList from './Components/BlogList';
import postsData from './data/Posts.json';
import Navbar from './Components/Navbar';
import backgroundImage from './Images/Exploring Hallstatt, Austria _ Austria Winter Travel.jpg'; 

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(postsData);
    }, 0);
  }, []);

  return (
    <div className="relative">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 z-0 w-full h-3/4 object-cover"
      />
      <div className="absolute inset-0 z-10">
        <Navbar />
      </div>
      <div className="fixed inset-0 z-10">
        <Navbar />
      </div>
      <div className="my-1/3 bg-gray-100 overflow-y-auto">
        <main className="container mx-auto py-8 px-6">
          <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
          <BlogList posts={posts} />
        </main>
      </div>
    </div>
  );
};

export default App;
