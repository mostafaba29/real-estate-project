import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  // Handle previous page click
  const handlePrevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      onPageChange(activePage - 1);
    }
  };

  // Handle next page click
  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
      onPageChange(activePage + 1);
    }
  };

  // Generate page numbers
  const renderPageNumbers = () => {
    let pageNumbers = [];
    
    if (totalPages <= 5) {
      // If there are 5 or fewer pages, show them all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show the first page, last page, and the active page with ellipses in between
      pageNumbers = [1, '...', activePage - 1, activePage, activePage + 1, '...', totalPages];
    }
    
    return pageNumbers.map((page, index) => {
      if (page === '...') {
        return <span key={index} className="ellipsis">...</span>;
      }
      
      return (
        <a
          key={index}
          href="#"
          className={`page ${page === activePage ? 'active' : ''}`}
          onClick={() => {
            setActivePage(page);
            onPageChange(page);
          }}
        >
          {page}
        </a>
      );
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="paginationVariant">
        <a href="#" className="prev" onClick={handlePrevPage}>
          <i className="fa-solid fa-angle-left"></i>
        </a>
        {renderPageNumbers()}
        <a href="#" className="next" onClick={handleNextPage}>
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
