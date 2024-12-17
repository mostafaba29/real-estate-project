import '../assets/styles/components/blogCard.style.scss';
export default function BlogCard (imageSrc, 
    imageAlt, 
    category, 
    date, 
    title, 
    readMoreLink){
    return (
        <div className="card">
          <div className="image-container">
            <img src={imageSrc} alt={imageAlt} />
            <div className="category">{category}</div>
          </div>
          <div className="content">
            <div className="date">
              <span className="date-icon">
                <i className="fa-regular fa-clock"></i>
              </span> 
              {date}
            </div>
            <div className="title">{title}</div>
            <a 
              href={readMoreLink} 
              className="read-more"
            >
              <b>Read More </b>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>
      );
}