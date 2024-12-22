import React, { useState } from 'react';
import Pagination from './Pagination'; // Import Pagination Component

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(2); // Starting on page 2 (you can change it)
  const totalPages = 20; // Set the total pages (example: 20 pages)

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div>
      {/* Blog content goes here */}
      
      {/* Pagination component */}
      <Pagination
        totalPages={totalPages}   // Total number of pages
        currentPage={currentPage} // Current active page
        onPageChange={handlePageChange} // Function to handle page change
      />
    </div>
  );
};

export default BlogPage;
