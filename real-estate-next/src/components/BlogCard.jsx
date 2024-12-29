import React from 'react';
import blogImage from '@/assets/imgs/blogCard/blogcard.jpg'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const BlogCard = ({ category, date, title, link }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="blog-card">
        <div className="image-container">
          <Image
            src={blogImage} 
            alt="Blog"
          />
          <div className="category">{category}</div>
        </div>
        <div className="content">
          <div className="date">
            <span className="date-icon">
              <FontAwesomeIcon icon={faClock} />
            </span> {date}
          </div>
          <div className="title">
            {title}
          </div>
          <Link href={link} className="read-more">
            <b>Read More </b>  <FontAwesomeIcon icon={faCircleArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
