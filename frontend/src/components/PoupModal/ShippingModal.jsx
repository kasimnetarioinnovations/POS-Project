import React, { useState } from 'react';
import './BarcodeModal.css'; // Import the styles

const ShippingModal = ({ onClose }) => {
  return (
    <div className="barcode-overlay">
      <div className="barcode-container">
         <div className='d-flex justify-content-between'>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Shipping Cost</h5>
        <button className="barcode-close-btn" onClick={onClose}>
          ✕
        </button>
         </div>
        <div className='d-flex flex-column gap-2'>
            <span>Shipping cost<span style={{color:"red",}}>*</span></span>
             <input
          type="text"
          placeholder="Enter Shipping Cost"
          className="barcode-input"
        />
        </div>


        <div className="action-buttons">
          <button className="btn-cancel" onClick={onClose} style={{backgroundColor:"rgb(129, 189, 255)", border:"none"}}>Cancel</button>
          <button className="btn-add" style={{backgroundColor:"rgb(0, 122, 255)", border:"none"}}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ShippingModal;
