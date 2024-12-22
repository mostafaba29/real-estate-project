import React, { useState } from 'react';

const FloorsForm = () => {
  // State for enabling/disabling the floor plan radio buttons
  const [enableFloorPlan, setEnableFloorPlan] = useState(null);
  
  // State for floor inputs
  const [floorData, setFloorData] = useState({
    floorName: '',
    floorPrice: '',
    floorPostfix: '',
    floorSize: '',
    sizePostfix: '',
    floorPrice2: '',
    floorPostfix2: '',
    bedrooms: '',
    bathrooms: '',
    floorImage: null,
    floorDescription: ''
  });

  // Handle change in floor data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFloorData({
      ...floorData,
      [name]: value
    });
  };

  // Handle change for radio buttons (enable/disable floor plan)
  const handleRadioChange = (e) => {
    setEnableFloorPlan(e.target.value);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFloorData({
      ...floorData,
      floorImage: file
    });
  };

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Floors</h3>
      <div className="row">
        {/* Floor Plan Section */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="plan" className="form-label">Enable Floor Plan:</label>
            <br />
            <input
              type="radio"
              name="plan"
              id="enable"
              className="form-check-input bor"
              value="enable"
              checked={enableFloorPlan === 'enable'}
              onChange={handleRadioChange}
            />
            <label htmlFor="enable">Enable</label>
            <br />
            <input
              type="radio"
              name="plan"
              id="disable"
              className="form-check-input"
              value="disable"
              checked={enableFloorPlan === 'disable'}
              onChange={handleRadioChange}
            />
            <label htmlFor="disable">Disable</label>
          </div>
        </div>

        {/* Floor 1 Details */}
        <div className="col-12">
          <div className="bg-eee p-3 border-12">
            <h4>Floor 1</h4>
            <hr />
            <div className="row">
              {/* Floor Name */}
              <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorName" className="form-label fw-bold">Floor Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="floorName"
                    name="floorName"
                    value={floorData.floorName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Price */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorPrice" className="form-label fw-bold">Floor Price (Only Digits):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="floorPrice"
                    name="floorPrice"
                    value={floorData.floorPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Postfix */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorPostfix" className="form-label fw-bold">Floor Postfix:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="floorPostfix"
                    name="floorPostfix"
                    value={floorData.floorPostfix}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Size */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorSize" className="form-label fw-bold">Floor Size (Only Digits):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="floorSize"
                    name="floorSize"
                    value={floorData.floorSize}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Size Postfix */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="sizePostfix" className="form-label fw-bold">Size Postfix:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="sizePostfix"
                    name="sizePostfix"
                    value={floorData.sizePostfix}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Price (Second instance) */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorPrice2" className="form-label fw-bold">Floor Price (Only Digits):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="floorPrice2"
                    name="floorPrice2"
                    value={floorData.floorPrice2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Postfix (Second instance) */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorPostfix2" className="form-label fw-bold">Floor Postfix:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="floorPostfix2"
                    name="floorPostfix2"
                    value={floorData.floorPostfix2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Bedrooms */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="bedrooms" className="form-label fw-bold">Bedrooms:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="bedrooms"
                    name="bedrooms"
                    value={floorData.bedrooms}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Bathrooms */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="bathrooms" className="form-label fw-bold">Bathrooms:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="bathrooms"
                    name="bathrooms"
                    value={floorData.bathrooms}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Floor Image */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorImage" className="form-label fw-bold ">Floor Image:</label>
                  <div className="white-bg p-4 form-control">
                    <input
                      type="file"
                      id="floorImage"
                      className="form-control primary-bg"
                      onChange={handleFileChange}
                    />
                    
                  </div>
                </div>
              </div>

              {/* Floor Description */}
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div className="mb-3">
                  <label htmlFor="floorDescription" className="form-label fw-bold">Description:</label>
                  <textarea
                    className="form-control"
                    id="floorDescription"
                    name="floorDescription"
                    rows="3"
                    value={floorData.floorDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Add Button */}
              <div className="col-12">
                <div className="mb-3 text-center py-4">
                  <i className="fa-solid fa-plus p-4 fs-3 primary-border primary-text rounded-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FloorsForm;
