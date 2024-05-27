import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import postsData from './data/Posts.json';
import About from './Components/About';
import backgroundImage from './Images/TRAVEL-VLOG-PREVIEW-IMAGE.jpg';
import TravelingGuides from './Components/TravellingGuides';
import Footer from './Components/Footer';
import ThanksForVisiting from './Components/ThanksForVisiting';


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div  className="relative min-h-screen">
      <Navbar />
      <div id='home' className="w-full h-100 md:h-90 lg:h-100 relative">
      <img src={backgroundImage} alt="Background" className="w-full h-screen object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-3xl md:text-6xl lg:text-3xl text-white font-bold text-center">You will find the best travel blog here!!!!</h1>
      </div>
    </div>
      <div className="container mx-auto px-4 md:px-6">
        <div id='about' className="mt-10">
          <About />
        </div>
        <div id='destination' className="mt-10">
          <BlogList posts={posts} />
        </div>
        <div id='guides' className="mt-10">
          <TravelingGuides /> 
        </div>
        <div className="mt-10">
          <ThanksForVisiting /> 
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;