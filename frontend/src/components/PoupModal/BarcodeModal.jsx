import React, { useState } from 'react';
import './BarcodeModal.css'; // Import the styles

const BarcodeModal = ({ onClose }) => {
  const [quantity, setQuantity] = useState(4);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="barcode-overlay">
      <div className="barcode-container">
         <div className='d-flex justify-content-between align-items-center'>
             <h5 className="">Barcode</h5>
             <button className="barcode-close-btn" onClick={onClose}>
          ✕ </button>
         </div>

        <input
          type="text"
          placeholder="Enter Barcode of the Product"
          className="barcode-input"
        />

        <div className="barcode-item-box">
          <div className="item-info">
            <p className="item-name">Tablet 1.02 inch</p>
            <p className="item-price">$3000</p>
          </div>

          <div className="qty-controls">
            <button className="qty-btn" onClick={handleDecrement}>−</button>
            <span>{quantity}</span>
            <button className="qty-btn" onClick={handleIncrement}>+</button>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-cancel" onClick={onClose} style={{backgroundColor:"rgb(129, 189, 255)",border:"none"}}>Cancel</button>
          <button className="btn-add" style={{backgroundColor:"rgb(0, 122, 255)",  border:"none"}}>Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default BarcodeModal;
