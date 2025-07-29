import React from 'react';
import './CreateCustomerModal.css';

const CreateCustomerModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
          <h5>Create</h5>
          <button onClick={onClose} style={{backgroundColor:"red", color:"white", borderRadius:"50%", width:"25px", height:"25px", display:"flex", justifyContent:"center", alignItems:"center" , fontSize:"12px", border:"none"}}>X</button>
        </div>

        <div className="modal-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Customer Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter phone" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" placeholder="Enter address" />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" placeholder="Enter city" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" placeholder="Enter country" />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn  me-2 text-white" onClick={onClose} style={{backgroundColor:"#81BDff"}}>Cancel</button>
              <button type="submit" className="btn text-white" style={{backgroundColor:"#007AFF"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomerModal;
