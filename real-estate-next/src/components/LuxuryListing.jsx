
import React from 'react';
import '../assets/css/indexstyle.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import listingimage from "../assets/imgs/studio/studio_1.jpg";
import Link from 'next/link';

function LuxuryListing() {
  const listings = [
    {
      id: 1,
      image: './assets/imgs/studio/studio_1.jpg',
      title: 'Elegant studio flat',
      location: '102 Ingraham St, Brooklyn, NY 1234',
      beds: 3,
      baths: 3,
      sqft: '4,043',
      price: '$8,805',
    },
    {
      id: 2,
      image: './assets/imgs/studio/studio_1.jpg',
      title: 'Elegant studio flat',
      location: '102 Ingraham St, Brooklyn, NY 1234',
      beds: 3,
      baths: 3,
      sqft: '4,043',
      price: '$8,805',
    },
    {
      id: 3,
      image: './assets/imgs/studio/studio_1.jpg',
      title: 'Elegant studio flat',
      location: '102 Ingraham St, Brooklyn, NY 1234',
      beds: 3,
      baths: 3,
      sqft: '4,043',
      price: '$8,805',
    },
  ];

  return (
    <section className="my-5 py-3 list-studio">
         <div className="text-center">
        <h2>Today's Luxury Listing</h2>
        <p>Thousands of luxury home enthusiasts just like you visit our website</p>
      </div>
      <br />
      <div className="container">
        {/* First Row of Cards */}
        <div className="row my-3 justify-content-between">
          {listings.map((listing) => (
            <section key={listing.id} className="col-md-6 col-lg-4 col-sm-12 list-studio mb-4">
              <div className="card position-relative">
                <Image src={listingimage} alt={listing.title} className="card-Image-top" width={700} />
                <div className="card-body">
                  <div className="card-title">
                    <h6>{listing.title}</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      <FontAwesomeIcon icon={faLocationDot} /> {listing.location}
                    </p>
                    <p>
                      <span>{listing.beds}</span> Beds <span>{listing.baths}</span> Baths <span>{listing.sqft}</span> Sqft
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{listing.price}</span>
                    <span>
                      <FontAwesomeIcon icon={faArrowAltCircleRight} /> compare
                    </span>
                    <Link href="/Listing" className="navbarbutton">Details</Link>
                  </div>
                  <div className="button position-absolute top-0 right-50">
                    <button className="btn-feature">Featured</button>
                    <button className="btn-sale">For Sale</button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Second Row of Cards */}
        <div className="row my-3 justify-content-between">
          {listings.map((listing) => (
            <section key={listing.id} className="col-md-6 col-lg-4 col-sm-12 list-studio mb-4">
              <div className="card position-relative">
                <Image src={listingimage} alt={listing.title} className="card-Image-top" width={700} />
                <div className="card-body">
                  <div className="card-title">
                    <h6>{listing.title}</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      <FontAwesomeIcon icon={faMapLocationDot} /> {listing.location}
                    </p>
                    <p>
                      <span>{listing.beds}</span> Beds <span>{listing.baths}</span> Baths <span>{listing.sqft}</span> Sqft
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{listing.price}</span>
                    <span>
                      <FontAwesomeIcon icon={faArrowAltCircleRight} /> compare
                    </span>
                    <Link href="/listing" className="navbarbutton">Details</Link>
                  </div>
                  <div className="button position-absolute top-0 right-50">
                    <button className="btn-feature">Featured</button>
                    <button className="btn-sale">For Sale</button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LuxuryListing;

