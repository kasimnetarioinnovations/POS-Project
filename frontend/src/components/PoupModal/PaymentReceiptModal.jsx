import React from 'react';
import './PaymentReceiptModal.css';

const PaymentReceiptModal = () => {
  const handlePrint = () => {
    window.print(); // or use ReactToPrint if needed
  };

  return (
    <div className="receipt-container" style={{height:"100vh" ,overflowY:"scroll"}}>
      <div className="text-center">
        <img
          src="https://dreamguys.co.in/pos/template/img/logo.png"
          alt="logo"
          className="invoice-logo"
        />
        <h5 className="mt-2 mb-0">Dreamguys Technologies Pvt Ltd.,</h5>
        <p className="mb-1">Phone Number: +1 5656665656</p>
        <p className="mb-2">Email: example@gmail.com</p>
      </div>

      <h5 className="text-center fw-bold mb-3">Tax Invoice</h5>

      <div className="d-flex justify-content-between">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Customer Id:</strong> #LL93784</p>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <p><strong>Invoice No:</strong> CS132453</p>
        <p><strong>Date:</strong> 01.07.2022</p>
      </div>

      <table className="table table-bordered invoice-table mb-3">
        <thead>
          <tr>
            <th># Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Red Nike Laser</td>
            <td>$50</td>
            <td>3</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>2. Iphone 14</td>
            <td>$50</td>
            <td>2</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>3. Apple Series 8</td>
            <td>$50</td>
            <td>3</td>
            <td>$150</td>
          </tr>
        </tbody>
      </table>

      <div className="invoice-summary">
        <p><strong>Sub Total :</strong> $700.00</p>
        <p><strong>Discount :</strong> -$50.00</p>
        <p><strong>Shipping :</strong> 0.00</p>
        <p><strong>Tax (5%) :</strong> $5.00</p>
        <p><strong>Total Bill :</strong> $655.00</p>
        <p><strong>Due :</strong> $0.00</p>
        <h5 className="mt-2"><strong>Total Payable :</strong> <span className="text-primary">$655.00</span></h5>
      </div>

      <p className="text-center small mt-3">
        **VAT against this challan is payable through central registration. Thank you for your business!
      </p>

      <div className="text-center mt-3">
        <img
          src="https://barcode.tec-it.com/barcode.ashx?data=Sale31&code=Code128&translate-esc=true"
          alt="barcode"
          className="barcode-img"
        />
        <p className="mt-2">Sale 31</p>
      </div>

      <p className="text-center mt-2">Thank You For Shopping With Us. Please Come Again</p>

      <div className="text-center mt-3">
        <button className="btn  text-white" style={{backgroundColor:"#007AFF"}} onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default PaymentReceiptModal;
