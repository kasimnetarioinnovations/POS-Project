import React,{useState} from "react";
import "./ViewOrders.css";
import { IoIosSearch } from "react-icons/io";
import Products from "./Products";

const ViewOrders = ({ onClose }) => {
       const [showViewProductsModal, setShowViewProductsModal] = useState(false);
      const openViewProductsModal = () => setShowViewProductsModal(true);
      const closeViewProductsModal = () => setShowViewProductsModal(false);
  return (
    <div>
      <div className="vieworders-overlay">
        <div className="vieworders-container px-3 py-3">
          <div
            className="d-flex justify-content-between align-items-center py-3"
            style={{ borderBottom: "1px solid #e3dcdc" }}
          >
            <h5 className="">Orders</h5>
            <button className="barcode-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="d-flex gap-2 py-4">
            <button
              className="transaction-btn"
              style={{
                border: "none",
                backgroundColor: "#ebe8e8",
                borderRadius: "5px",
                padding: "7px",
              }}
            >
              onhold
            </button>
            <button
              className="transaction-btn"
              style={{
                border: "none",
                backgroundColor: "#ebe8e8",
                borderRadius: "5px",
                padding: "7px",
              }}
            >
              Unpaid
            </button>
            <button
              className="transaction-btn"
              style={{
                border: "none",
                backgroundColor: "#ebe8e8",
                borderRadius: "5px",
                padding: "7px",
              }}
            >
              Paid
            </button>
          </div>
          <div className="d-flex flex-column gap-4">
            <div
              style={{
                border: "1px solid #e3dcdc",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <IoIosSearch />
              <input
                type="search"
                placeholder="Search Product"
                style={{ border: "none", outline: "none", width: "100%" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#F9FAFB",
                border: "1px solid #e3dcdc",
                borderRadius: "5px",
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <span
                style={{
                  width: "120px",
                  textAlign: "center",
                  fontSize: "12px",
                  backgroundColor: "#1B2850",
                  padding: "3px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Order ID: #45698
              </span>
              <div className="d-flex gap-5">
                <span style={{ display: "flex", gap: "10px" }}>
                  Cashier :<span style={{ color: "grey" }}>admin</span>
                </span>
                <span style={{ display: "flex", gap: "10px" }}>
                  Customer :<span style={{ color: "grey" }}>Botsford</span>
                </span>
              </div>
              <div className="d-flex gap-5">
                <span style={{ display: "flex", gap: "10px" }}>
                  Total :<span style={{ color: "grey" }}>$900</span>
                </span>
                <span style={{ display: "flex", gap: "10px" }}>
                  Date :
                  <span style={{ color: "grey" }}>24 Dec 2024 13:39:11</span>
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#95b5f7ff",
                  color: "#155EEF ",
                  borderRadius: "5px",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                Customer need to recheck the product once
              </div>
               <div className="d-flex justify-content-center gap-2">
                 <button style={{borderRadius:"5px",padding:"5px 8px",backgroundColor:"#E04F16",color:"white",border:"none"}}>Open Order</button>
                 <button style={{borderRadius:"5px",padding:"5px 8px",backgroundColor:"#0E9384", color:"white",border:"none"}} onClick={openViewProductsModal}>View Products</button>
                 <button style={{borderRadius:"5px",padding:"5px 8px",backgroundColor:"#3538CD", color:"white",border:"none"}}>Print</button>
               </div>
            </div>
            <div
              style={{
                backgroundColor: "#F9FAFB",
                border: "1px solid #e3dcdc",
                borderRadius: "5px",
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <span
                style={{
                  width: "120px",
                  textAlign: "center",
                  fontSize: "12px",
                  backgroundColor: "#1B2850",
                  padding: "3px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Order ID : #666659
              </span>
              <div className="d-flex gap-5">
                <span style={{ display: "flex", gap: "10px" }}>
                  Cashier :<span style={{ color: "grey" }}>admin</span>
                </span>
                <span style={{ display: "flex", gap: "10px" }}>
                  Customer :<span style={{ color: "grey" }}>Botsford</span>
                </span>
              </div>
              <div className="d-flex gap-5">
                <span style={{ display: "flex", gap: "10px" }}>
                  Total :<span style={{ color: "grey" }}>$900</span>
                </span>
                <span style={{ display: "flex", gap: "10px" }}>
                  Date :
                  <span style={{ color: "grey" }}>24 Dec 2024 13:39:11</span>
                </span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      {showViewProductsModal &&<Products onClose={closeViewProductsModal}/>}
    </div>
  );
};

export default ViewOrders;
