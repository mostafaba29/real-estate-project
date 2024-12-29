import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
const AgentCard = ({ name, role, imgSrc, phoneLink, emailLink }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="agent-card">
        <Image src={imgSrc} alt="agent-img" />
        <div className="agent-card-footer">
          <div className="agent-info">
            <h6>{name}</h6>
            <p>{role}</p>
          </div>
          <div className="agent-icons">
          <Link href="/ContactMe">
              <FontAwesomeIcon icon={faPhone} className='m-1'/>
          </Link>
          <Link href="/Contactme">
              <FontAwesomeIcon icon={faEnvelope} className='m-1'/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
