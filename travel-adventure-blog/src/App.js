import React, { useEffect, useState } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import postsData from './data/Posts.json';
import backgroundImage from './Images/Amsterdam, Netherlands_.jpg';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate asynchronous loading of posts data
    setTimeout(() => {
      setPosts(postsData);
    }, 0);
  }, []);

  return (
    <div className="relative">
      <BackgroundImage imageUrl={backgroundImage} />
      <Navbar />
      <div className="absolute top-16 left-0 w-full">
        <BlogList posts={posts} />
      </div>
    </div>
  );
};

export default App;
