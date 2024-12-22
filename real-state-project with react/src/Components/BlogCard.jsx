import React from 'react';
import blogImage from '../assets/imgs/blogCard/blogcard.jpg'; 

const BlogCard = ({ category, date, title, link }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="blog-card">
        <div className="image-container">
          <img 
            src={blogImage} 
            alt="Blog"
          />
          <div className="category">{category}</div>
        </div>
        <div className="content">
          <div className="date">
            <span className="date-icon">
              <i className="fa-regular fa-clock"></i>
            </span> {date}
          </div>
          <div className="title">
            {title}
          </div>
          <a href={link} className="read-more">
            <b>Read More </b>  <i className="fa-solid fa-circle-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
