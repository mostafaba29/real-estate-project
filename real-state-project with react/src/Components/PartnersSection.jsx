import React from 'react';
import partner1 from '../assets/imgs/logos/partner1.jpg';
import partner2 from '../assets/imgs/logos/partner2.jpg';
import partner3 from '../assets/imgs/logos/partner3.jpg';

const PartnersSection = () => {
  const partnerLogos = [partner1, partner2, partner3, partner1, partner2, partner3];

  return (
    <section className="partners">
      <h2 className="section-header">Let's Work Together</h2>
      <p className="vivid-text">Thousands of luxury home enthusiasts just like you visit our website.</p>
      
      <div className="partners-logos">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`partner-logo${index + 1}`} />
        ))}
      </div>

      <div className="partners-logos">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`partner-logo${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
