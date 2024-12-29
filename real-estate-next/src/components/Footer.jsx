'use client';
import React, { useState } from 'react';
import logo from '../assets/imgs/logo@2x.png';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [email, setEmail] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <footer className="secondary-bg py-5">
      <div className="container">
        {/* Upper section */}
        <div className="row justify-content-around align-items-center pb-3">
          {/* Logo */}
          <div className="col-lg-7 col-md-5 col-12">
            <div>
            <Image src={logo} alt="Logo" width="150px" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 col-md-5 col-12 d-flex justify-content-between flex-wrap py-3 py-lg-0">
            <article className="d-flex align-items-center my-1 align-self-end">
              <FontAwesomeIcon icon={faPhone} className="fs-2 me-2 primary-text" />
              <div className="vr mx-3 white-bg"></div>
              <div className="text">
                <p className="text-color m-0">Call us</p>
                <p className="white-text">(603) 555-0123</p>
              </div>
            </article>
            <article className="d-flex align-items-center my-1 align-self-end">
              <FontAwesomeIcon icon={faEnvelope} className="fs-2 me-2 primary-text" />
              <div className="vr mx-3 white-bg"></div>
              <div className="text">
                <p className="text-color m-0">Need live help</p>
                <p className="white-text">proty-support@gmail.com</p>
              </div>
            </article>
          </div>
        </div>

        <hr className="secondary-border" />

        {/* Middle section */}
        <div className="d-flex justify-content-between flex-wrap py-3">
          {/* About Us */}
          <article>
            <h6 className="white-text m-2">About us</h6>
            <ul className="list-unstyled text-color">
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Contact</span></li>
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Why choose us?</span></li>
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Customer reviews</span></li>
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span>Our Team</span></li>
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Careers with reality</span></li>
              <li><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Work with us</span></li>
            </ul>
          </article>

          {/* Popular Houses */}
          <article>
            <h6 className="white-text m-2 ">Popular house</h6>
            <ul className="list-unstyled text-color">
              <li className="m-2"><Link href="#" className="footer-text">#Penthouses</Link></li>
              <li className="m-2"><Link href="#" className="footer-text">#Villas</Link></li>
              <li className="m-2"><Link href="#" className="footer-text">#Smart home</Link></li>
              <li className="m-2"><Link href="#" className="footer-text">#Apartments</Link></li>
              <li className="m-2"><Link href="#" className="footer-text">#Office</Link></li>
              <li className="m-2"><Link href="#" className="footer-text">#Bungalow</Link></li>
            </ul>
          </article>

          {/* Quick Links */}
          <article>
            <h6 className="white-text m-2">Quick links</h6>
            <ul className="list-unstyled text-color">
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Contact</span></li>
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Why choose us?</span></li>
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Customer reviews</span></li>
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Our Team</span></li>
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Careers with reality</span></li>
              <li className="m-2"><FontAwesomeIcon icon={faCaretRight} className="fs-2 me-2 primary-text" /><span className="footer-text">Work with us</span></li>
            </ul>
          </article>

          {/* Newsletter */}
          <article className="text-color d-flex flex-column justify-content-between">
            <h6 className="white-text">Newsletter</h6>
            <label htmlFor="Email" className="form-label">Sign up to receive the latest articles</label>
            <input 
              type="email" 
              id="Email" 
              placeholder="Your email address" 
              className="bg-transparent form-control secondary-border"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="checkbox d-flex mt-1">
              <input 
                type="checkbox" 
                id="Terms" 
                className="form-check-input bg-transparent secondary-border me-1"
                checked={agreeTerms}
                onChange={handleAgreeTermsChange}
              />
              <label htmlFor="Terms" className="form-label">I have read and agree to the terms & conditions</label>
            </div>
            <button className="btn white-text primary-bg px-4 py-2">SUBSCRIBE</button>
          </article>
        </div>

        <hr className="secondary-border" />

        {/* Bottom section */}
        <div className="d-flex justify-content-between align-items-center flex-wrap text-color">
          <p className="footer-text">copyright &copy; <b>PROTY - REAL ESTATE.</b> Designed & Developed by Themesflat</p>
          <div className="d-flex flex-wrap align-items-center">
            <p className="fw-bold white-text me-3 followus-text">FOLLOW US</p>
            <ul className="list-unstyled d-flex">
              <li className="me-2 secondary-border rounded-circle">
                <Link href="#"><FontAwesomeIcon icon={faFacebook} className='white-text m-3' /></Link>
              </li>
              <li className="me-2 secondary-border rounded-circle">
                <Link href="#"><FontAwesomeIcon icon={faTwitter} className='white-text m-3' /></Link>
              </li>
              <li className="me-2 secondary-border rounded-circle">
                <Link href="#"><FontAwesomeIcon icon={faLinkedin} className='white-text m-3' /></Link>
              </li>
              <li className="me-2 secondary-border rounded-circle">
                <Link href="#"><FontAwesomeIcon icon={faInstagram} className='white-text m-3' /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
