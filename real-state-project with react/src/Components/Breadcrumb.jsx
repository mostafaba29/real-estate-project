import React from 'react';
import { Link } from 'react-router-dom'; 

function Breadcrumb() {
  return (
    <div className="m-3 px-5 p-0 mt-5">
      <Link to="/" className="breadcrumbhome ps-1 ms-5">Home</Link>
      <span><i className="fa-solid fa-angle-right me-2"></i></span>
      <Link to="/property-listing" className="breadcrumbproperty">Property Listing</Link>
    </div>
  );
}

export default Breadcrumb;
