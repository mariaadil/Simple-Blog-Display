import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GuideIceland = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 my-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
          <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
          Welcome to Iceland
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Iceland, known as the land of fire and ice, is famous for its stunning landscapes, geothermal wonders, and unique cultural heritage. From the otherworldly beauty of the Blue Lagoon to the majestic waterfalls of Gullfoss, Iceland offers an unforgettable experience for travelers.
        </p>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Key Attractions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-purple-600" />
              <strong>Blue Lagoon:</strong> Relax in the geothermal waters of this iconic spa.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-green-600" />
              <strong>Gullfoss:</strong> Marvel at the breathtaking beauty of this powerful waterfall.
            </li>
            {/* Add more key attractions here */}
          </ul>
        </div>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Cultural Highlights</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Iceland's rich cultural heritage is reflected in its literature, music, and traditions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Travel Tips</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Be prepared for unpredictable weather and dress in layers.</li>
            <li className="mb-2">Explore the stunning landscapes on a guided tour or self-drive adventure.</li>
            {/* Add more travel tips here */}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuideIceland;
