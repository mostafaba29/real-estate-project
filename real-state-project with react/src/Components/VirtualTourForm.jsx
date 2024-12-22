import React, { useState } from 'react';

const VirtualTourForm = () => {
  // State to manage the virtual tour type and embedded code
  const [tourType, setTourType] = useState('');
  const [embeddedCode, setEmbeddedCode] = useState('');

  // Handler for radio button changes
  const handleRadioChange = (e) => {
    setTourType(e.target.id);  // Set the selected radio button value
  };

  // Handler for text area change
  const handleTextChange = (e) => {
    setEmbeddedCode(e.target.value);  // Set the embedded code value
  };

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Virtual Tour 360</h3>
      <div className="row">
        {/* Virtual Tour Type */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Virtual Tour Type:
            </label>
            <br />
            <input
              type="radio"
              name="type"
              id="code"
              className="form-check-input bor"
              checked={tourType === 'code'}
              onChange={handleRadioChange}
            />
            <label htmlFor="code">Embedded code</label>
            <br />
            <input
              type="radio"
              name="type"
              id="image"
              className="form-check-input"
              checked={tourType === 'image'}
              onChange={handleRadioChange}
            />
            <label htmlFor="image">Upload Image</label>
          </div>
        </div>

        {/* Embedded Code Textarea */}
        {tourType === 'code' && (
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="tour" className="form-label fw-bold">
                Embedded code virtual 360
              </label>
              <textarea
                className="form-control"
                id="tour"
                rows="4"
                value={embeddedCode}
                onChange={handleTextChange}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default VirtualTourForm;
