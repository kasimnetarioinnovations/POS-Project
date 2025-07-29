import React, { useState } from 'react';
import './BarcodeModal.css'; // Import the styles

const DiscountModal = ({ onClose }) => {
  return (
    <div className="barcode-overlay">
      <div className="barcode-container">
         <div className='d-flex justify-content-between'>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Discount</h5>
        <button className="barcode-close-btn" onClick={onClose}>
          ✕
        </button>
         </div>
         <div className='d-flex flex-column gap-2 pb-3'>
            <span>Order Discount Type<span style={{color:"red"}}>*</span></span>
              <select name="" id="" className='py-2 px-2' style={{borderRadius:"5px", border:"1px solid #e3dcdc"}}>
                <option value="">Select</option>
                <option value="">Flat</option>
                <option value="">Percentage</option>
              </select>
        </div>
         <div  className='d-flex flex-column gap-2 pb-3'>
             <span>Value<span style={{color:"red"}}>*</span></span>
               <input className="barcode-input" type="text" placeholder='Value'/>
         </div>

        <div className="action-buttons">
          <button className="btn-cancel" onClick={onClose} style={{backgroundColor:"rgb(129, 189, 255)", border:"none"}}>Cancel</button>
          <button className="btn-add" style={{backgroundColor:"rgb(0, 122, 255)", border:"none"}}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
