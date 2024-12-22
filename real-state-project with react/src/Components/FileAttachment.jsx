import React from 'react';
import Attachment  from '../assets/imgs/pagefive/doc.png';
import pdf from "../assets/imgs/pagefive/pdf.png"
const FileAttachment = () => {
  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Floor Plans</h3><br />
      <div className="row">
        {/* First File Attachment */}
        <div className="col-md-6">
          <div className="d-flex">
            <img src={pdf} alt="PDF Icon" width="60px" />
            <p className="mt-3 p-2">Villa-Document.pdf</p>
            <a href="#" className="download-link mt-3 p-2">
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        {/* Second File Attachment */}
        <div className="col-md-6">
          <div className="d-flex">
            <img src={Attachment} alt="DOC Icon" width="60px" />
            <p className="mt-3 p-2">Villa-Document.pdf</p>
            <a href="#" className="download-link mt-3 p-2">
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileAttachment;
