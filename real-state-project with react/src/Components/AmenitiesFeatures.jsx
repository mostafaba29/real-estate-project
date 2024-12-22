import React from 'react';

const AmenitiesFeatures = () => {
  return (
    <section className="shadow amenities p-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Amenities And Features</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <ul className="amenities-list ">
            <li >Smoke alarm</li>
            <li>Carbon monoxide alarm</li>
            <li>First aid kit</li>
            <li>Self check-in with lockbox</li>
            <li>Security cameras</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="amenities-list">
            <li>Hangers</li>
            <li>Bed linens</li>
            <li>Extra pillows & blankets</li>
            <li>Iron</li>
            <li>TV with standard cable</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="amenities-list">
            <li>Refrigerator</li>
            <li>Microwave</li>
            <li>Dishwasher</li>
            <li>Coffee maker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesFeatures;
