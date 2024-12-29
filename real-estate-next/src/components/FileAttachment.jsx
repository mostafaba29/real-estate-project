import React from 'react';
import Attachment  from '@/assets/imgs/pagefive/doc.png';
import pdf from "@/assets/imgs/pagefive/pdf.png"
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
const FileAttachment = () => {
  return (
    <div className="shadow videosection p-4">
      <h3 className="bold">Floor Plans</h3><br />
      <div className="row">
        {/* First File Attachment */}
        <div className="col-md-6">
          <div className="d-flex">
            <Image src={pdf} alt="PDF Icon" width="60px" />
            <p className="mt-3 p-2">Villa-Document.pdf</p>
            <Link href="#" className="download-link mt-3 p-2">
              <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
        </div>

        {/* Second File Attachment */}
        <div className="col-md-6">
          <div className="d-flex">
            <Image src={Attachment} alt="DOC Icon" width="60px" />
            <p className="mt-3 p-2">Villa-Document.pdf</p>
            <Link href="#" className="download-link mt-3 p-2">
              <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileAttachment;
