import React, { useState } from 'react';

const AmenitiesForm = () => {
  // State to manage the selected amenities
  const [amenities, setAmenities] = useState({
    smokeAlarm: false,
    selfCheckin: false,
    carbonMonoxide: false,
    securityCameras: false,
    hangers: false,
    extraPillows: false,
    bedLinen: false,
    tv: false,
    refrigerator: false,
    dishwasher: false,
    microwave: false,
    coffeeMaker: false,
  });

  // Handler for checkbox changes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [id]: checked,
    }));
  };

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h4 className="fw-bold">Amenities*</h4>
      <div className="row">
        {/* Home Safety */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <p className="form-label fw-bold">Home safety:</p>
            <input
              type="checkbox"
              name="amenities"
              id="smokeAlarm"
              className="form-check-input"
              checked={amenities.smokeAlarm}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="smokeAlarm">Smoke alarm</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="selfCheckin"
              className="form-check-input"
              checked={amenities.selfCheckin}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="selfCheckin">Self check-in with lockbox</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="carbonMonoxide"
              className="form-check-input"
              checked={amenities.carbonMonoxide}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="carbonMonoxide">Carbon monoxide alarm</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="securityCameras"
              className="form-check-input"
              checked={amenities.securityCameras}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="securityCameras">Security cameras</label>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <p className="form-label fw-bold">Bedrooms:</p>
            <input
              type="checkbox"
              name="amenities"
              id="hangers"
              className="form-check-input"
              checked={amenities.hangers}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="hangers">Hangers</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="extraPillows"
              className="form-check-input"
              checked={amenities.extraPillows}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="extraPillows">Extra pillows and blankets</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="bedLinen"
              className="form-check-input"
              checked={amenities.bedLinen}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="bedLinen">Bed linens</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="tv"
              className="form-check-input"
              checked={amenities.tv}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="tv">TV with standard cable</label>
          </div>
        </div>

        {/* Kitchen */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <p className="form-label fw-bold">Kitchen:</p>
            <input
              type="checkbox"
              name="amenities"
              id="refrigerator"
              className="form-check-input"
              checked={amenities.refrigerator}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="refrigerator">Refrigerator</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="dishwasher"
              className="form-check-input"
              checked={amenities.dishwasher}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="dishwasher">Dishwasher</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="microwave"
              className="form-check-input"
              checked={amenities.microwave}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="microwave">Microwave</label>
            <br />
            <input
              type="checkbox"
              name="amenities"
              id="coffeeMaker"
              className="form-check-input"
              checked={amenities.coffeeMaker}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="coffeeMaker">Coffee maker</label>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AmenitiesForm;
