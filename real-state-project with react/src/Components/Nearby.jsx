import React from 'react';

const Nearby = () => {
  return (
    <div className="shadow videosection p-4">
      <div className="row">
        <div className="col-md-12">
          <h2>What's Nearby?</h2>
          <p>
            Explore nearby amenities to precisely locate your property and
            identify surrounding conveniences, providing a comprehensive overview
            of the living environment and the property's convenience.
          </p>
        </div>
      </div>
      <div className="property mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumnnearby">
                <p>School:</p>
                <p>University:</p>
                <p>Grocery Center:</p>
                <p>Market:</p>
              </div>
              <div className="text-color">
                <p>0.7 Km</p>
                <p>1.3 Km</p>
                <p>0.6 Km</p>
                <p>1.1 Km</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumnnearby">
                <p>Hospital:</p>
                <p>Metro:</p>
                <p>Gym, Wellness:</p>
                <p>River:</p>
              </div>
              <div className="text-color">
                <p>0.7 Km</p>
                <p>1.3 Km</p>
                <p>0.6 Km</p>
                <p>1.1 Km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearby;
