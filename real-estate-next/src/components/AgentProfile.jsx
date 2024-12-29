import React from 'react';
import person from "../assets/imgs/person.png";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const AgentProfile = () => {
  return (
    <div className="col-lg-8 col-12 py-2">
      <div className="company-agent">
        <div className="Image-agent">
          <Image src={person} alt="agent Picture" className="image-agent" />
        </div>
        <div className="profile-info p-0">
          <h2>Cameron Williamson</h2>
          <p>Company Agent at <strong>Themesflat</strong></p>
          <p className="contact-info">
            <span style={{ color: '#f1913d' }}>
              <FontAwesomeIcon icon={faPhone} className="m-2" />
              +7-445-556-8337
            </span>
            <br />
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="m-2" />
              themesflat@gmail.com
            </span>
            <br />
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="m-2" />
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
            <Link href="#" className="read-more">Read More</Link>
            <FontAwesomeIcon icon={faCircleArrowDown} className="m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;

