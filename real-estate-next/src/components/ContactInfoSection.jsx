import React from 'react';
import houseImage from '@/assets/imgs/houses/house3.jpg'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
              <FontAwesomeIcon icon={faMap} size="2x" />
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p>102 Ingraham St, Brooklyn, NY 11237</p>
              </div>
            </div>
            <div className="adress-item">
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p className="orange-info big">(603) 555-0123</p>
              </div>
            </div>
            <div className="adress-item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <div className="v-break"></div>
              <div>
                <p className="adress-title">Office Address</p>
                <p className="orange-info">themsflat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <Image src={houseImage} alt="House" width={500} />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
