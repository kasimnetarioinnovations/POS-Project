import React, { useState } from "react";
import './Card.css'


const Card = ({product }) => {
  const [count, setCount] = useState(4); // default value

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0)); // prevent negative
  return (
    <div
     
    >
      <div
        className="card"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          width: "220px",
          height: "300px",
          borderRadius: "5px",
          padding: "10px 10px",
        }}
      >
        <img
         className="card-product"
          style={{
            backgroundColor: "#f5f4f4",
            width: "100%",
            height: "170px",
            objectFit: "contain",
            padding: "10px",
          }}
          src={product.image}
          alt={product.name}
        />

        <div
          className="productdatails"
          style={{
            padding: "10px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div className="d-flex flex-column">
            <span style={{ color: "grey" }}>{product.category}</span>
            <span style={{ fontWeight: "500" }}>{product.name}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span style={{ fontWeight: "500" }}>${product.price}</span>
            {/* <span className='d-flex align-items-center gap-2'><button style={{border:"none", borderRadius:"50%",width:"25px", height:"25px", display:"flex",alignItems:"center",justifyContent:"center", backgroundColor:"#dbd8d8"}}>-</button>4 <button style={{border:"none", borderRadius:"50%",width:"25px", height:"25px", display:"flex",alignItems:"center",justifyContent:"center", backgroundColor:"#dbd8d8"}}>+</button>
                           </span>    */}
            <span className="d-flex align-items-center gap-2">
              <button
                onClick={decrement}
                style={{
                  border: "none",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#dbd8d8",
                }}
              >
                -
              </button>

              {count}

              <button
                onClick={increment}
                style={{
                  border: "none",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#dbd8d8",
                }}
              >
                +
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
