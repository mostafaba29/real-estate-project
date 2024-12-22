// src/components/SearchListing.jsx
import React from 'react';
import '../assets/css/indexstyle.css';  

function SearchListing() {
  // You can create an array to store the listing items dynamically if needed
  const listings = [
    { id: 1, icon: 'fa-city', title: 'Apartment', properties: '234 Property' },
    { id: 2, icon: 'fa-house', title: 'Villa', properties: '234 Property' },
    { id: 3, icon: 'fa-city', title: 'Studio', properties: '234 Property' },
    { id: 4, icon: 'fa-house', title: 'Office', properties: '234 Property' },
    { id: 5, icon: 'fa-hotel', title: 'Townhouse', properties: '234 Property' },
    { id: 6, icon: 'fa-building', title: 'Commercial', properties: '234 Property' },
  ];

  return (
    <section id="listing" className="search my-5 py-3 text-center container">
      <h3>Try Searching For</h3>
      <p className="secondary-color">
        Thousands of luxury home enthusiasts just like you have found their dream home
      </p>
      <div className="container">
        <div className="row justify-content-center">
          {listings.map((listing) => (
            <div key={listing.id} className="col-sm-6 col-md-4 col-lg-2 p-2">
              <div className="search-icon p-2">
                <div className="icon">
                  <i className={`fa-solid ${listing.icon}`}></i>
                </div>
                <h5>{listing.title}</h5>
                <p>{listing.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchListing;
