import React from 'react';

const DirectionSection = () => {
  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Get Directions</h3><br />
      
      <div className="responsive-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="property mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumndirection">
                <p>Address</p>
                <p>City</p>
                <p>State/Country</p>
              </div>
              <div className="text-color">
                <p>150 sqft</p>
                <p>#1234</p>
                <p>$7,500</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex">
              <div className="secondcolumndirection">
                <p>Postal code</p>
                <p>Area</p>
                <p>Country</p>
              </div>
              <div className="text-color">
                <p>7.328</p>
                <p>7.328</p>
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionSection;
