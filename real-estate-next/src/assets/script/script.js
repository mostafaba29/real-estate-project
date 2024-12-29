
    function calculatePayment() {
      const totalAmount = parseFloat(document.getElementById('totalAmount').value);
      const downPayment = parseFloat(document.getElementById('downPayment').value);
      const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
      const amortizationPeriod = parseInt(document.getElementById('amortizationPeriod').value);
      const propertyTax = parseFloat(document.getElementById('propertyTax').value);
      const homeInsurance = parseFloat(document.getElementById('homeInsurance').value);

      // Calculate monthly payment using a suitable formula (replace this with your actual calculation logic)
      const monthlyPayment = (totalAmount - downPayment) * (interestRate / 12) * Math.pow(1 + interestRate / 12, amortizationPeriod) / (Math.pow(1 + interestRate / 12, amortizationPeriod) - 1) + propertyTax / 12 + homeInsurance / 12;

      document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
    }

    function resetForm() {
      document.getElementById('totalAmount').value = 1000;
      document.getElementById('downPayment').value = 2000;
      document.getElementById('interestRate').value = 0;
      document.getElementById('amortizationPeriod').value = 12;
      document.getElementById('propertyTax').value = 3000;
      document.getElementById('homeInsurance').value = 3000;
      document.getElementById('monthlyPayment').textContent = 8000;
    }