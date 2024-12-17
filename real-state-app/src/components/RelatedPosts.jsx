import '../assets/styles/pages/propertyLisitings.style.scss';


export default function RelatedPosts (){
    return (
        <section id="related-posts">
        <h2>Related posts</h2>
        <div className="blog-cards">
            <div className="card">
                <div className="image-container">
                  <img src="./assets/imgs/blogCard/blogcard.jpg" alt="Living Room" />
                  <div className="category">Real estate</div>
                </div>
                <div className="content">
                  <div className="date"><span className="date-icon"><i className="fa-regular fa-clock"></i></span> 26 August, 2024</div>
                  <div className="title">Building gains into housing stocks and how to trade the...</div>
                  <a href="#" className="read-more"><b>Read More </b>  <i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="./assets/imgs/blogCard/blogcard.jpg" alt="Living Room" />
                  <div className="category">Real estate</div>
                </div>
                <div className="content">
                  <div className="date"><span className="date-icon"><i className="fa-regular fa-clock"></i></span> 26 August, 2024</div>
                  <div className="title">Building gains into housing stocks and how to trade the...</div>
                  <a href="#" className="read-more"><b>Read More </b>  <i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
              </div>
              <div className="card">
                <div className="image-container">
                  <img src="./assets/imgs/blogCard/blogcard.jpg" alt="Living Room" />
                  <div className="category">Real estate</div>
                </div>
                <div className="content">
                  <div className="date"><span className="date-icon"><i className="fa-regular fa-clock"></i></span> 26 August, 2024</div>
                  <div className="title">Building gains into housing stocks and how to trade the...</div>
                  <a href="#" className="read-more"><b>Read More </b>  <i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
              </div>
        </div>
    </section>
    )
}