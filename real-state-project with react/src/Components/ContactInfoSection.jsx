import React from 'react';
import houseImage from '../assets/imgs/houses/house3.jpg'; // Adjust the path as necessary

const ContactInfoSection = () => {
  return (
    <section className="contact-info-section container">
      <div className="row">
        <div className="contact-info col-6">
          <h1 className="contact-header">
            We provide the most suitable and quality real estate.
          </h1>
          <p className="vivid-text">
            Estimate your payment with our easy-to-use loan calculator. Then get pre-qualified to buy by a local lender.
          </p>
          <div className="adresses">
            <div className="adress-item">
              <i className="fa-solid fa-map fa-xl"></i>
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p>102 Ingraham St, Brooklyn, NY 11237</p>
              </div>
            </div>
            <div className="adress-item">
              <i className="fas fa-phone fa-xl"></i>
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p className="orange-info big">(603) 555-0123</p>
              </div>
            </div>
            <div className="adress-item">
              <i className="fas fa-envelope fa-xl"></i>
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p className="orange-info">themsflat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <img src={houseImage} alt="House" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
