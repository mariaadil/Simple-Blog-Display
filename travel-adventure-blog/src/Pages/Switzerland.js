import React from 'react';
import switzerlandImage from '../Images/download (1).jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Switzerland = () => {
  return (
    <div id='switzerland' className="relative min-h-screen">
   <Navbar/>
    <div className='container mx-auto px-4 py-8 '>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Title */}
        <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800">
           Switzerland
          </h1>
        </div>

        {/* Middle Column: Image */}
        <div className="flex items-center justify-center mb-8 md:mb-0">
          <img
            src={switzerlandImage}
            alt="Amsterdam"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center border border-gray-300 p-4 rounded-lg">
          <p className="text-lg leading-relaxed mb-4">
          Switzerland is a mountainous, landlocked country in Central Europe, known for its stunning natural landscapes, including the Alps and numerous lakes. It is famous for its neutrality, high standard of living, and strong financial sector, as well as its contributions to chocolate, cheese, and precision instruments like watches. The country has four official languages: German, French, Italian, and Romansh. Its cities, such as Zurich, Geneva, and Bern, blend rich cultural heritage with modern amenities.
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Switzerland;
