import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
const Property = () => {
  return (
    <div className="property-details shadow p-4">
      <h2>Property Details</h2>
      <p>
        3 Units in North Hollywood with upside potential through construction of an ADU (buyer to verify). Unit mix consists of (3) 3+1 bath units. The building is Link total of 2,660 square feet and situated on Link 6,001 square foot lot. Easy access to the 101, 170, and 134 freeways. The building is separately metered for gas and electricity.
      </p>
      <Link href="#" className="read-more">Read More <FontAwesomeIcon icon={faCircleArrowDown} /></Link>
      <div className="property mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumn">
                <p>ID:</p>
                <p>Price:</p>
                <p>Size:</p>
                <p>Rooms:</p>
                <p>Baths:</p>
              </div>
              <div className="text-color">
                <p>#1234</p>
                <p>$7,500</p>
                <p>150 sqft</p>
                <p>9</p>
                <p>3</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumn">
                <p>ID:</p>
                <p>Price:</p>
                <p>Size:</p>
                <p>Rooms:</p>
                <p>Baths:</p>
              </div>
              <div className="text-color">
                <p>#1234</p>
                <p>$7,500</p>
                <p>150 sqft</p>
                <p>9</p>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
