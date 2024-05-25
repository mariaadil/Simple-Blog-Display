import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div className="w-3/3 h-1/2 relative">
      <img src={imageUrl} alt="Background" className="w-full h-1/2 object-cover" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
       
      />
    </div>
  );
};

export default BackgroundImage;