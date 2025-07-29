import React from 'react';
import './SplitBillModal.css'

const SplitBillModal = ({onClose}) => {
  return (
    <div>
      <div className="splitbill-overlay">
        <div className="splitbill-conatiner px-3 py-3">
             
                 <div className='d-flex justify-content-between align-items-center py-3' style={{borderBottom:"1px solid #e3dcdc"}}>
             <h5 className="">Split Payment</h5>
             <button className="barcode-close-btn" onClick={onClose}>
          ✕ </button>
          </div>
           
           <div className='py-4 d-flex flex-column gap-4' style={{borderBottom:"1px solid #e3dcdc"}}>
             <div className='d-flex justify-content-between align-items-center'>
                <label htmlFor="">Payment 1</label>
                 <select name="" id="" style={{width:"250px", padding:"5px 5px", borderRadius:"5px",border:"1px solid #e3dcdc"}}>
                    <option value="">Cash</option>
                    <option value="">Card</option>
                 </select>
                 <input type="text" placeholder='Enter your amount' style={{width:"250px", padding:"5px 5px", borderRadius:"5px",border:"1px solid #e3dcdc"}}/>
                 <button style={{border:"none",backgroundColor:"rgb(0, 122, 255)", borderRadius:"5px", color:"white", padding:"5px",width:"120px"}}>Charge</button>
             </div>
             <div className='d-flex justify-content-between align-items-center'>
                <label htmlFor="">Payment 2</label>
                 <select name="" id="" style={{width:"250px", padding:"5px 5px", borderRadius:"5px",border:"1px solid #e3dcdc"}}>
                    <option value="">Cash</option>
                    <option value="">Card</option>
                 </select>
                 <input type="text" placeholder='Enter your amount' style={{width:"250px", padding:"5px 5px", borderRadius:"5px",border:"1px solid #e3dcdc"}}/>
                 <button style={{border:"none",backgroundColor:"rgb(0, 122, 255)", borderRadius:"5px", color:"white", padding:"5px",width:"120px"}}>Charge</button>
             </div>
              <div className='d-flex justify-content-end'><button  style={{border:"none", padding:"5px",borderRadius:"5px", width:"120px", color:"white", backgroundColor:"rgb(0, 122, 255)"}}>Add More</button></div>
           </div>
             <div className='d-flex justify-content-end gap-2 py-3'>
                <button style={{border:"none", padding:"9px", borderRadius:"5px",backgroundColor:"rgb(129, 189, 255)",color:"white"}}>Cancel</button>
                <button style={{border:"none", padding:"9px", borderRadius:"5px",backgroundColor:"rgb(0, 122, 255)",color:"white"}}>Complete Sale</button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default SplitBillModal;
