import React from 'react';
import blogCardImg from '../assets/imgs/blogCard/blogcard.jpg'; // Import image

function RelatedPosts() {
  return (
    <section id="related-posts" className="ms-3">
      <h2 className="ms-3">Related posts</h2>
      <br></br>
      <div className="blog-cards">
        <div className="card">
          <div className="image-container">
            <img src={blogCardImg} alt="Living Room" />
            <div className="category">Real estate</div>
          </div>
          <div className="content">
            <div className="date">
              <span className="date-icon">
                <i className="fa-regular fa-clock"></i>
              </span> 26 August, 2024
            </div>
            <div className="title">Building gains into housing stocks and how to trade the...</div>
            <a href="../pages/blog-grid.html" className="read-more">
              <b>Read More </b>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="image-container">
            <img src={blogCardImg} alt="Living Room" />
            <div className="category">Real estate</div>
          </div>
          <div className="content">
            <div className="date">
              <span className="date-icon">
                <i className="fa-regular fa-clock"></i>
              </span> 26 August, 2024
            </div>
            <div className="title">Building gains into housing stocks and how to trade the...</div>
            <a href="../pages/blog-grid.html" className="read-more">
              <b>Read More </b>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="image-container">
            <img src={blogCardImg} alt="Living Room" />
            <div className="category">Real estate</div>
          </div>
          <div className="content">
            <div className="date">
              <span className="date-icon">
                <i className="fa-regular fa-clock"></i>
              </span> 26 August, 2024
            </div>
            <div className="title">Building gains into housing stocks and how to trade the...</div>
            <a href="../pages/blog-grid.html" className="read-more">
              <b>Read More </b>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedPosts;
