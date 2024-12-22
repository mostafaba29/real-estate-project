import React from 'react';

// Importing images
import logoOne from '../assets/imgs/logos/logo-one.png';
import logoTwo from '../assets/imgs/logos/logo-two.png';
import logoThree from '../assets/imgs/logos/logo-three.png';
import logoFour from '../assets/imgs/logos/logo-four.png';
import logoFive from '../assets/imgs/logos/logo-five.png';
import personImage from '../assets/imgs/person.png';

function WorkTogether() {
  return (
    <section className="work-together container-fluid">
      <div className="header">
        <h1>Let's Work Together</h1>
        <p>Thousands of luxury home enthusiasts just like you visit our website.</p>
        <div className="logos row justify-content-center gap-5 p-4">
          {/* Logo items */}
          <div className="logo-border">
            <img src={logoOne} alt="Imperial" />
          </div>
          <div className="logo-border">
            <img src={logoTwo} alt="Imperial" />
          </div>
          <div className="logo-border">
            <img src={logoThree} alt="Imperial" />
          </div>
          <div className="logo-border">
            <img src={logoFour} alt="Imperial" />
          </div>
          <div className="logo-border">
            <img src={logoFive} alt="Imperial" />
          </div>
          <div className="logo-border">
            <img src={logoThree} alt="Imperial" />
          </div>
        </div>
      </div>
      <div className="cta-section">
        <div className="d-flex justify-content-between">
          <div className="text-start m-4">
            <h3>Are You Selling Or <br />Renting Your Property?</h3>
            <p className="secondary-color">Thousands of luxury home enthusiasts just like you visit our website.</p>
            <a className="cta-button btn" href="./pages/agent-page-eight.html">Request your free appraisal</a>
          </div>
          <div className="cta-img">
            <img src={personImage} alt="Person" />
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </section>
  );
}

export default WorkTogether;
