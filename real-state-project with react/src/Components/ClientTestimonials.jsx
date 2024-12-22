import React from 'react';

function ClientTestimonials() {
  return (
    <section className="clients">
      <div className="container mt-5">
        {/* Title and Description */}
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Clients Testimonials</h2>
            <p>Thousands of luxury home enthusiasts just like you visit our website.</p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="row mt-5">
          {/* First Testimonial */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="mt-3">
                Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis, et
                posuere tellus commodo at. Morbi accumsan nulla id neque rutrum, et tempus dui venenatis. Quisque dapibus
                metus ligula, id tempor nisl interdum vitae.
              </p>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam tempus urna id interdum. Proin
                iaculis erat id sapien venenatis convallis. Nam et ullamcorper nibh. Nulla malesuada consectetur sem ut
                varius. Fusce ornare tortor non maximus volutpat.
              </p>
            </div>
          </div>

          {/* Third Testimonial */}
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="mt-3">
                "My experience with property management services has exceeded expectations. They efficiently manage
                properties with a professional and attentive approach in every situation. I feel reassured that any issue
                will be resolved promptly and effectively."
              </p>
            </div>
          </div>
        </div>

        {/* Show More Button */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <button className="clients-btn">Show More...</button>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br>
    </section>
  );
}

export default ClientTestimonials;
