import React, { useState } from 'react';
import Avatar from '@/assets/imgs/avatars/avatar1.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSeller = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    agentHelp: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending message to API)
    console.log('Message Sent:', formData);
    setFormData({
      fullName: '',
      agentHelp: '',
    });
  };

  return (
    <div className="contact-seller p-4">
      <h3>Contact Sellers</h3>
      <div className="media d-flex">
        <Image
          src={Avatar}
          alt="Seller Image"
          className="mt-3"
        />
        <div className="media-body m-3">
          <p className="contact-text">
            <b>Shara Conner</b>
          </p>
          <p className="contact-text">
            <FontAwesomeIcon icon={faPhone} className="me-1" />
            <span className="contact-text-color">1-333-345-6868</span>
          </p>
          <p className="contact-text">
           <FontAwesomeIcon icon={faEnvelope} className='me-1' /> themesflat@gmail.com
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control borderradius"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control borderradius"
            id="agentHelp"
            name="agentHelp"
            rows="3"
            value={formData.agentHelp}
            onChange={handleInputChange}
            placeholder="How can an agent help"
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactSeller;
