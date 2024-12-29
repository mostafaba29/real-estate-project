import React from 'react';
import Image from 'next/image';
import elegantStudioImage from '@/assets/imgs/elgant-studio.png'; 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined, faCar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
                  <Image src={property.image} alt={property.title} />
                </div>
                <div className="col-md-7">
                  <div className="listing-details">
                    <h5>{property.title}</h5>
                    <p className="secondary-color">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {property.location}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faBed} className='secondary-color'/> Beds: {property.beds} &nbsp;
                      <FontAwesomeIcon icon={faBath} className='secondary-color'/> Baths: {property.baths}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faRulerCombined} className='secondary-color'/> Sqft: {property.sqft} &nbsp;
                      <FontAwesomeIcon icon={faCar} className='secondary-color'/> Garage: {property.garage}
                    </p>
                    <hr />
                    <div className="row justify-content-between" style={{display: 'flex',alignItems: 'center'}}>
                      <p className="price col-3 primary-color mt-3">{property.price}</p>
                      <Link className="col-4" href="/listing" >
                        <button style={{ textDecoration: 'none', fontSize: '14px', backgroundColor:'#f1913d', padding: '5px 10px', color: 'white', borderRadius: '5px' }}>
                        Details
                        </button>
                      </Link>
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
                  <Image src={property.image} alt={property.title} />
                </div>
                <div className="col-md-7">
                  <div className="listing-details">
                    <h5>{property.title}</h5>
                    <p className="secondary-color">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {property.location}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faBed} className='secondary-color'/> Beds: {property.beds} &nbsp;
                      <FontAwesomeIcon icon={faBath} className='secondary-color'/> Baths: {property.baths}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faRulerCombined} className='secondary-color'/> Sqft: {property.sqft} &nbsp;
                      <FontAwesomeIcon icon={faCar} className='secondary-color'/> Garage: {property.garage}
                    </p>
                    <hr />
                    <div className="row justify-content-between" style={{display: 'flex',alignItems: 'center'}}>
                      <p className="price col-3 primary-color mt-3">{property.price}</p>
                      <Link className="col-4" href="/listing" >
                        <button style={{ textDecoration: 'none', fontSize: '14px', backgroundColor:'#f1913d', padding: '5px 10px', color: 'white', borderRadius: '5px' }}>
                        Details
                        </button>
                      </Link>
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
