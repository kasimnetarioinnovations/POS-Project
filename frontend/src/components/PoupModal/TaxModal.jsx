import React, { useState } from 'react';
import './BarcodeModal.css'; // Import the styles

const TaxModal = ({ onClose }) => {
  return (
    <div className="barcode-overlay">
      <div className="barcode-container">
         <div className='d-flex justify-content-between'>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Order Taxt</h5>
        <button className="barcode-close-btn" onClick={onClose}>
          ✕
        </button>
         </div>
        <div className='d-flex flex-column pb-3 gap-2'>
            <span>Order Tax<span style={{color:"red"}}>*</span></span>
              <select name="" id="" className='py-2 px-2' style={{borderRadius:"5px", border:"1px solid #e3dcdc"}}>
                <option value="">Select</option>
                <option value="">No Tax</option>
                <option value="">@10</option>
                <option value="">VAT</option>
                <option value="">SLTAX</option>
              </select>
        </div>


        <div className="action-buttons">
          <button className="btn-cancel" onClick={onClose} style={{backgroundColor:"rgb(129, 189, 255)", border:"none"}}>Cancel</button>
          <button className="btn-add" style={{backgroundColor:"rgb(0, 122, 255)", border:"none"}}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TaxModal;
