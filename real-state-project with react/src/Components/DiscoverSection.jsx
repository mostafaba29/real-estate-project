// src/components/DiscoverSection.jsx
import React from 'react';
import '../assets/css/indexstyle.css'; // Import your styles

function DiscoverSection() {
  // Button click handler
  const handleButtonClick = (type) => {
    console.log(`Button ${type} clicked`);
  };

  return (
    <section className="discover my-5 py-5 text-center">
      <h2>Today's Luxury Listing</h2>
      <p>Thousands of luxury home enthusiasts just like you visit our website</p>
      <div>
       
        <button 
          className="active top-buttons m-2" 
          onClick={() => handleButtonClick('Buy')}
        >
          Buy
        </button>
        <button 
          className="top-buttons m-2" 
          onClick={() => handleButtonClick('Rating')}
        >
          Rating
        </button>
        <button 
          className="top-buttons" 
          onClick={() => handleButtonClick('Selling')}
        >
          Selling
        </button>
      </div>
      <div className="container">
        <div className="row my-4">
          {/* First Card */}
          <div className="col-md-4 p-3">
            <div className="discover-card p-3">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h4>Find out How much you can afford</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora dolorum molestias harum illo aut?
              </p>
              <button>Learn More</button>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4 p-3">
            <div className="discover-card p-3">
              <div className="icon">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h4>Find out How much you can afford</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora dolorum molestias harum illo aut?
              </p>
              <button>Learn More</button>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-4 p-3">
            <div className="discover-card p-3">
              <div className="icon">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
              <h4>Find out How much you can afford</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora dolorum molestias harum illo aut?
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <p>
        Looking to spotlight a unique property with expert marketing? <a href="#">let's Chat</a>
      </p>
    </section>
  );
}

export default DiscoverSection;

