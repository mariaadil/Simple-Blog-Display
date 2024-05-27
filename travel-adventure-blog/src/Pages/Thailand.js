import React from 'react';
import thailandImage from '../Images/manifest.jpg';
import Footer from '../Components/Footer';

const Thailand = () => {
  return (
    <div id='thailand' className="relative min-h-screen">
    <div className='container mx-auto px-4 py-8 '>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Title */}
        <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
           Thailand
          </h1>
        </div>

        {/* Middle Column: Image */}
        <div className="flex items-center justify-center mb-8 md:mb-0">
          <img
            src={thailandImage}
            alt="Amsterdam"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center border border-gray-300 p-4 rounded-lg">
          <p className="text-lg leading-relaxed mb-4">
          Thailand is a Southeast Asian country known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. The capital, Bangkok, is a bustling metropolis famous for its vibrant street life and cultural landmarks like the Grand Palace and Wat Arun. Thailand's diverse regions offer a range of experiences, from the mountainous landscapes and hill tribes of the north to the stunning islands and pristine beaches in the south. The country is also renowned for its rich culinary traditions and welcoming hospitality.
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Thailand;
