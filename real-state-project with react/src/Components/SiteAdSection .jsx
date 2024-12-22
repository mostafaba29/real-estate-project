import React from 'react';

const SiteAdSection = () => {
  return (
    <section className="site-ad mt-4">
      <div className="card p-3">
        <img 
          src={require('../assets/imgs/logo@2x.png')} 
          alt="Real Estate Logo" 
          className="card-img-top w-25" 
        />
        <div className="card-body mt-5 pt-5">
          <h3>We can help you find a local real estate agent</h3>
          <p>
            Connect with a trusted agent who knows the market inside out - whether you are buying or selling
          </p>
          <button>Connect with an agent</button>
        </div>
      </div>
    </section>
  );
}

export default SiteAdSection;
