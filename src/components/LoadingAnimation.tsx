import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="sun">
          <div className="sun-core"></div>
          <div className="sun-ray sun-ray-1"></div>
          <div className="sun-ray sun-ray-2"></div>
          <div className="sun-ray sun-ray-3"></div>
          <div className="sun-ray sun-ray-4"></div>
        </div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </div>
      <p className="loading-text">Fetching weather data...</p>
    </div>
  );
};

export default LoadingAnimation;
