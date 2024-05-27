import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GuideParis = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 my-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
          <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
          Welcome to Paris
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Paris, the capital city of France, is known for its iconic landmarks, rich history, and vibrant culture. From the Eiffel Tower to the Louvre Museum, Paris offers a multitude of attractions for visitors to explore.
        </p>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Key Attractions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-purple-600" />
              <strong>Eiffel Tower:</strong> Iconic symbol of Paris and a must-visit attraction.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-green-600" />
              <strong>Louvre Museum:</strong> Home to thousands of works of art, including the Mona Lisa.
            </li>
            {/* Add more key attractions here */}
          </ul>
        </div>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Cultural Highlights</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Paris is known for its rich cultural heritage, including its cuisine, fashion, and arts scene.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Travel Tips</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Take a leisurely stroll along the Seine River.</li>
            <li className="mb-2">Visit local markets for fresh produce and artisanal goods.</li>
            {/* Add more travel tips here */}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuideParis;
