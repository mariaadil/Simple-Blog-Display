import React from 'react';
import edinburglandImage from '../Images/download (2).jpg';
import Footer from '../Components/Footer';

const Edinburg = () => {
  return (
    <div id='edinburg' className="relative min-h-screen">
    <div className='container mx-auto px-4 py-8 '>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Title */}
        <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
          Edinburg
          </h1>
        </div>

        {/* Middle Column: Image */}
        <div className="flex items-center justify-center mb-8 md:mb-0">
          <img
            src={edinburglandImage}
            alt="Amsterdam"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center border border-gray-300 p-4 rounded-lg">
          <p className="text-lg leading-relaxed mb-4">
          Edinburgh, the capital of Scotland, is renowned for its rich history, stunning architecture, and vibrant cultural scene, including world-famous festivals like the Edinburgh Festival Fringe. It houses notable landmarks such as Edinburgh Castle and the University of Edinburgh, making it a key destination for tourism and education.
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Edinburg;
