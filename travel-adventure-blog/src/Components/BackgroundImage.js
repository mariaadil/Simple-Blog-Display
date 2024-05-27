import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div className="w-3/3 h-1/2 relative">
      <img src={imageUrl} alt="Background" className="w-full h-1/2 object-cover" 
      />
    </div>
  );
};

export default BackgroundImage;