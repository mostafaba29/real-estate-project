import React, { useState } from 'react';
import '../assets/css/indexstyle.css'; 
import loanImage from "../assets/imgs/loan/loan-2.jpg"

function LoanSection() {
  // State to hold form input values and the estimated monthly payment
  const [totalAmount, setTotalAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(0);
  const [propertyTax, setPropertyTax] = useState(3000);
  const [downPayment, setDownPayment] = useState(2000);
  const [amortizationPeriod, setAmortizationPeriod] = useState(12);
  const [homeInsurance, setHomeInsurance] = useState(3000);
  const [monthlyPayment, setMonthlyPayment] = useState(8000);

  // Function to calculate the monthly payment
  const calculatePayment = () => {
    // Example calculation logic (simple version for demonstration)
    const loanAmount = totalAmount - downPayment;
    const interestRateDecimal = interestRate / 100 / 12;
    const amortizationMonths = amortizationPeriod;
    const numerator = interestRateDecimal * Math.pow(1 + interestRateDecimal, amortizationMonths);
    const denominator = Math.pow(1 + interestRateDecimal, amortizationMonths) - 1;

    // Assuming this formula for simplicity: monthlyPayment = loanAmount * (numerator / denominator)
    const calculatedPayment = loanAmount * (numerator / denominator) + propertyTax / amortizationMonths + homeInsurance / amortizationMonths;
    setMonthlyPayment(calculatedPayment.toFixed(2));
  };

  // Function to reset the form to default values
  const resetForm = () => {
    setTotalAmount(1000);
    setInterestRate(0);
    setPropertyTax(3000);
    setDownPayment(2000);
    setAmortizationPeriod(12);
    setHomeInsurance(3000);
    setMonthlyPayment(8000);
  };

  return (
    <section className="loan my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="loan-card">
              <h3>Do you need a home loan?<br />Get Pre-approved</h3>
              <p>Find a lender who offers competitive mortgage rates and help you with pre-approval.</p>
            </div>
            {/* Loan form */}
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="totalAmount" className="form-label">Total Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalAmount"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="interestRate" className="form-label">Interest Rate</label>
                  <input
                    type="number"
                    className="form-control"
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="propertyTax" className="form-label">Property Tax</label>
                  <input
                    type="number"
                    className="form-control"
                    id="propertyTax"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="downPayment" className="form-label">Down Payment</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      id="downPayment"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                    />
                    <span className="input-group-text">20%</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="amortizationPeriod" className="form-label">Amortization Period (months)</label>
                  <select
                    className="form-select"
                    id="amortizationPeriod"
                    value={amortizationPeriod}
                    onChange={(e) => setAmortizationPeriod(e.target.value)}
                  >
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="homeInsurance" className="form-label">Home Insurance</label>
                  <input
                    type="number"
                    className="form-control"
                    id="homeInsurance"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>Your estimated monthly payment: <span id="monthlyPayment">{monthlyPayment}</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button type="button" className="button-loan active" onClick={calculatePayment}>Calculate now</button>
              </div>
              <div className="col-3">
                <button type="button" className="button-loan" onClick={resetForm}>Start over</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="loan-card">
            <img className="w-100 h-100" src={loanImage} alt="loan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanSection;
