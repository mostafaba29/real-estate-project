import React from "react";
import "../assets/css/mystyle.css"
const PropertyDetails = () => {
  return (
        <div className="property-details shadow p-4 mt-3">
          {/* Property Header */}
          <div className="d-flex justify-content-between mt-2">
            <h1 className="mt-2">Elegant Studio Flat</h1>
            <h2 className="mt-2">
              $250.00 <span className="month">/month</span>
            </h2>
          </div>
          <hr />
          {/* Property Location and Details */}
          <div className="d-flex justify-content-between ">
            <div className="d-flex flex-column">
              <p className="text-color">
                <i className="fa-solid fa-location-dot "></i> 102 102 Ingraham St, Brooklyn, NY 11237
              </p>
              <div className="d-flex">
                <p className="text-color p-2">
                  <span className="number-color">3</span> Bed
                </p>
                <p className="text-color p-2">
                  <span className="number-color">3</span> Bath
                </p>
                <p className="text-color p-2">
                  <span className="number-color">4,043</span> SqFt
                </p>
              </div>
            </div>
            {/* Property Action Buttons */}
            <div>
              <button className="iconbuttons m-2">
                <i className="fa-regular fa-heart details-icon"></i>
              </button>
              <button className="iconbuttons m-2">
                <i className="fa-solid fa-left-right details-icon"></i>
              </button>
              <button className="iconbuttons m-2">
                <i className="fa-solid fa-print details-icon"></i>
              </button>
              <button className="iconbuttons m-2">
                <i className="fa-solid fa-share-nodes details-icon"></i>
              </button>
            </div>
          </div>
          {/* Group 1 Icons */}
          <div className="d-flex flex-wrap">
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-house more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">ID:</span>
                <br /> 2297
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-filter more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Type:</span>
                <br /> House
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-house more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Garages:</span>
                <br /> 1
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-bed more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">BedRooms:</span>
                <br /> 2 Rooms
              </p>
            </div>
          </div>
          {/* Group 2 Icons */}
          <div className="d-flex flex-wrap">
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-restroom more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Bathrooms:</span>
                <br /> 2
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-filter more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Landsize:</span>
                <br /> 2,000 Sqft
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-house more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Year build:</span>
                <br /> 2023
              </p>
            </div>
            <div className="d-flex col-sm-6 col-md-3 mb-2">
              <button className="button-card m-1">
                <i className="fa-solid fa-bed more-icon"></i>
              </button>
              <p className="m-2">
                <span className="text-color">Size:</span>
                <br /> 900 sqft
              </p>
            </div>
          </div>
          {/* Ask a Question Button */}
          <button className="askbutton mt-4">Ask a question</button>
        </div>
  );
};

export default PropertyDetails;
