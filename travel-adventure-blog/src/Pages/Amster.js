import React from 'react';
import amsterImage from '../Images/Amsterdam, Netherlands_.jpg';
import Footer from '../Components/Footer';

const Amster = () => {
  return (
    <div id='amster' className="relative min-h-screen">
    <div className='container mx-auto px-4 py-8 '>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Title */}
        <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
           Amsterdam
          </h1>
        </div>

        {/* Middle Column: Image */}
        <div className="flex items-center justify-center mb-8 md:mb-0">
          <img
            src={amsterImage}
            alt="Amsterdam"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center border border-gray-300 p-4 rounded-lg">
          <p className="text-lg leading-relaxed mb-4">
          Amsterdam is the capital city of the Netherlands, known for its historic canals, vibrant cultural scene, and liberal atmosphere. Famous for its picturesque architecture, world-class museums like the Rijksmuseum and Van Gogh Museum, and cycling-friendly streets, Amsterdam is a major tourist destination. The city also has a rich history of trade and commerce, which is reflected in its diverse population and bustling marketplaces.
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Amster;
