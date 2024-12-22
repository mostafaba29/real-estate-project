import React, { useState } from 'react';

const AgentInformationForm = () => {
  // State for selecting agent type
  const [selectedAgentType, setSelectedAgentType] = useState('');

  // Handle change for agent type selection (radio buttons)
  const handleAgentTypeChange = (e) => {
    setSelectedAgentType(e.target.value);
  };

  // Handler for 'Add Property' button click
  const handleAddProperty = () => {
    console.log('Add Property clicked');
  };

  // Handler for 'Save & Preview' button click
  const handleSaveAndPreview = () => {
    console.log('Save & Preview clicked');
  };

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Agent Information</h3>
      <div className="row">
        {/* Agent Information Section */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="agent" className="form-label">
              Choose type agent information?
            </label>
            <br />
            <input
              type="radio"
              name="agent"
              id="current"
              className="form-check-input bor"
              value="current"
              checked={selectedAgentType === 'current'}
              onChange={handleAgentTypeChange}
            />
            <label htmlFor="current">Your current user information</label>
            <br />
            <input
              type="radio"
              name="agent"
              id="other"
              className="form-check-input"
              value="other"
              checked={selectedAgentType === 'other'}
              onChange={handleAgentTypeChange}
            />
            <label htmlFor="other">Other contact</label>
          </div>
        </div>
      </div>
      </div>
      {/* Buttons Section */}
      <div className="d-flex justify-content-center pb-2">
        <button
          className="btn fw-bold primary-bg white-text px-4 py-2 me-3"
          onClick={handleAddProperty}
        >
          Add Property
        </button>
        <button
          className="btn fw-bold primary-text primary-border px-4 py-2"
          onClick={handleSaveAndPreview}
        >
          Save & Preview
        </button>
      </div>

      {/* Footer */}
      <p className="text-color">Copyright © 2024 Popty</p>
    
    </div>
    </div>
  );
};

export default AgentInformationForm;
