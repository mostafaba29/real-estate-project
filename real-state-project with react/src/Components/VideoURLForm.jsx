import React, { useState } from 'react';

const VideoURLForm = () => {
  // State to store the video URL input value
  const [videoURL, setVideoURL] = useState('');

  // Handler for input field change
  const handleInputChange = (e) => {
    setVideoURL(e.target.value);  // Update the video URL state with the input value
  };

  return (
    <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Virtual Tour 360</h3>
      <div className="row">
        {/* Video URL Input */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="url" className="form-label fw-bold">
              Video URL:
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              placeholder="YouTube, Vimeo URL"
              value={videoURL}  // Bind the input value to state
              onChange={handleInputChange}  // Update state on input change
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default VideoURLForm;
