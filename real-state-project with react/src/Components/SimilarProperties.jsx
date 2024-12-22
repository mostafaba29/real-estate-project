import React from 'react';
import studioImage1 from '../assets/imgs/studio/studio_1.jpg';
import { Link } from 'react-router-dom'; 
const SimilarProperties = () => {
  // Sample data for properties
  const properties = [
    {
      id: 1,
      image: "/assets/imgs/studio/studio_1.jpg", // Image path in public folder
      title: "Elegant studio flat",
      location: "102 Ingraham St, Brooklyn, NY 1234",
      beds: 3,
      baths: 3,
      sqft: 4043,
      price: "$8,805",
      isFeatured: true,
      isForSale: true
    },
    {
      id: 2,
      image: "/assets/imgs/studio/studio_1.jpg", // Image path in public folder
      title: "Modern Studio Apartment",
      location: "123 Park Ave, Brooklyn, NY 1234",
      beds: 2,
      baths: 2,
      sqft: 3000,
      price: "$6,500",
      isFeatured: true,
      isForSale: true
    },
    {
      id: 3,
      image: "/assets/imgs/studio/studio_1.jpg", // Image path in public folder
      title: "Luxury Penthouse",
      location: "45 Broad St, Manhattan, NY 5678",
      beds: 4,
      baths: 4,
      sqft: 5000,
      price: "$15,000",
      isFeatured: true,
      isForSale: true,
    }
  ];

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        {properties.map((property) => (
          <section key={property.id} className="col-md-4 col-sm-12 list-studio mb-4">
            <div className="card position-relative">
            <img src={studioImage1} alt="studio-1" className="card-img-top" />
              <div className="card-body">
                <div className="card-title">
                  <h6>{property.title}</h6>
                </div>
                <div className="card-text">
                  <p><i className="fa-solid fa-location-dot"></i> {property.location}</p>
                  <p>
                    <span>{property.beds} </span>Beds <span> {property.baths} </span>Baths
                    <span> {property.sqft} </span>Sqft
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="price">{property.price}</span>
                  <span><i className="fas fa-long-arrow-alt-right"></i> compare</span>
                  <Link to="/Studio">
                  <button className="navbarbutton">Details</button>
                  </Link>
                </div>
                <div className="button position-absolute top-0 right-50">
                  {property.isFeatured && <button className="btn-feature">Featured</button>}
                  {property.isForSale && <button className="btn-sale">For Sale</button>}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;




