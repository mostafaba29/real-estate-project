import React, { useState } from 'react';

const AboutPropertySection = () => {
  // State hooks to store form data (optional, depending on your needs)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    number: '',
    message: ''
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handler for form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
    // Add logic to handle form submission (e.g., sending data to server)
  };

  return (
    <div className="about-property shadow p-4 mt-4">
      <h4>More About This Property</h4>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <input
            type="text"
            className="form-control borderradius"
            id="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control borderradius mt-3"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control borderradius mt-3"
            id="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control borderradius mt-3"
            id="message"
            rows="3"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="contact-button mt-3">
          <i className="fa-regular fa-envelope m-2"></i> Email agent
        </button>
      </form>
    </div>
  );
};

export default AboutPropertySection;
