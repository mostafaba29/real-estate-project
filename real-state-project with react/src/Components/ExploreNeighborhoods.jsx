import React from 'react';

// Import images
import exploreOne from '../assets/imgs/explore/explore-one.jpg';
import exploreTwo from '../assets/imgs/explore/explore-two.jpg';
import exploreThree from '../assets/imgs/explore/explore-three.jpg';

function ExploreNeighborhoods() {
  // Sample data for neighborhoods
  const neighborhoods = [
    {
      id: 1,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreOne,
    },
    {
      id: 2,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreTwo,
    },
    {
      id: 3,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreThree,
    },
    {
      id: 4,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreOne,
    },
    {
      id: 5,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreOne,
    },
    {
      id: 6,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreOne,
    },
    {
      id: 7,
      name: 'New York',
      properties: '2,491 Properties',
      image: exploreOne,
    },
  ];

  return (
    <section className="explore">
      <div className="container">
        <h2 className="text-center mb-4">Explore The Neighborhoods</h2>
        <p className="text-center mb-5">Find your dream apartment with our listings</p>
      </div>

      <div className="mt-5 m-4">
        <div className="row">
          {neighborhoods.slice(0, 4).map((neighborhood) => (
            <div key={neighborhood.id} className="col-md-3 col-sm-6">
              <div className="property-card">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="rounded"
                />
                <div className="row">
                  <div className="property-info-text col-3">
                    <b>{neighborhood.name}</b>
                  </div>
                  <div className="property-info col-6">
                    <a className="m-2">
                      {neighborhood.properties} <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-4">
        <div className="row">
          {/* First Card */}
          <div className="col-md-3 col-sm-6">
            <div className="property-card">
              <img
                src={neighborhoods[4].image}
                alt={neighborhoods[4].name}
                className="rounded"
              />
              <div className="row">
                <div className="property-info-text col-3">
                  <b>{neighborhoods[4].name}</b>
                </div>
                <div className="property-info col-6">
                  <a className="m-2">
                    {neighborhoods[4].properties} <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card (takes up col-6) */}
          <div className="col-md-6 col-sm-12">
            <div className="property-card">
              <img
                src={neighborhoods[5].image}
                alt={neighborhoods[5].name}
                className="rounded img-col"
              />
              <div className="row">
                <div className="property-info-text col-3">
                  <b>{neighborhoods[5].name}</b>
                </div>
                <div className="property-info col-6">
                  <a className="m-2">
                    {neighborhoods[5].properties} <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-3 col-sm-6">
            <div className="property-card">
              <img
                src={neighborhoods[6].image}
                alt={neighborhoods[6].name}
                className="rounded"
              />
              <div className="row">
                <div className="property-info-text col-3">
                  <b>{neighborhoods[6].name}</b>
                </div>
                <div className="property-info col-6">
                  <a className="m-2">
                    {neighborhoods[6].properties} <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br>
    </section>
  );
}

export default ExploreNeighborhoods;

