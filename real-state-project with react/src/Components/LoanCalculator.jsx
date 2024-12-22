import React, { useState } from 'react';

const LoanCalculator = () => {
  // State hooks for input values
  const [totalAmount, setTotalAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(0);
  const [propertyTax, setPropertyTax] = useState(3000);
  const [downPayment, setDownPayment] = useState(2000);
  const [amortizationPeriod, setAmortizationPeriod] = useState(12);
  const [homeInsurance, setHomeInsurance] = useState(3000);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Function to calculate the loan payment
  const calculatePayment = () => {
    // Basic loan calculation logic (you can enhance this logic)
    const principal = totalAmount - downPayment;
    const interest = (interestRate / 100) * principal;
    const monthlyRate = interest / amortizationPeriod;
    const monthlyPrincipal = principal / amortizationPeriod;
    const totalMonthly = monthlyRate + monthlyPrincipal + propertyTax / amortizationPeriod + homeInsurance / amortizationPeriod;
    setMonthlyPayment(totalMonthly.toFixed(2));
  };

  return (
    <div className="shadow videosection p-4">
      <div className="row">
        {/* Left Column (Loan Inputs) */}
        <div className="col-md-6 col-12">
          <h2>Loan Calculator</h2>
          <div className="form-group">
            <label htmlFor="total-amount">Total Amount</label>
            <input
              type="number"
              className="form-control"
              id="total-amount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(Number(e.target.value))}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="interest-rate">Interest Rate</label>
            <input
              type="number"
              className="form-control"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="property-tax">Property Tax</label>
            <input
              type="number"
              className="form-control"
              id="property-tax"
              value={propertyTax}
              onChange={(e) => setPropertyTax(Number(e.target.value))}
            />
          </div>
          <br />
          <button
            type="button"
            className="askbutton btn btn-primary mt-3"
            onClick={calculatePayment}
          >
            Calculate now <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        {/* Right Column (Down Payment, Amortization, and Insurance) */}
        <div className="col-md-6 col-12">
          <div className="form-group mt-5">
            <label htmlFor="down-payment">Down Payment</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="down-payment"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
              <span className="input-group-text">20%</span>
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="amortization-period">Amortization Period (months)</label>
            <select
              className="form-select"
              id="amortization-period"
              value={amortizationPeriod}
              onChange={(e) => setAmortizationPeriod(Number(e.target.value))}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="home-insurance">Home Insurance</label>
            <input
              type="number"
              className="form-control"
              id="home-insurance"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(Number(e.target.value))}
            />
          </div>
          <br />
          {monthlyPayment && (
            <p className="estimated-payment mt-4">
              Your estimated monthly payment: <span className="m-2">${monthlyPayment}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
