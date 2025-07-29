import React from 'react';
import './CashModal.css'

const CashModal = ({onClose}) => {
  return (
    <div className='cash-overlay'>
      <div className="cash-container px-3 py-3">
         <div className='d-flex justify-content-between' style={{borderBottom:"1px solid #e3dcdc"}}>
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Finalize Sale</h5>
        <button className="barcode-close-btn" onClick={onClose}>
          ✕
        </button>
         </div>

           <div className='py-3 d-flex flex-column gap-3'>
               <div className='d-flex gap-2'>
                <div className="received-amount d-flex flex-column w-100 gap-2">
                  <span>Received Amount<span style={{color:"red"}}>*</span></span>
                <input type="text" placeholder='$ 1800' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px"}}/>
             </div>
             <div className="paying-amount d-flex flex-column w-100 gap-2">
                  <span>Paying Amount<span style={{color:"red"}}>*</span></span>
                <input type="text" placeholder='$ 1800' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px"}}/>
             </div>
             <div className="change d-flex flex-column w-100 gap-2">
                  <span>Change<span style={{color:"red"}}>*</span></span>
                <input type="text" placeholder='$ 0.00' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px"}}/>
             </div>
               </div>
                <div className='d-flex flex-column gap-3'>
                    <div className="payment-type d-flex flex-column w-100 gap-2">
                  <span>Payment Type<span style={{color:"red"}}>*</span></span>
                   <select name="" id="" className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px" , color:"grey"}}>
                    <option value="">Credit Card</option>
                    <option value="">Cash</option>
                    <option value="">Cheque</option>
                    <option value="">Deposit</option>
                    <option value="">Points</option>    
                   </select>
               
                </div>
                 <div className="payment-receiver d-flex flex-column w-100 gap-2">
                  <span>Payment Receiver</span>
                   
                   <input type="text" name="" id="" placeholder='Payment Receiver'  className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px"}}/>
               
                </div>
                 <div className="payment-note d-flex flex-column w-100 gap-2">
                  <span>Payment Note</span>
                  
                       <textarea name="" id="" placeholder='Type Your Message' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px", height:"120px"}}></textarea>
                </div>
                <div className="sale-note d-flex flex-column w-100 gap-2">
                  <span>Sale Note</span>
                  
                       <textarea name="" id="" placeholder='Type Your Message' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px", height:"120px"}}></textarea>
                </div>
                <div className="staff-note d-flex flex-column w-100 gap-2">
                  <span>Staff Note</span>
                  
                       <textarea name="" id="" placeholder='Type Your Message' className='p-2' style={{border:"1px solid #e3dcdc",borderRadius:"5px", height:"120px"}}></textarea>
                </div>
                </div>
                <div className="action-buttons">
          <button className="btn-cancel" onClick={onClose} style={{backgroundColor:"rgb(129, 189, 255)", border:"none"}}>Cancel</button>
          <button className="btn-add" style={{backgroundColor:"rgb(0, 122, 255)", border:"none"}}>Submit</button>
        </div>
           </div>
      </div>
    </div>
  );
}

export default CashModal;
