import React from "react";
import "./ResetModal.css";
import { RiResetLeftLine } from "react-icons/ri";

const ResetModal = ({onClose}) => {
  return (
    <div>
      <div className="reset-overlay">
        <div className="reset-container px-3 py-3">
          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <span
              style={{
                backgroundColor: "rgb(129, 189, 255)",
                color: "rgb(0, 122, 255)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <RiResetLeftLine />
            </span>
             <span style={{fontWeight:"500"}}>Confirm Your Action</span>
             <p className="text-center">The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?</p>
              <div className='d-flex justify-content-end gap-2 py-3'>
            <button style={{ border: "none", padding: "9px", borderRadius: "5px", backgroundColor: "rgb(129, 189, 255)", color: "white" }} onClick={onClose}>
              No, Cancel
            </button>
            <button style={{ border: "none", padding: "9px", borderRadius: "5px", backgroundColor: "rgb(0, 122, 255)", color: "white" }}>
              Yes, Proceed
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
