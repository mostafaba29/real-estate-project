import React, { useState } from 'react';

const AdditionalInfoForm = () => {
  // State to manage form inputs
  const [propertyType, setPropertyType] = useState('none');
  const [propertyStatus, setPropertyStatus] = useState('none');
  const [propertyLabel, setPropertyLabel] = useState('none');
  const [size, setSize] = useState('');
  const [landArea, setLandArea] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [rooms, setRooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garages, setGarages] = useState('');
  const [garageSize, setGarageSize] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');

  // Handlers for input changes
  const handlePropertyTypeChange = (e) => setPropertyType(e.target.value);
  const handlePropertyStatusChange = (e) => setPropertyStatus(e.target.value);
  const handlePropertyLabelChange = (e) => setPropertyLabel(e.target.value);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleLandAreaChange = (e) => setLandArea(e.target.value);
  const handlePropertyIdChange = (e) => setPropertyId(e.target.value);
  const handleRoomsChange = (e) => setRooms(e.target.value);
  const handleBedroomsChange = (e) => setBedrooms(e.target.value);
  const handleBathroomsChange = (e) => setBathrooms(e.target.value);
  const handleGaragesChange = (e) => setGarages(e.target.value);
  const handleGarageSizeChange = (e) => setGarageSize(e.target.value);
  const handleYearBuiltChange = (e) => setYearBuilt(e.target.value);

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Additional Information</h3>
      <div className="row">
        {/* Property Type */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="property-type" className="form-label fw-bold">
              Property Type:*
            </label>
            <select
              className="form-select"
              id="property-type"
              value={propertyType}
              onChange={handlePropertyTypeChange}
            >
              <option value="none">Choose</option>
              <option value="apartment">Apartments</option>
              <option value="villas">Villas</option>
            </select>
          </div>
        </div>

        {/* Property Status */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="property-status" className="form-label fw-bold">
              Property Status:*
            </label>
            <select
              className="form-select"
              id="property-status"
              value={propertyStatus}
              onChange={handlePropertyStatusChange}
            >
              <option value="none">Choose</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>

        {/* Property Label */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="property-label" className="form-label fw-bold">
              Property Label:*
            </label>
            <select
              className="form-select"
              id="property-label"
              value={propertyLabel}
              onChange={handlePropertyLabelChange}
            >
              <option value="none">Choose</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>

        {/* Size */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="size" className="form-label fw-bold">
              Size (SqFt):*
            </label>
            <input
              type="text"
              className="form-control"
              id="size"
              value={size}
              onChange={handleSizeChange}
            />
          </div>
        </div>

        {/* Land Area */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="land-area" className="form-label fw-bold">
              Land Area (SqFt):*
            </label>
            <input
              type="text"
              className="form-control"
              id="land-area"
              value={landArea}
              onChange={handleLandAreaChange}
            />
          </div>
        </div>

        {/* Property ID */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="property-id" className="form-label fw-bold">
              Property Id:*
            </label>
            <input
              type="text"
              className="form-control"
              id="property-id"
              value={propertyId}
              onChange={handlePropertyIdChange}
            />
          </div>
        </div>

        {/* Rooms */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="rooms" className="form-label fw-bold">
              Rooms:*
            </label>
            <input
              type="text"
              className="form-control"
              id="rooms"
              value={rooms}
              onChange={handleRoomsChange}
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="bedrooms" className="form-label fw-bold">
              Bedrooms:*
            </label>
            <input
              type="text"
              className="form-control"
              id="bedrooms"
              value={bedrooms}
              onChange={handleBedroomsChange}
            />
          </div>
        </div>

        {/* Bathrooms */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="bathrooms" className="form-label fw-bold">
              Bathrooms:*
            </label>
            <input
              type="text"
              className="form-control"
              id="bathrooms"
              value={bathrooms}
              onChange={handleBathroomsChange}
            />
          </div>
        </div>

        {/* Garages */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="garages" className="form-label fw-bold">
              Garages:*
            </label>
            <input
              type="text"
              className="form-control"
              id="garages"
              value={garages}
              onChange={handleGaragesChange}
            />
          </div>
        </div>

        {/* Garage Size */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="garage-size" className="form-label fw-bold">
              Garage Size (SqFt):*
            </label>
            <input
              type="text"
              className="form-control"
              id="garage-size"
              value={garageSize}
              onChange={handleGarageSizeChange}
            />
          </div>
        </div>

        {/* Year Built */}
        <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="year-built" className="form-label fw-bold">
              Year Built:*
            </label>
            <input
              type="text"
              className="form-control"
              id="year-built"
              value={yearBuilt}
              onChange={handleYearBuiltChange}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AdditionalInfoForm;
