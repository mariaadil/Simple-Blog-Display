import React from 'react';
import aboutPic from '../Images/istockphoto-1285301614-612x612.jpg'

const About = () => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-6"> {/* Decreased top and bottom padding */}
      <h1 className="text-3xl font-bold text-center mb-8">ME!.. WHO?</h1>
      <div className="max-w-screen-md mx-auto md:flex md:space-x-4">
        <div className="md:w-1/2 mb-2 md:mb-0 flex items-center"> {/* Decreased bottom margin */}
          <img src={aboutPic} alt="Profile" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-gray-800 mb-2"> {/* Decreased top and bottom margin */}
            Hi there! I'm Maria, a passionate traveler who loves exploring new destinations and experiencing different cultures.
            I've been fortunate to visit numerous countries and immerse myself in diverse landscapes, cuisines, and traditions.
            Through this blog, I aim to share my adventures, insights, and tips with fellow travelers, inspiring others to embark on their own journeys and discover the beauty of our world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
