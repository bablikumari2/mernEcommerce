import "./model.css";
import { Debit } from "./debitcart";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Modal = ({ onClose }) => {
  const [data, setData] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        width: "100%",
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        height: "100vh",
      }}
    >
      {data ? (
        <>
          {" "}
          <Debit />{" "}
        </>
      ) : (
        <>
          {" "}
          <div
            className="modal-box"
            style={{ width: "400px", height: "500px", background: "white" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ width: "300px" }}>
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "15px",
                  fontWeight: "500",
                  fontFamily: "sans-serif",
                }}
              >
                Add a Payment method
              </p>
            </div>
            <div className="payment-methods" onClick={() => setData(true)}>
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/80c4e62773d67d8a496e4ed278797e39.svg"></img>
              <p style={{ paddingLeft: "15px" }}> Credit or debit card</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods">
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/c65f7891b19cf669598f35315e5c1192.svg"></img>
              <p style={{ paddingLeft: "15px" }}>Gift card</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods">
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/bc3961296b4d00b483abcb06bbf88941.svg"></img>
              <p style={{ paddingLeft: "15px" }}> PayPal</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods">
              <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/7b2721528115f58f088d655e93d408c6.svg"></img>
              <p style={{ paddingLeft: "15px" }}> Venmo</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
