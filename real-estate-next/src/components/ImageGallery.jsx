import React from 'react';
import livingRoom1 from '@/assets/imgs/pagefive/living-room1.jpg';
import livingRoom2 from '@/assets/imgs/pagefive/living-room2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
function ImageGallery() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* First Column: Large Image with Button */}
        <div className="col-md-6 col-12">
          <Image src={livingRoom1} className="img-fluid" alt="Living Room 1" />
          <button className="photo-button">
            <FontAwesomeIcon icon={faImage} /> 1/16 Photos
          </button>
        </div>

        {/* Second Column: Images and Small Thumbnails */}
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-12">
              <Image src={livingRoom2} className="img-fluid livingroom4" width="100%" alt="Living Room 4" />
            </div>
          </div>
          <div className="row mt-3 twolivingroom">
            <div className="col-md-6 col-6">
              <Image src={livingRoom2} className="img-fluid" width="100%" alt="Living Room 2" />
            </div>
            <div className="col-md-6 col-6">
              <Image src={livingRoom2} className="img-fluid" alt="Living Room 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
