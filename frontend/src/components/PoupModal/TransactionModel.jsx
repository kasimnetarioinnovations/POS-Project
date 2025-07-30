import React from 'react';
import './TransactionModel.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import pdf from '../../assets/Image/pdf.svg'
import excel from '../../assets/Image/excel.svg'
import { AiTwotonePrinter } from "react-icons/ai";

const TransactionModel = ({onClose}) => {
    const data = [
  {
    id: 1,
    name: 'Carl Evans',
    reference: 'INV/SL0101',
    date: '24 Dec 2024',
    amount: '$1000',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Minerva Rameriz',
    reference: 'INV/SL0102',
    date: '10 Dec 2024',
    amount: '$1500',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 3,
    name: 'Robert Lamon',
    reference: 'INV/SL0103',
    date: '27 Nov 2024',
    amount: '$1500',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 4,
    name: 'Patricia Lewis',
    reference: 'INV/SL0104',
    date: '18 Nov 2024',
    amount: '$2000',
    img: 'https://randomuser.me/api/portraits/women/64.jpg',
  },
  {
    id: 5,
    name: 'Mark Joslyn',
    reference: 'INV/SL0105',
    date: '06 Nov 2024',
    amount: '$800',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 6,
    name: 'Marsha Betts',
    reference: 'INV/SL0106',
    date: '25 Oct 2024',
    amount: '$750',
    img: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
  {
    id: 7,
    name: 'Daniel Jude',
    reference: 'INV/SL0107',
    date: '14 Oct 2024',
    amount: '$1300',
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
];
  return (
    <div>
       <div className="transaction-overlay">
         <div className="transaction-container px-3 py-3">
              <div className='d-flex justify-content-between align-items-center py-3' style={{ borderBottom: "1px solid #e3dcdc" }}>
            <h5 className="">Recent Transactions</h5>
            <button className="barcode-close-btn" onClick={onClose}>✕</button>
          </div>
            <div className='d-flex gap-2 py-4'>
                <button className='transaction-btn' style={{border:"none", backgroundColor:"#ebe8e8",borderRadius:"5px", padding:"7px"}}>Purchase</button>
                <button className='transaction-btn' style={{border:"none", backgroundColor:"#ebe8e8",borderRadius:"5px", padding:"7px"}}>Payment</button>
                <button className='transaction-btn' style={{border:"none", backgroundColor:"#ebe8e8",borderRadius:"5px", padding:"7px"}}>Return</button>
            </div>

             <div className="table-container" style={{border:"1px solid #e3dcdc"}}>
                  <div className="card p-3 shadow-sm rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search"
        />
        <div>
          <button className="btn  me-2" style={{border:"1px solid #ebe8e8"}}><img src={pdf} alt="pdf" /></button>
          <button className="btn  me-2" style={{border:"1px solid #ebe8e8"}}><img src={excel} alt="excel" /></button>
          <button className="btn me-2" style={{border:"1px solid #ebe8e8"}}>
            <AiTwotonePrinter />
          </button>
        </div>
      </div>
      <table className="table align-middle table-hover">
        <thead className="table-light">
          <tr>
            <th><input type="checkbox" /></th>
            <th>Customer</th>
            <th>Reference</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /></td>
              <td className="d-flex align-items-center gap-2">
                <img src={item.img} className="avatar-img rounded" alt="avatar" />
                <span>{item.name}</span>
              </td>
              <td>{item.reference}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>
                <button className="btn btn-light btn-sm me-1"  style={{border:"1px solid #ebe8e8"}}><MdOutlineRemoveRedEye size={16}/></button>
                <button className="btn btn-light btn-sm me-1"  style={{border:"1px solid #ebe8e8"}}><FiEdit size={16}/></button>
                <button className="btn btn-light btn-sm"  style={{border:"1px solid #ebe8e8"}}><RiDeleteBinLine size={16}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <select className="form-select form-select-sm d-inline w-auto me-2">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>Row Per Page</span>
        </div>
        <div>
          <button className="btn btn-light btn-sm me-1">&lt;</button>
          <button className="btn btn-warning btn-sm active">1</button>
          <button className="btn btn-light btn-sm ms-1">&gt;</button>
        </div>
      </div>
    </div>    
             </div>
         </div>
       </div>
    </div>
  );
}

export default TransactionModel;
