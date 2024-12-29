import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Breadcrumb() {
  return (
    <div className="m-3 px-5 p-0 mt-5">
      <Link href="/" className="breadcrumbhome ps-1 ms-5">Home</Link>
      <span><FontAwesomeIcon icon={faAngleRight} className='me-2' /></span>
      <Link href="/property-listing" className="breadcrumbproperty">Property Listing</Link>
    </div>
  );
}

export default Breadcrumb;
