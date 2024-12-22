import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from 'react-icons/fa'; // Importing Font Awesome icon

function FindAgent() {
  return (
    <section className="find-agent primary-bg ">
      <div className="container d-flex flex-wrap  align-items-center justify-content-lg-between text-lg-start text-center justify-content-center white-text p-3">
        <article className="find-agent-text m-2">
          <h3>Find a Local Real Estate Agent Today</h3>
          <p>If you're looking to buy or sell a house, we'll help you make the most money possible.</p>
        </article>
        <div className="find-agent-btn btn d-flex align-items-center primary-text white-bg px-4 py-2">
        <Link to="/AgentPage">   <p className="m-0 me-3 primary-text">Find your local agent</p> </Link >
          <FaSearch />
        </div>
      </div>
    </section>
  );
}

export default FindAgent;
