import React, { useState } from 'react';
import map from "../assets/imgs/map.jpg";
const ContactForm = () => {
  // State to handle form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add more logic here to send data to a server or display a message.
  };

  return (
    <section className="map-section">
      <img src={map} alt="map" className="map" />
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="section-header">We Would Love to Hear From You</h2>
        <p className="vivid-text">
          We'll get to know you to understand your selling goals, explain the selling process so you know what to expect.
        </p>
        <div className="form-inputs">
          <div>
            <label htmlFor="name" className="label-style">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input-style"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="label-style">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-style"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="label-style">Phone number:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="input-style"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="interest" className="label-style">What are you interested in?</label>
            <select
              id="interest"
              className="input-style"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="" disabled>Select</option>
              <option value="selling">Selling</option>
              <option value="buying">Buying</option>
              <option value="renting">Renting</option>
            </select>
          </div>
        </div>
        <label htmlFor="message" className="label-style">Your Message:</label>
        <textarea
          id="message"
          className="message-input input-style"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="btn-primary">Contact our experts</button>
      </form>
    </section>
  );
};

export default ContactForm;
