import React, { useEffect, useState } from 'react';
import './App.css';
import BlogList from './Components/BlogList';
import postsData from './data/Posts.json';
import Navbar from './Components/Navbar';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate asynchronous loading of posts data
    setTimeout(() => {
      setPosts(postsData);
    }, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-8">
        <BlogList posts={posts} />
      </main>
    </div>
  );
};

export default App;