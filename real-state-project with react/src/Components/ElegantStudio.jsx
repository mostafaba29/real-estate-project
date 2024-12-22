import React from 'react';
import elegantStudioImage from '../assets/imgs/elgant-studio.png'; 

function ElegantStudio() {
  const properties = [
    {
      id: 1,
      title: 'Elegant studio flat',
      location: 'Los Angeles, California 91604',
      beds: 4,
      baths: 2,
      sqft: 1150,
      garage: 2,
      price: '$8,600',
      image: elegantStudioImage,
    },
    {
      id: 2,
      title: 'Elegant studio flat',
      location: 'Los Angeles, California 91604',
      beds: 4,
      baths: 2,
      sqft: 1150,
      garage: 2,
      price: '$8,600',
      image: elegantStudioImage,
    },
    {
      id: 3,
      title: 'Elegant studio flat',
      location: 'Los Angeles, California 91604',
      beds: 4,
      baths: 2,
      sqft: 1150,
      garage: 2,
      price: '$8,600',
      image: elegantStudioImage,
    },
    {
      id: 4,
      title: 'Elegant studio flat',
      location: 'Los Angeles, California 91604',
      beds: 4,
      baths: 2,
      sqft: 1150,
      garage: 2,
      price: '$8,600',
      image: elegantStudioImage,
    }
  ];

  return (
    <section className="elegant-studio">
      <div className="container">
        <h2 className="text-center mb-4">Explore The Neighborhoods</h2>
        <p className="text-center mb-5">Find your dream apartment with our listings</p>

        {/* First Row */}
        <div className="row justify-content-center container gap-5">
          {properties.slice(0, 2).map((property) => (
            <div key={property.id} className="mb-3" style={{ maxWidth: '550px' }}>
              <div className="explore-card row g-0">
                <div className="col-md-5">
                  <img src={property.image} alt={property.title} />
                </div>
                <div className="col-md-7">
                  <div className="listing-details">
                    <h5>{property.title}</h5>
                    <p className="secondary-color">
                      <i className="fas fa-map-marker-alt"></i> {property.location}
                    </p>
                    <p>
                      <i className="fas fa-bed secondary-color"></i> Beds: {property.beds} &nbsp;
                      <i className="fas fa-bath secondary-color"></i> Baths: {property.baths}
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined secondary-color"></i> Sqft: {property.sqft} &nbsp;
                      <i className="fas fa-car secondary-color"></i> Garage: {property.garage}
                    </p>
                    <hr />
                    <div className="row justify-content-between">
                      <p className="price col-3 primary-color mt-3">{property.price}</p>
                      <a className="btn-details col-4" href="./pages/property-details.html">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row justify-content-center container gap-5">
          {properties.slice(2).map((property) => (
            <div key={property.id} className="mb-3" style={{ maxWidth: '550px' }}>
              <div className="explore-card row g-0">
                <div className="col-md-5">
                  <img src={property.image} alt={property.title} />
                </div>
                <div className="col-md-7">
                  <div className="listing-details">
                    <h5>{property.title}</h5>
                    <p className="secondary-color">
                      <i className="fas fa-map-marker-alt"></i> {property.location}
                    </p>
                    <p>
                      <i className="fas fa-bed secondary-color"></i> Beds: {property.beds} &nbsp;
                      <i className="fas fa-bath secondary-color"></i> Baths: {property.baths}
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined secondary-color"></i> Sqft: {property.sqft} &nbsp;
                      <i className="fas fa-car secondary-color"></i> Garage: {property.garage}
                    </p>
                    <hr />
                    <div className="row justify-content-between">
                      <p className="price col-3 primary-color mt-3">{property.price}</p>
                      <a className="btn-details col-4" href="./pages/property-details.html">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div><br></br><br></br><br></br><br></br>
    </section>
  );
}

export default ElegantStudio;
