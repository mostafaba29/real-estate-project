import React, { useState } from 'react';
import Floor from "../assets/imgs/pagefive/firstfloor.png";
const FloorPlans = () => {
  const [openPanel, setOpenPanel] = useState('first');

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Floor Plans</h3><br />
      
      <div className="accordion" id="accordionPanelsStayOpenExample">
        
        {/* First Floor */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${openPanel === 'first' ? '' : 'collapsed'}`} 
              type="button" 
              onClick={() => togglePanel('first')}
              aria-expanded={openPanel === 'first'} 
              aria-controls="panelsStayOpen-collapseOne"
            >
              First Floor
            </button>
          </h2>
          <div 
            id="panelsStayOpen-collapseOne" 
            className={`accordion-collapse collapse ${openPanel === 'first' ? 'show' : ''}`}
          >
            <div className="accordion-body">
              <img src={Floor} alt="First Floor" width="100%" />
            </div>
          </div>
        </div>

        {/* Second Floor */}
        <div className="accordion-item mt-3">
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${openPanel === 'second' ? '' : 'collapsed'}`} 
              type="button" 
              onClick={() => togglePanel('second')}
              aria-expanded={openPanel === 'second'} 
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <div className="d-flex justify-content-between">
                <p>Second Floor</p>
              </div>
            </button>
          </h2>
          <div 
            id="panelsStayOpen-collapseTwo" 
            className={`accordion-collapse collapse ${openPanel === 'second' ? 'show' : ''}`}
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
