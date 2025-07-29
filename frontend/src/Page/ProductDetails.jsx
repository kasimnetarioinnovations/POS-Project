import React, { useState } from "react";
import './ProductDetails.css'
import header_logo from "../assets/Image/logo.svg";
import { CiClock2 } from "react-icons/ci";
import { RiGlobalLine } from "react-icons/ri";
import freshmart_logo from "../assets/Image/avator1.webp";
import { HiOutlineCalculator } from "react-icons/hi";
import { IoMdQrScanner } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { BiLoaderCircle } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import user_headerlogo from "../assets/Image/avator1.webp";
import product1 from "../assets/Image/product1.png";
import product2 from "../assets/Image/product2.png";
import product3 from "../assets/Image/product3.png";
import product4 from "../assets/Image/product4.png";
import product5 from "../assets/Image/product5.png";
import product6 from "../assets/Image/product6.png";
import product7 from "../assets/Image/product7.png";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { TbUserPlus } from "react-icons/tb";
import { LuScanLine } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { RiRecordCircleFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import CreateCustomerModal from "../components/PoupModal/CreateCustomerModal";
import PaymentSuccessModal from "../components/PoupModal/PaymentSuccessModal";
import cash_logo from "../assets/Image/cash-icon.svg"
import card_logo from "../assets/Image/card.svg"
import points_logo from "../assets/Image/points.svg"
import deposit_logo from "../assets/Image/deposit.svg"
import cheque_logo from "../assets/Image/cheque.svg"
import gift_logo from "../assets/Image/giftcard.svg"
import scan_logo from "../assets/Image/scan-icon.svg"
import paylater_logo from "../assets/Image/paylater.svg"
import external_logo from "../assets/Image/external.svg"
import splitbill_logo from "../assets/Image/split-bill.svg"
import BarcodeModal from "../components/PoupModal/BarcodeModal";
import ShippingModal from "../components/PoupModal/ShippingModal";
import TaxModal from "../components/PoupModal/TaxModal";
import CouponModal from "../components/PoupModal/CouponModal";
import DiscountModal from "../components/PoupModal/Discount";
import CashModal from "../components/PoupModal/CashModal";
import Scan from "../components/PoupModal/Scan";
import SplitBillModal from "../components/PoupModal/SplitBillModal";

const SidebarNav = styled.div`
  background-color: white;
  width: 90px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 🔑 define default border */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s;

  &:hover {
    border: 2px solid blue; /* 🔁 only color changes */
    cursor: pointer;
  }
`;


const ProductDetails = () => {
  const [isOnRoundoff, setIsOnRoundoff] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showBarcodeModal, setShowBarcodeModal] = useState(false);
  const openBarcodeModal = () => setShowBarcodeModal(true);
  const closeBarcodeModal = () => setShowBarcodeModal(false);
   const [showShippingModal, setShowShippingModal] = useState(false);
  const openShippingModal = () => setShowShippingModal(true);
  const closeShippingModal = () => setShowShippingModal(false);
   const [showTaxModal, setShowTaxModal] = useState(false);
  const openTaxModal = () => setShowTaxModal(true);
  const closeTaxModal = () => setShowTaxModal(false);
   const [showCouponModal, setShowCouponModal] = useState(false);
  const openCouponModal = () => setShowCouponModal(true);
  const closeCouponModal = () => setShowCouponModal(false);
   const [showDiscountModal, setShowDiscountModal] = useState(false);
  const openDiscountModal = () => setShowDiscountModal(true);
  const closeDiscountModal = () => setShowDiscountModal(false);
   const [showCashModal, setShowCashModal] = useState(false);
  const openCashModal = () => setShowCashModal(true);
  const closeCashModal = () => setShowCashModal(false);
   const [showScanModal, setShowScanModal] = useState(false);
  const openScanModal = () => setShowScanModal(true);
  const closeScanModal = () => setShowScanModal(false);
   const [showSplitbillModal, setShowSplitbillModal] = useState(false);
  const openSplitbillModal = () => setShowSplitbillModal(true);
  const closeSplitbillModal = () => setShowSplitbillModal(false);
  const [showSuccess, setShowSuccess] = useState(false);
   const closeSucessModal = () => setShowSuccess(false);
  const handlePaymentClick = () => {
    // simulate payment process here
    setShowSuccess(true);
  };
  const handlePrint = () => {
    console.log("Printing Receipt...");
    // window.print() or your print logic
  };

  const handleNext = () => {
    console.log("Proceed to next order...");
    setShowSuccess(false);
  };
  return (
    <div className="position-relative">
      {/* header-start??? */}
      <header style={{ borderBottom: "1px solid #e3dcdc" }}>
        <nav className="d-flex justify-content-between align-items-center px-3 py-3">
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <img style={{ width: "25%" }} src={header_logo} alt="header_logo" />
            <span
              style={{
                backgroundColor: "#009587",
                color: "white",
                borderRadius: "5px",
                padding: "1px",
                display: "flex",
                alignItems: "center",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "120px",
                height: "35px",
              }}
            >
              <CiClock2 />
              <p className="m-0">09:25:32</p>
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span
              style={{
                backgroundColor: "#6e36ed",
                color: "white",
                borderRadius: "5px",
                padding: "1px",
                display: "flex",
                alignItems: "center",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "120px",
                height: "35px",
              }}
            >
              <RiGlobalLine />
              <p className="m-0">Dashboard</p>
            </span>

            <span
              style={{
                border: "1px solid #e3dcdc",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "140px",
                height: "35px",
              }}
            >
              <img
                style={{ width: "20%" }}
                src={freshmart_logo}
                alt="freshmart_logo"
              />
              <select
                name=""
                id=""
                style={{ border: "none", color: "#444040" }}
              >
                <option value="">Freshmart</option>
                <option value="">Vmart</option>
              </select>
            </span>

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#f74200",
                color: "white",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HiOutlineCalculator />
            </span>

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoMdQrScanner />
            </span>

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaRegMoneyBillAlt />
            </span>

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LuPrinter />
            </span>

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BiLoaderCircle />
            </span>

            {/* <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <GiNetworkBars />
            </span> */}

            <span
              style={{
                borderRadius: "5px",
                backgroundColor: "#efe9e9",
                padding: "10px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoSettingsOutline />
            </span>

            <span
              style={{
                padding: "10px",
                width: "55px",
                height: "35px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "5px",
                }}
                src={user_headerlogo}
                alt="user_headerlogo"
              />
            </span>
          </div>
        </nav>
      </header>
      {/* header-end */}

      {/* main-content-start? */}
      <div
        className="main-content px-3 d-flex justify-content-between "
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="sidebar-content d-flex gap-4">
          <div style={{ borderRight: "1px solid #e3dcdc", width: "120px" }}>
            <div
              className="sidebar py-4"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Link
                to="product_card"
                style={{ textDecoration: "none", color: "black" }}
              >
                <SidebarNav>
                  <img
                    style={{
                      width: "20%",
                      height: "50%",
                      objectFit: "contain",
                    }}
                    src={product1}
                    alt="product1"
                  />
                  <p className="m-0">All</p>
                </SidebarNav>
              </Link>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product2}
                  alt="product1"
                />
                <p className="m-0">Headset</p>
              </SidebarNav>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product3}
                  alt="product1"
                />
                <p className="m-0">Shoes</p>
              </SidebarNav>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product4}
                  alt="product1"
                />
                <p className="m-0">Mobiles</p>
              </SidebarNav>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product5}
                  alt="product1"
                />
                <p className="m-0">Watches</p>
              </SidebarNav>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product6}
                  alt="product1"
                />
                <p className="m-0">Laptops</p>
              </SidebarNav>
              <SidebarNav>
                <img
                  style={{ width: "20%", height: "50%", objectFit: "contain" }}
                  src={product7}
                  alt="product1"
                />
                <p className="m-0">Applience</p>
              </SidebarNav>
            </div>
          </div>

          <div className="py-3" >
            <div className="header-product d-flex justify-content-between align-items-center">
              <div>
                <strong>Welcome, Wesley Adrian</strong>
                <p className="m-0">December 24, 2025</p>
              </div>
              <div className="d-flex gap-3">
                <span
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e3dcdc",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 10px",
                  }}
                >
                  <CiSearch />
                  <input
                    style={{ border: "none", outline: "none" }}
                    type="search"
                    placeholder="Search Product"
                  />
                </span>
                <span className="d-flex gap-2">
                  <button
                    style={{
                      backgroundColor: "#007AFF",
                      border: "none",
                      color: "white",
                      width: "170px",
                      borderRadius: "5px",
                    }}
                  >
                    <GoTag /> Veiw All Brands
                  </button>
                  <button
                    style={{
                      backgroundColor: "#81BDff",
                      border: "none",
                      color: "white",
                      width: "120px",
                      borderRadius: "5px",
                    }}
                  >
                    <CiStar /> Featured
                  </button>
                </span>
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>

        <div
          className="customer-info-container"
          style={{
            width: "550px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            padding: "10px 15px",
            // overflowY:"scroll",
            // height:"600px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid  #e3dcdc",
              margin: "10px 0",
            }}
          >
            <h1 className="fs-4">Order List</h1>{" "}
            <span>
              {" "}
              <span
                style={{
                  backgroundColor: "#1B2850",
                  color: "white",
                  borderRadius: "5px",
                  fontSize: "12px",
                  padding: "3px",
                }}
              >
                #ORD123
              </span>
              <MdDeleteForever style={{ color: "red", fontSize: "18px" }} />
            </span>
          </div>
          <strong>Customer Information</strong>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <select
              name=""
              id=""
              style={{
                border: "1px solid #e3dcdc",
                width: "350px",
                padding: "8px",
              }}
            >
              <option value="">Smith</option>
              <option value="">Sibley</option>
              <option value="">Adrian</option>
            </select>
            <div className="d-flex gap-2">
              <span
                onClick={openModal}
                style={{
                  backgroundColor: "#009587",
                  padding: "8px 10px",
                  borderRadius: "5px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <TbUserPlus />
              </span>
              <span
               onClick={openBarcodeModal}
                style={{
                  backgroundColor: "rgb(0, 122, 255)",
                  padding: "8px 10px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                <LuScanLine />
              </span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgb(247, 66, 0)",
              backgroundColor: "#ffede8",
              borderRadius: "5px",
              padding: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div>
              <span style={{ fontWeight: "500" }}>James Anderson</span>
              <div className="d-flex gap-1">
                <span style={{ color: "grey" }}>
                  Bonus{" "}
                  <span
                    style={{
                      backgroundColor: "rgb(0, 149, 135)",
                      color: "white",
                      borderRadius: "5px",
                      padding: "2px",
                      fontSize: "12px",
                    }}
                  >
                    148
                  </span>
                </span>
                |
                <span style={{ color: "grey" }}>
                  Loyality{" "}
                  <span
                    style={{
                      backgroundColor: "rgb(129, 189, 255)",
                      color: "white",
                      borderRadius: "5px",
                      padding: "2px",
                      fontSize: "12px",
                    }}
                  >
                    520
                  </span>
                </span>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "rgb(247, 66, 0)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 8px",
              }}
            >
              Apply
            </button>
            <span
              style={{
                backgroundColor: "rgb(247, 66, 0)",
                color: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "-10px",
                top: "-10px",
                fontSize: "10px",
              }}
            >
              X
            </span>
          </div>
          <hr />

          <div className="order-details-table py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 py-3">
                <span style={{ fontWeight: "500" }}>Order Details</span>
                <span
                  style={{
                    backgroundColor: "#ededed",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    padding: "0px 5px",
                    borderRadius: "5px",
                  }}
                >
                  Items: <span style={{ color: "green" }}>3</span>
                </span>
              </div>
              <button
                style={{
                  backgroundColor: "rgb(255, 237, 232)",
                  color: "red",
                  width: "70px",
                  height: "30px",
                  padding: "0 5px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Clear all
              </button>
            </div>

            <table className="w-100">
              <thead style={{ backgroundColor: "#e3e1e1", padding: "0 5px" }}>
                <tr>
                  <th className="px-3">Item</th>
                  <th className="px-3">Qty</th>
                  <th className="px-3">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="d-flex align-items-center gap-2px-3 py-2"
                    style={{ color: "grey" }}
                  >
                    <MdDeleteForever />
                    iPhone 14.64GB
                  </td>
                  <td className="px-3 py-2" style={{ color: "grey" }}>
                    <button style={{ border: "none" }}>-</button>
                    <span>1</span> <button style={{ border: "none" }}>+</button>
                  </td>
                  <td className="px-3 py-2">$15800</td>
                </tr>
                <tr>
                  <td
                    className="d-flex align-items-center gap-2px-3 py-2"
                    style={{ color: "grey" }}
                  >
                    <MdDeleteForever />
                    Red Nike Angelo
                  </td>
                  <td className="px-3 py-2" style={{ color: "grey" }}>
                    <button style={{ border: "none" }}>-</button>
                    <span>4</span> <button style={{ border: "none" }}>+</button>
                  </td>
                  <td className="px-3 py-2">$398</td>
                </tr>
                <tr>
                  <td
                    className="d-flex align-items-center gap-2px-3 py-2"
                    style={{ color: "grey" }}
                  >
                    <MdDeleteForever />
                    Tablet 1.02 inch
                  </td>
                  <td className="px-3 py-2" style={{ color: "grey" }}>
                    <button style={{ border: "none" }}>-</button>
                    <span>4</span> <button style={{ border: "none" }}>+</button>
                  </td>
                  <td className="px-3 py-2">$3000</td>
                </tr>
                <tr>
                  <td
                    className="d-flex align-items-center gap-2px-3 py-2"
                    style={{ color: "grey" }}
                  >
                    <MdDeleteForever />
                    IdealPad Slim 3i
                  </td>
                  <td className="px-3 py-2" style={{ color: "grey" }}>
                    <button style={{ border: "none" }}>-</button>
                    <span>4</span> <button style={{ border: "none" }}>+</button>
                  </td>
                  <td className="px-3 py-2">$3000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              border: "1px solid #6e36ed",
              backgroundColor: "#f3edfe",
              borderRadius: "5px",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="d-flex gap-2">
              <span
                style={{
                  backgroundColor: "#6e36ed",
                  borderRadius: "5px",
                  color: "white",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                <RiRecordCircleFill />
              </span>
              <span className="d-flex flex-column">
                <span style={{ color: "#6e36ed", fontWeight: "500" }}>
                  Discount 5%
                </span>
                <span style={{ color: "grey" }}>
                  For $20 Minimum Purchase, all items
                </span>
              </span>
            </div>
            <span>
              <RiDeleteBin5Line />
            </span>
          </div>

          <div className="payment-summary-container py-3 d-flex flex-column  gap-3">
            <span style={{ fontWeight: "500" }}>Payment Summary</span>
            {/* <select
              name=""
              id=""
              style={{ padding: "8px", border: "1px solid rgb(227, 220, 220)" }}
            >
              <option value="">Shipping</option>
              <option value="">Tax</option>
              <option value="">Coupon</option>
              <option value="">Discount</option>
            </select> */}
            {/* <div className="d-flex justify-content-between align-items-center ">
              <span
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <div
                  onClick={() => setIsOnRoundoff(!isOnRoundoff)}
                  style={{
                    width: "47px",
                    height: "24px",
                    backgroundColor: isOnRoundoff ? "#00C389" : "#ccc",
                    borderRadius: "999px",
                    padding: "2px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      transition: "transform 0.2s ease-in-out",
                      transform: isOnRoundoff
                        ? "translateX(23px)"
                        : "translateX(0px)",
                    }}
                  ></div>
                </div>
                Roundoff
              </span>
              <span>$0.11</span>
            </div> */}
            {/* <div className="d-flex justify-content-between align-items-center ">
              <span
                style={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Sub Total <FaRegEdit style={{ color: "grey" }} />
              </span>
              <span>$60.454</span>
            </div> */}
            <div className="d-flex justify-content-between align-items-center ">
              <span
                 onClick={openShippingModal}
                style={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Shipping <FaRegEdit />
              </span>
              <span>$40.21</span>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <span
               onClick={openTaxModal}
                style={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Tax <FaRegEdit />
              </span>
              <span>$25</span>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <span
              onClick={openCouponModal}
                style={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Coupon <FaRegEdit />
              </span>
              <span>$25</span>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <span
                onClick={openDiscountModal}
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Discount <FaRegEdit style={{ color: "grey" }} />
              </span>
              <span>$15.21</span>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <span
                style={{
                  display: "flex",
                  color: "grey",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <div
                  onClick={() => setIsOnRoundoff(!isOnRoundoff)}
                  style={{
                    width: "47px",
                    height: "24px",
                    backgroundColor: isOnRoundoff ? "#00C389" : "#ccc",
                    borderRadius: "999px",
                    padding: "2px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      transition: "transform 0.2s ease-in-out",
                      transform: isOnRoundoff
                        ? "translateX(23px)"
                        : "translateX(0px)",
                    }}
                  ></div>
                </div>
                Roundoff
              </span>
              <span>$0.11</span>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <span
                style={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Sub Total 
              </span>
              <span>$60.454</span>
            </div>
            <div className="d-flex justify-content-between align-items-center " style={{borderTop:"1px solid  #e3dcdc", margin:"15px 0", padding:"10px 0"}}>
              <span style={{ fontWeight: "500" }}>Total Payable</span>
              <span style={{ fontWeight: "500" }}>$56590</span>
            </div>
          </div>
           <div className="select-payment-container">
                <span style={{ fontWeight: "500" }}>Select Payment</span>

                <div className="payment-btn py-3 d-flex justify-content-between flex-wrap gap-2">
                  <button className="payment-btton" onClick={openCashModal}>
                   <img src={cash_logo} alt="" />  Cash
                  </button>
                   <button className="payment-btton">
                   <img src={card_logo} alt="" />  Card
                  </button>
                   <button className="payment-btton">
                   <img src={points_logo} alt="" />  Points
                  </button>
                   <button className="payment-btton">
                   <img src={deposit_logo} alt="" />  Deposit
                  </button>
                    <button className="payment-btton">
                   <img src={cheque_logo} alt="" />  Cheque
                  </button>
                    <button className="payment-btton">
                   <img src={gift_logo} alt="" />  Gift Card
                  </button>
                    <button className="payment-btton" onClick={openScanModal}>
                   <img src={scan_logo} alt="" />  Scan
                  </button>
                    <button className="payment-btton">
                   <img src={paylater_logo} alt="" />  Pay Later
                  </button>
                    <button className="payment-btton">
                   <img src={external_logo} alt="" />  External
                  </button>
                    <button className="payment-btton" onClick={openSplitbillModal}>
                   <img src={splitbill_logo} alt="" />  Split Bill
                  </button>
                </div>

                <div className="d-flex justify-content-between gap-2">
                  <button className="w-100" style={{border:"none", backgroundColor:"rgb(129, 189, 255)",color:"white", padding:"8px", borderRadius:"5px"}}>Print Order</button>
                  <button className="w-100" style={{border:"none",backgroundColor:"rgb(0, 122, 255)",color:"white", padding:"8px", borderRadius:"5px"}}>Place Order</button>
                </div>
           </div>
        </div>
      </div>
      {/* main-content-end */}

      {/* footer-content-start? */}
      <div
        className="footer-content"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          position:"fixed",
          zIndex:"1",
          width:"100%",
          bottom:"0",
          backgroundColor:"white"
        }}
      >
        <div className="d-flex gap-2">
          <button
            style={{
              border: "none",
              backgroundColor: "#f74200",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Hold
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#0060ee",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Void
          </button>
          <button
            onClick={handlePaymentClick}
            style={{
              border: "none",
              backgroundColor: "#00b1d6",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Payment
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#002d4c",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            View Orders
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#2b39cc",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Reset
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#ff0000",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Transaction
          </button>
        </div>
      </div>
      {/* footer-content-end? */}
      {showModal && <CreateCustomerModal onClose={closeModal} />}
       {showBarcodeModal &&<BarcodeModal  onClose={closeBarcodeModal} />}
      {showSuccess && (
        <PaymentSuccessModal onPrint={handlePrint} onNext={handleNext} onClose={closeSucessModal}/>
      )}
      {showShippingModal && <ShippingModal onClose={closeShippingModal}/>}
      {showTaxModal && <TaxModal onClose={closeTaxModal}/>}
      {showCouponModal &&<CouponModal onClose={closeCouponModal}/>}
      {showDiscountModal && <DiscountModal onClose={closeDiscountModal}/>}
      {showCashModal &&<CashModal onClose={closeCashModal}/>}
      {showScanModal && <Scan onClose={closeScanModal}/>}
      {showSplitbillModal &&<SplitBillModal  onClose={closeSplitbillModal}/>}
     
    </div>
  );
};

export default ProductDetails;
