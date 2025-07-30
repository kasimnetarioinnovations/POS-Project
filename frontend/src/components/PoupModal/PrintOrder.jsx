import React from "react";
import "./PrintOrder.css";

const PrintOrder = ({ onClose }) => {
  return (
    <div>
      <div className="printorder-overlay">
        <div className="printorder-container px-3 py-3">
          <div
            className="d-flex justify-content-between align-items-center py-3"
            
          >
            <h5 className="">Hold order</h5>
            <button className="barcode-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
          <div
            style={{
              borderTop: "1px solid #e3dcdc",
              borderBottom: "1px solid #e3dcdc",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              gap:"20px",
              padding:"30px"
            }}
          >
            <h1>4500.00</h1>
            <div className="d-flex flex-column w-100 gap-2">
              <span>
                Order Refrence <span style={{ color: "red" }}>*</span>
              </span>
              <input type="text" placeholder="Order reference" style={{padding: "10px", borderRadius: "5px", border: "1px solid #e3dcdc",}}/>
            </div>
            <p className="text-center">
              The current order will be set on hold. You can retreive this order
              from the pending order button. Providing a reference to it might
              help you to identify the order more quickly.
            </p>
          </div>

           <div className='d-flex justify-content-end gap-2 py-3'>
            <button style={{ border: "none", padding: "9px", borderRadius: "5px", backgroundColor: "rgb(129, 189, 255)", color: "white" }} onClick={onClose}>
              Cancel
            </button>
            <button style={{ border: "none", padding: "9px", borderRadius: "5px", backgroundColor: "rgb(0, 122, 255)", color: "white" }}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintOrder;
