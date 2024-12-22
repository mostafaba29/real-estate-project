import React from 'react';
import person from "../assets/imgs/person.png"
const AgentProfile = () => {
  return (
    <div className="col-lg-8 col-12 py-2">
      <div className="company-agent">
        <div className="img-agent">
          <img src={person} alt="agent Picture" className="img-agent" />
        </div>
        <div className="profile-info p-0">
          <h2>Cameron Williamson</h2>
          <p>Company Agent at <strong>Themesflat</strong></p>
          <p className="contact-info">
            <span style={{ color: '#f1913d' }}>
              <i className="fa fa-thin fa-phone m-2" style={{ color: '#cbd3e1' }}></i>
              +7-445-556-8337
            </span>
            <br />
            <span>
              <i className="fa fa-thin fa-envelope m-2" style={{ color: '#cbd3e1' }}></i>
              themesflat@gmail.com
            </span>
            <br />
            <span>
              <i className="fa fa-thin fa-location-dot m-2" style={{ color: '#cbd3e1' }}></i>
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </span>
            <hr className="m-2" />
          </p>
          <h4>About Cameron Williamson</h4>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deleniti veniam architecto
            quasi natus itaque aperiam, doloremque est ipsa officiis fuga  vero accusantium distinctio,
            cumque officia magnam atque. Sint? doloremque est ipsa officiis fuga beatae vero accusantium distinctio,
            cumque officia magnam atque. Sint?
          </p>
          <div className="read-more-icon">
            <a href="#" className="read-more">Read More</a>
            <i className="fa fa-light fa-circle-arrow-down" style={{ color: '#f1913d' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;

