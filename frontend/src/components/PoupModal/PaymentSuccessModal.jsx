import React, {useState} from 'react';
import './PaymentSuccessModal.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import PaymentReceiptModal from '../../components/PoupModal/PaymentReceiptModal'

const PaymentSuccessModal = ({onPrint, onNext }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  

  const handlePrintClick = () => {
    setShowReceipt(true); // Show invoice component
  
  };
  return (
    <div className="payment-modal-backdrop">
      <div className="payment-modal-box text-center">
        <BsCheckCircleFill className="payment-success-icon" />
        <h4 className="fw-bold mt-3">Payment Completed</h4>
        <p className="text-muted mb-4">Do you want to Print Receipt for the Completed Order</p>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn text-white"  onClick={handlePrintClick} style={{backgroundColor:"#81BDff"}}>Print Receipt</button>
          <button className="btn  text-white" onClick={onNext} style={{backgroundColor:"#007AFF"}}>Next Order</button>
        </div>
      </div>
      {showReceipt && <PaymentReceiptModal/>}
    </div>
  );
};

export default PaymentSuccessModal;
