import React from 'react';
import tourImage from "../assets/imgs/360 virtual tour/virtual-tour.png";
const VirtualTour = () => {
  return (
    <div className="shadow virtualsection p-4">
      <h3 className="bold">360 Virtual Tour</h3><br />
      <img src={tourImage} alt="360 Virtual Tour" />
    </div>
  );
};

export default VirtualTour;
