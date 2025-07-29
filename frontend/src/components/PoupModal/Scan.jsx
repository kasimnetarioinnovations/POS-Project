import React from 'react';
import './Scan.css'
import barcode from '../../assets/Image/barcode.svg'

const Scan = ({onClose}) => {
  return (
    <div>
       <div className="scan-overlay">
          <div className="scan-conatainer px-3 py-3">
             <div className='d-flex justify-content-end'>
                   <button className="barcode-close-btn" onClick={onClose}>
               ✕
          </button>
             </div>
               <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                 <span style={{color:"#646B72", textAlign:"center"}}>Amount to Pay : <span style={{color:"#212B36"}}>$150</span></span>
                  <img src={barcode} alt="barcode" style={{width:"200px"}} />
                  <p className='text-center'>Scan your Phone or UPI App to Complete the payment</p>
               </div>
          </div>
       </div>
    </div>
  );
}

export default Scan;
