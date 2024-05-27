import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GuideNorway = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-8 my-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
          <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
          Welcome to Norway
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Norway, known for its stunning fjords, northern lights, and vibrant cities, offers a unique blend of natural beauty and cultural richness. From the majestic landscapes of Lofoten to the modern architecture of Oslo, Norway has something for every traveler.
        </p>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Key Attractions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-purple-600" />
              <strong>Geirangerfjord:</strong> One of Norway's most famous fjords, known for its dramatic scenery.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-green-600" />
              <strong>Northern Lights:</strong> Witness the mesmerizing aurora borealis in the Arctic regions of Norway.
            </li>
            {/* Add more key attractions here */}
          </ul>
        </div>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Cultural Highlights</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Norway's rich cultural heritage is reflected in its music, art, and traditional festivals.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Travel Tips</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Explore the scenic hiking trails in the Norwegian wilderness.</li>
            <li className="mb-2">Experience the local cuisine, including fresh seafood and traditional dishes like lutefisk.</li>
            {/* Add more travel tips here */}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuideNorway;
