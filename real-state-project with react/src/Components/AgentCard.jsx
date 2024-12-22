import React from 'react';
import { Link } from 'react-router-dom'; 
const AgentCard = ({ name, role, imgSrc, phoneLink, emailLink }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="agent-card">
        <img src={imgSrc} alt="agent-img" />
        <div className="agent-card-footer">
          <div className="agent-info">
            <h6>{name}</h6>
            <p>{role}</p>
          </div>
          <div className="agent-icons">
          <Link to="/ContactMe">
              <i className="fas fa-phone"></i>
            </Link>
            <Link to="/Contactme">
              <i className="fa-solid fa-envelope"></i>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
