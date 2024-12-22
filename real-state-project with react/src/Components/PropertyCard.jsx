import React from 'react';
import '../assets/css/mystyle.css';
import myproperty from "../assets/imgs/studio/studio_2.jpg"
const PropertyCard = () => {
  return (
    <div className="col-md-6 col-lg-4 py-4">
      <div className="card position-relative">
        <img
          src={myproperty}
          alt="Property"
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title">
            <h3>Elegant Studio Flat</h3>
          </div>
          <div className="card-text">
            <p>
              <i className="fa-solid fa-location-dot"></i> 102 Ingraham St,
              Brooklyn, NY 1234
            </p>
            <p>
              <span>3</span> Beds <span>3</span> Baths <span>4,043</span> Sqft
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <span className="price">$8,805</span>
            <span>
              <i className="fa-solid fa-repeat"></i> compare
            </span>
            <a href="./property-details.html" className="navbarbutton">
              Details
            </a>
          </div>
          <div className="button position-absolute top-0 right-50 py-3">
            <button className="btn-feature">Featured</button>
            <button className="btn-sale">For Sale</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
