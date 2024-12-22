import React, { useState } from 'react';

const Paginationvariant = ({ totalProperties, propertiesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  // Handle page change
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Handle next page click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page click
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate which pages to show in pagination range
  const getPageNumbers = () => {
    const range = [];
    const maxPagesToShow = 5;

    // If there are more than maxPagesToShow pages
    if (totalPages > maxPagesToShow) {
      const startPage = Math.max(1, currentPage - 2); // Show 2 pages before the current page
      const endPage = Math.min(totalPages, currentPage + 2); // Show 2 pages after the current page

      for (let i = startPage; i <= endPage; i++) {
        range.push(i);
      }

      // Add ellipsis if the range doesn't show the first or last page
      if (startPage > 1) range.unshift('...');
      if (endPage < totalPages) range.push('...');
    } else {
      // If the total number of pages is less than maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    }

    return range;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination container">
      <div className="info">{`${(currentPage - 1) * propertiesPerPage + 1} - ${Math.min(
        currentPage * propertiesPerPage,
        totalProperties
      )} of ${totalProperties}+ properties available`}</div>
      <div>
        <a
          href="#"
          className="prev"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </a>
        {pageNumbers.map((page, index) => (
          <a
            key={index}
            href="#"
            className={`page ${currentPage === page ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (page !== '...') handlePageClick(page); // Avoid clicking on ellipsis
            }}
          >
            {page}
          </a>
        ))}
        <a
          href="#"
          className="next"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Paginationvariant;
