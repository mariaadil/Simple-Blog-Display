import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const GuideAmster = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8 my-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
          <FaMapMarkerAlt className="inline mr-2 text-blue-600" />
          Welcome to Amsterdam
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Amsterdam, the capital city of the Netherlands, is known for its historic canals, vibrant cultural scene, and liberal atmosphere. Famous for its picturesque architecture, world-class museums like the Rijksmuseum and Van Gogh Museum, and cycling-friendly streets, Amsterdam is a major tourist destination.
        </p>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Key Attractions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-purple-600" />
              <strong>Rijksmuseum:</strong> Home to a vast collection of Dutch Golden Age paintings.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-green-600" />
              <strong>Van Gogh Museum:</strong> Dedicated to the works of Vincent van Gogh.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-yellow-600" />
              <strong>Anne Frank House:</strong> A museum dedicated to the Jewish wartime diarist Anne Frank.
            </li>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-red-600" />
              <strong>Canal Cruise:</strong> Explore the city's famous canals.
            </li>
          </ul>
        </div>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Cultural Highlights</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Amsterdam hosts numerous cultural events and festivals throughout the year, including the King's Day celebrations, Amsterdam Dance Event, and the Tulip Festival.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">Travel Tips</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Rent a bike to explore the city like a local.</li>
            <li className="mb-2">Try local foods such as stroopwafels, herring, and Dutch cheese.</li>
            <li className="mb-2">Visit during spring to see the famous tulips in bloom.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuideAmster;
