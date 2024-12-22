
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../assets/css/property-listing.css';
import house2 from '../assets/imgs/houses/house2.jpg';
import house1 from '../assets/imgs/houses/house1.jpg';
import house3 from '../assets/imgs/houses/house3.jpg';
import avatar1 from '../assets/imgs/avatars/avatar1.jpg';
import logo from "../assets/imgs/logo@2x.png";
function BlogPost() {
  return (
    <section id="main">
      <div className="row">
        {/* Left Side */}
        <div className="col-8">
          <h1>Building Gains into Housing Stocks and How to Trade the Sector</h1>
          <div className="listing-info">
            <i className="fas fa-user"></i>
            <span className="heading-primary">Kathryn Murphy</span>
            <i className="fas fa-folder"></i>
            <span className="heading-primary">Furniture</span>
            <i className="fas fa-message"></i>
            <span className="heading-secondary">0 comment</span>
            <span className="heading-secondary">26 August, 2024</span>
          </div>
          <div className="break"></div>
          <p className="heading-paragraph">
            The housing sector has long been a focal point of investors seeking stability and growth. Understanding the dynamics of housing stocks and effectively trading within this sector can lead to substantial gains.
          </p>
          <img className="main-img w-100" src="../assets/imgs/houses/house3.jpg" alt="house-img" />
          <h3><strong>Understanding Housing Stocks</strong></h3>
          <p className="content-paragraph">
            Housing stocks encompass companies involved in various aspects of the real estate industry, including homebuilders, developers, and related service providers. Factors influencing these stocks range from interest rates and economic indicators to trends in homeownership rates.
          </p>
          <p className="content-paragraph">
            Pay close attention to economic indicators such as employment rates, GDP growth, and consumer confidence. A strong economy often correlates with increased demand for housing, benefiting related stocks.
          </p>
          <div className="quote-div">
            <p>"Lower rates can boost homebuying activity, benefiting housing stocks, while higher rates may have the opposite effect."</p>
            <span><strong>said Mike Fratantoni, MBA's chief economist</strong></span>
          </div>
          <div className="mid-imgs">
          <img src={house2} alt="house-img" />
          <img src={house1} alt="house-img" />
          </div>
          <h3>Identify Emerging Trends</h3>
          <p className="content-paragraph">
            Stay informed about emerging trends in the housing market, such as the demand for sustainable homes, technological advancements, and demographic shifts. Companies aligning with these trends may present attractive investment opportunities.
          </p>
          <p className="content-paragraph">
            Take a long-term investment approach if you believe in the stability and growth potential of housing stocks. Look for companies with solid fundamentals and a track record of success for short-term traders. Capitalize on market fluctuations and government housing data releases.
          </p>
          <div className="break"></div>
          <div className="content-footer">
            <div className="tags">
              <span>Tags:</span>
              <span className="tag">Personal</span>
              <span className="tag">Business</span>
            </div>
            <div className="share">
              <span>Share this post:</span>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa fa-instagram"></i>
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h2>Comment (4)</h2>

            {/* Comment */}
            <div className="comment">
            <img src={avatar1} alt="Viola Lucas" className="profile-pic" />
              <div className="comment-body">
                <div className="comment-header">
                  <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <p>
                  It's really easy to use and is exactly what I am looking for. A lot of good-looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
                </p>
                <div className="comment-images">
                <img src={house1} alt="house image 1"  />
                <img src={house2} alt="house image 2"  />
                <img src={house3} alt="house image 3"  />
                </div>
                <div className="comment-actions">
                  <button><i className="fa fa-thumbs-up"></i> Useful</button>
                  <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
              </div>
            </div>
            <div className="comment">
            <img src={avatar1} alt="Viola Lucas" className="profile-pic" />
              <div className="comment-body">
                <div className="comment-header">
                  <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <p>
                  It's really easy to use and is exactly what I am looking for. A lot of good-looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
                </p>
                <div className="comment-actions">
                  <button><i className="fa fa-thumbs-up"></i> Useful</button>
                  <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
              </div>
            </div>
            <div className="comment">
            <img src={avatar1} alt="Viola Lucas" className="profile-pic" />
              <div className="comment-body">
                <div className="comment-header">
                  <div className="comment-info">
                    <h3>Viola Lucas</h3>
                    <span>August 13, 2023</span>
                  </div>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <p>
                  It's really easy to use and is exactly what I am looking for. A lot of good-looking templates & it's highly customizable. Live support is helpful, solved my issue in no time.
                </p>
                <div className="comment-actions">
                  <button><i className="fa fa-thumbs-up"></i> Useful</button>
                  <button><i className="fa fa-thumbs-down"></i> Not helpful</button>
                </div>
              </div>
            </div>
            <button className="btn-outline">View all comments</button>

            {/* Leave a comment */}
            <div className="leave-comment">
              <h2 className="ms-2">Leave A Comment</h2>
              <form>
                <div className="form-header">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name*" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email*" required />
                  </div>
                </div>
                <div className="check-group">
                  <input type="checkbox" />
                  <label>Save your name, email for the next time review</label>
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea id="comment" placeholder="Your comment" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Post Comment</button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side (Sidebar) */}
        <div id="main-right-side" className="col-4">
          <div className="search">
            <h3>Search Blog</h3>
            <i className="fas fa-search "></i>
            <input type="text" id="search"  placeholder="Search" />
          </div>
          <div className="categories mt-4">
            <h5>Categories</h5>
            <div className="category-item ">
              <h6 className="mt-2">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
          <div className="category-item ">
              <h6 className="mt-2">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
          <div className="category-item ">
              <h6 className="">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
          <div className="category-item ">
              <h6 className="">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
            <div className="category-item ">
              <h6 className="">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
            <div className="category-item ">
              <h6 className="">Market Updates</h6>
              <span>(50)</span>
            </div>
            <div class="break"></div>
            <div className="category-item ">
              <h6 className="">Market Updates</h6>
              <span>(50)</span>
            </div>
            </div>
          <br />
          <div className="featured-listings">
            <h5>Featured Listings</h5>
            <div className="featured-item">
            <img src={house1} alt="house image 1"  />
              <div className="featured-item-info m-2">
                <h6>Key Real Estate Trends to Watch in 2024</h6>
                <span><i className="fa fa-calendar"></i> February 15, 2024</span>
              </div>
            </div>
          </div>
          <div class="break"></div>
          <div className="featured-listings">
            <div className="featured-item">
            <img src={house2} alt="house image 1"  />
              <div className="featured-item-info m-2">
                <h6>Key Real Estate Trends to Watch in 2024</h6>
                <span><i className="fa fa-calendar"></i> February 15, 2024</span>
              </div>
            </div>
          </div>
          <div class="break"></div>
          <div className="featured-listings">
            <div className="featured-item">
            <img src={house3} alt="house image 1"  />
              <div className="featured-item-info m-2">
                <h6>Key Real Estate Trends to Watch in 2024</h6>
                <span><i className="fa fa-calendar"></i> February 15, 2024</span>
              </div>
            </div>
          </div>

          <br />
          <div className="newsletter">
            <h5>Join Our Newsletter</h5>
            <p>Sign up for our newsletter to receive the latest news and updates from our team.</p>
            <div className="newsletter-input">
              <i className="fas fa-arrow-right input-icon"></i>
              <input type="text" placeholder="Enter your email address" />
            </div>
          </div>

          <div className="popular-tags">
            <h2>Popular Tags</h2>
            <div className="tags">
              <span className="tag">Property</span>
              <span className="tag">Office</span>
              <span className="tag">Finance</span>
              <span className="tag">Legal</span>
              <span className="tag">Market</span>
              <span className="tag">Invest</span>
              <span className="tag">Renvote</span>
              {/* Add other tags here */}
            </div>
          </div>

          {/* Site Ad */}
          <section className="site-ad mt-4">
            <div className="card p-3">
              <img src={logo} alt="Logo" className="card-img-top w-25" />
              <div className="card-body mt-5 pt-5">
                <h3>We can help you find a local real estate agent</h3>
                <p>Connect with a trusted agent who knows the market inside out - whether you are buying or selling</p>
                <button>Connect with an agent</button>
              </div>
            </div>
          </section>
        </div>
            </div>
          </section>
          
  );
}

  

export default BlogPost;
