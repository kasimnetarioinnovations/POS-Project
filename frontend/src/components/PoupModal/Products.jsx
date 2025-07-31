import React from "react";
import "./Products.css";
import product3 from '../../assets/Image/product3.png';
import product1 from '../../assets/Image/product1.png';

const Products = ({ onClose }) => {
  
  return (
    <div>
      <div className="products-overlay">
        <div className="products-container px-3 py-3">
          <div
            className="d-flex justify-content-between align-items-center py-3"
            style={{ borderBottom: "1px solid #e3dcdc" }}
          >
            <h5 className="">Products</h5>
            <button className="barcode-close-btn" onClick={onClose}>
              ✕
            </button>
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
            <div className="d-flex justify-content-between">
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
                Order ID : #45698
              </span>
              <span>Number of Products : 02</span>
            </div>
            <div
              style={{
                border: "1px solid #e3dcdc",
                borderRadius: "5px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                padding:"10px"
              }}
               
            >
                <div className="d-flex align-items-center gap-3">
                    <img style={{width:"20%"}} src={product3} alt="product3" />
                     <div className="d-flex flex-column">
                        <span style={{fontWeight:"500"}}>Red Nike Laser</span>
                        <span style={{color:"grey"}}>Quantity : 04</span>
                     </div>
                </div>
                 <div style={{color:"#0E9384"}}>
                    $2000
                 </div>
            </div>
             <div
              style={{
                border: "1px solid #e3dcdc",
                borderRadius: "5px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                padding:"10px"
              }}
               
            >
                <div className="d-flex align-items-center gap-3">
                    <img style={{width:"20%"}} src={product1} alt="product3" />
                     <div className="d-flex flex-column">
                        <span style={{fontWeight:"500"}}>Iphone 11S</span>
                        <span style={{color:"grey"}}>Quantity : 04</span>
                     </div>
                </div>
                 <div style={{color:"#0E9384"}}>
                    $3000
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
