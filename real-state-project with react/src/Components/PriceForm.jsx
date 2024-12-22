import React, { useState } from 'react';

const PriceForm = () => {
  // State to hold form data
  const [price, setPrice] = useState('');
  const [unitPrice, setUnitPrice] = useState('none');
  const [beforePrice, setBeforePrice] = useState('');
  const [afterPrice, setAfterPrice] = useState('');

  // Handlers for form inputs
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleUnitPriceChange = (e) => setUnitPrice(e.target.value);
  const handleBeforePriceChange = (e) => setBeforePrice(e.target.value);
  const handleAfterPriceChange = (e) => setAfterPrice(e.target.value);

  return (
    <div className='row'>
     <div className='col-lg-3 col-12'></div>
    <div className="col-lg-9 col-12">
    <div className="white-bg p-4 mb-3">
      <h3 className="fw-bold">Price</h3>
      <div className="row">
        {/* Price Input */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="price" className="form-label fw-bold">
              Price:*
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Example value: 12345.67"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        {/* Unit Price Select */}
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="unit-price" className="form-label fw-bold">
              Unit Price:*
            </label>
            <select
              className="form-select"
              id="unit-price"
              value={unitPrice}
              onChange={handleUnitPriceChange}
            >
              <option value="none">None</option>
              <option value="million">Million</option>
              <option value="twoMillion">2 Million</option>
            </select>
          </div>
        </div>

        {/* Before Price */}
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="before-price" className="form-label fw-bold">
              Before Price Label:*
            </label>
            <input
              type="number"
              className="form-control"
              id="before-price"
              value={beforePrice}
              onChange={handleBeforePriceChange}
            />
          </div>
        </div>

        {/* After Price */}
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="after-price" className="form-label fw-bold">
              After Price Label:*
            </label>
            <input
              type="number"
              className="form-control"
              id="after-price"
              value={afterPrice}
              onChange={handleAfterPriceChange}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PriceForm;
