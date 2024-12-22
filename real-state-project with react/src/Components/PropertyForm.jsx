import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    address: '',
    zip: '',
    country: 'US',
    state: 'none',
    neighborhood: 'none',
    location: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-3 col-12 "></div>
        <div className="col-lg-9 col-12">
          <div className="white-bg p-4 mb-3">
            <h3 className="fw-bold">Information</h3>
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-bold">Title:*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Choose"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Description"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label fw-bold">Full Address:*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter property full address"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="zip" className="form-label fw-bold">Zip Code:*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Enter property zip code"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="country" className="form-label fw-bold">Country:*</label>
                  <select
                    className="form-select"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="state" className="form-label fw-bold">Province/State:*</label>
                  <select
                    className="form-select"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="none">None</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="neighborhood" className="form-label fw-bold">Neighborhood:*</label>
                  <select
                    className="form-select"
                    id="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                  >
                    <option value="none">None</option>
                    <option value="downtown">Downtown</option>
                    <option value="suburbs">Suburbs</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label fw-bold">Location:*</label>
                  <div className="form-control d-flex justify-content-between align-items-center ps-0 border-12">
                    <input
                      type="text"
                      className="border-0 w-100 form-control nofocus"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter property location"
                    />
                    <a href="#">
                      <i className="fa-solid fa-location-dot"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509123!2d144.96305761531633!3d-37.81362797975145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57714c14428a0e1!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1693495472997!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PropertyForm;
