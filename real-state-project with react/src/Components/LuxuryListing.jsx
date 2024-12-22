// src/components/LuxuryListing.jsx
import React from 'react';
import '../assets/css/indexstyle.css';
import listingimage from "../assets/imgs/studio/studio_1.jpg";

function LuxuryListing() {
  // Sample data for the listings. You can later replace this with dynamic data
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
    // Add more listings as needed
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
                <img src={listingimage} alt={listing.title} className="card-img-top" />
                <div className="card-body">
                  <div className="card-title">
                    <h6>{listing.title}</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      <i className="fa-solid fa-location-dot"></i> {listing.location}
                    </p>
                    <p>
                      <span>{listing.beds}</span> Beds <span>{listing.baths}</span> Baths <span>{listing.sqft}</span> Sqft
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{listing.price}</span>
                    <span>
                      <i className="fas fa-long-arrow-alt-right"></i> compare
                    </span>
                    <a href="./pages/property-details.html" className="navbarbutton">Details</a>
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
                <img src={listingimage} alt={listing.title} className="card-img-top" />
                <div className="card-body">
                  <div className="card-title">
                    <h6>{listing.title}</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      <i className="fa-solid fa-location-dot"></i> {listing.location}
                    </p>
                    <p>
                      <span>{listing.beds}</span> Beds <span>{listing.baths}</span> Baths <span>{listing.sqft}</span> Sqft
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="price">{listing.price}</span>
                    <span>
                      <i className="fas fa-long-arrow-alt-right"></i> compare
                    </span>
                    <a href="./pages/property-details.html" className="navbarbutton">Details</a>
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

