import '../assets/styles/pages/propertyListings.style.scss';
import ReviewSection from './ReviewSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faFolder, faMessage} from '@fortawesome/free-solid-svg-icons';

export default function PropertyListingMainSection(){
    return (
        <section id="main">
        <div id="main-left-side">
            <h1>building gains into housing stocks and how to trade the sector</h1>
            <div className="listing-info">
                <FontAwesomeIcon icon={faUser} />
                <span className="heading-primary">Kathryn Murphy</span>
                <FontAwesomeIcon icon={faFolder} />
                <span className="heading-primary">Furniture</span>
                <FontAwesomeIcon icon={faMessage} />
                <span className="heading-secondary">0 comment</span>
                <span className="heading-secondary">26 August, 2024</span>
            </div> 
            <div className="break"></div>
            <p className="heading-paragraph">The housing sector has logn been a focal point of investors seeking stability and growth, Understanding the dynamics of housing stocks and effectively trading within this sector can lead to substantial gains.</p>
            <img className="main-img" src="./assets/imgs/houses/house1.jpg" alt="house-img" />
            <h3><strong>Understanding Housing stocks</strong></h3>
            <p className="content-paragraph">
                Housing stocks encompass companies involved in various aspects of the real estate industry, including homebuilders,
                developers, and related service providers. Factors infulencing these stocks range from interest rates and economic 
                indicatros to trends in homeownership rates.
            </p>
            <p className="content-paragraph">
                Pay close attention to economic indicators such as employment rates, GDP growth, and consumer confidence. A strong economy often 
                corralates with incraesed demand for housing, benefiting related stocks.
            </p>
            <div className="quote-div">
                <p>&quot;Lower rates can boost homebuying activity, benefiting housing stocks, while higher rates may have the opposite effect.&quot;</p>
                <span><strong>said Mike fratantoni, MBA&apos;s chief ecomomist</strong></span>
            </div>
            <div className="mid-imgs">
                <img src="./assets/imgs/houses/house2.jpg" alt="house-img" />
                <img src="./assets/imgs/houses/house3.jpg" alt="house-img" />
            </div>
            <h3>Identify Emerging Trends</h3>
            <p className="content-paragraph">
                Stay informed about emerging trends in the housing market, such as the demand for sustainable homes, techological advencements, and demographic shifts,
                Companies aligning with these trends may present attractive investment opportunities.
            </p>
            <p className="content-paragraph">
                Take a long-term investment approach if you believe in the stability and growth potential of housing stocks.
                Look for compoanies with solid fundamentals and trach record of success for shourt-term traders, Capitalize on martet fluctuation s governmanet housing 
                data releases.
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
            <ReviewSection />
        </div>
        <div id="main-right-side">
            <div className="search">
                <h2>Search Blog</h2>
                <i className="fas fa-search"></i>
                <input type="text" id="search" placeholder="Search" />
            </div>
            <div className="categories">
                <h2>Categories</h2>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
                <div className="break"></div>
                <div className="category-item">
                <h4>Market Updates</h4>
                <span>(50)</span>
                </div>
            </div>
            <div className="featured-lisitngs">
                <h2>Featured Lisitngs</h2>
                <div className="featured-item">
                    <img src="/assets/imgs/houses/house1.jpg" alt="House 1"/>
                    <div className="featured-item-info">
                        <h4>Key Real Estate trends to watch in 2024</h4>
                        <span><i className="fa fa-calendar"></i> February 15, 2024</span>
                    </div>
                </div>
                <div className="break"></div>
                <div className="featured-item">
                    <img src="/assets/imgs/houses/house2.jpg" alt="House 2"/>
                    <div className="featured-item-info">
                        <h4>Key Real Estate trends to watch in 2024</h4>
                        <span><i className="fa fa-calendar"></i> February 15, 2024</span>
                    </div>
                </div>
                <div className="break"></div>
                <div className="featured-item">
                    <img src="/assets/imgs/houses/house3.jpg" alt="House 3"/>
                    <div className="featured-item-info">
                        <h4>Key Real Estate trends to watch in 2024</h4>
                        <span><i className="fa fa-calendar"></i> February 15, 2024</span>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <h2>Join Our Newsletter</h2>
                <p>Sign up for our newsletter to receive the latest news and updates from our team.</p>
                <div className="newsletter-input">
                    <i className="fas fa-arrow-right"></i>
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
                    <span className="tag">Renovate</span>
                </div>
            </div>
        </div>
    </section>
    )
    }