import React from 'react';

// Importing images
import blogImage from '../assets/imgs/blogCard/blogcard.jpg';

function Insights() {
  return (
    <section className="insights">
      <div className="container">
        <h2 className="text-center mb-4">Insights & Opinion</h2>
        <p className="text-center mb-5 secondary-color">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      {/* Row cards */}
      <div className="container">
        <div className="row justify-content-between">
          {/* First Blog Card */}
          <div className="col-md-4 col-sm-6">
            <div className="blog-card">
              <div className="image-container">
                <img src={blogImage} alt="Living Room" />
                <div className="category">Real estate</div>
              </div>
              <div className="content">
                <div className="date">
                  <span className="date-icon">
                    <i className="fa-regular fa-clock m-1"></i>
                  </span>
                  26 August, 2024
                </div>
                <div className="title">
                  Building gains into housing stocks and how to trade the...
                </div>
              </div>
            </div>
          </div>

          {/* Second Blog Card */}
          <div className="col-md-4 col-sm-6">
            <div className="blog-card">
              <div className="image-container">
                <img src={blogImage} alt="Living Room" />
                <div className="category">Real estate</div>
              </div>
              <div className="content">
                <div className="date">
                  <span className="date-icon">
                    <i className="fa-regular fa-clock m-1"></i>
                  </span>
                  26 August, 2024
                </div>
                <div className="title">
                  Building gains into housing stocks and how to trade the...
                </div>
              </div>
            </div>
          </div>

          {/* Third Blog Card */}
          <div className="col-md-4 col-sm-6">
            <div className="blog-card">
              <div className="image-container">
                <img src={blogImage} alt="Living Room" />
                <div className="category">Real estate</div>
              </div>
              <div className="content">
                <div className="date">
                  <span className="date-icon">
                    <i className="fa-regular fa-clock m-1"></i>
                  </span>
                  26 August, 2024
                </div>
                <div className="title">
                  Building gains into housing stocks and how to trade the...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;
