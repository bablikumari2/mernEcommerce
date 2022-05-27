import "./payment.css";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navCart } from "../redux/actions";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((e) => e.logindata);

  const [data, setData] = useState([]);
  const [userDetail, setUserDetails] = useState({});
  console.log(userDetail, "user");
  const [modal, setModal] = useState(false);
  // const [rate,setRate]=useState(1)

  useEffect(() => {
    handleUserDetails();

    handleCartDetail();
  }, []);
  const handleCartDetail = () => {
    axios.get("https://mernbablicommerce.herokuapp.com/cartproduct").then(({ data }) => {
      const newData = data.map((product) => ({
        ...product,
        qty: 1,
      }));
      setData(newData);
    });
  };

  const handleUserDetails = () => {
    axios.get("https://mernbablicommerce.herokuapp.com/checkout").then(({ data }) => {
      setUserDetails(data);
    });
  };

  const handleRate = (id) => {
    axios.delete(`https://mernbablicommerce.herokuapp.com/cartproduct/${id}`).then((res) => {
      handleCartDetail();
    });
  };
  const handleChange = (id, e) => {
    dispatch(navCart());
    setData(
      data.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            qty: e.target.value,
          };
        }
        return product;
      })
    );
  };

  return (
    <>
      {modal && <Modal onClose={() => setModal(false)} />}
      <div className="container">
        <div style={{ width: "40%" }}>
          <div className="Payment" style={{ marginTop: "10%" }}>
            <p className="masai">ECOMMERCE</p>
            <p className="storee">Store</p>
          </div>

          <div className="accordion">
            <div style={{ lineHeight: "10px" }}>
              <p className="userrr">
                {" "}
                {userDetail[userDetail.length - 1]?.name}
              </p>
              <p className="userrr">
                {" "}
                {userDetail[userDetail.length - 1]?.Address},{" "}
                {userDetail[userDetail.length - 1]?.pincode}
              </p>
            </div>
          </div>
          <hr></hr>

          <div className="city" style={{ marginTop: "10px" }}>
            <div style={{ lineHeight: "10px" }}>
              <p className="userrr">Meet at Door</p>
              <p style={{ marginLeft: "30px", color: "green" }}>
                Add delivery instructions
              </p>
            </div>
          </div>
          <hr></hr>


          <div className="Payment">
            <p>Payment</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div className="method">
              <p>Add Payment Method</p>
              <button
                className="button"
                style={{ marginLeft: "300px", marginTop: "10px" }}
                onClick={() => {
                  setModal(true);
                }}
              >
                Edit
              </button>
            </div>
            <hr></hr>
          </div>
          <div style={{ marginLeft: "30px" }}>
           
            <hr></hr>
          </div>
          <div className="order_detail">
            <div className="item">
              <p>Your items</p>
            </div>
            {data.map((e) => (
              <div key={e._id}>
                <div className="product_name">
                  <select
                    name="Remove"
                    id="Remove"
                    onChange={(ev) => handleChange(e._id, ev)}
                  >
                    <option>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                  <p style={{ fontWeight: "500" }}>{e.title}</p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "green",
                    }}
                  >
                    Rs {e.qty * Math.ceil(e.price)} -/-
                  </p>
                </div>
                <div className="dish_detail">
                  <img
                    src={e.image}
                    alt=""
                    style={{ width: "50%", height: "100%" }}
                  />
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {e.category}
                  </p>
                  <button
                    onClick={() => handleRate(e._id)}
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      outline: "none",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="payment_detail">
          <div className="payment_order">
            <button
              className="place_order"
              onClick={() =>
                alert("Your Order is Placed Please Wait for your Delivery") ||
                navigate("/")
              }
            >
              Place Order
            </button>
            {/* <p style={{ fontSize: "15px", color: "grey" }}>
              If you’re not around when the delivery person arrives, they’ll
              leave your order at the door. By placing your order, you agree to
              take full responsibility for it once it’s delivered.
            </p> */}
            <hr></hr>
          </div>
          {/* <div className="offer_line">
            <p>You're saving with a Rs 0 Delivery Fee until Apr 28</p>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>

            <p style={{ fontSize: "15px" }}>
              Rs{" "}
              {data.reduce((acc, curr) => {
                return acc + curr.qty * Math.ceil(+curr.price);
              }, 0)}
              .00 -/-
            </p>
          </div>
          <div className="subtotal">
            <p>Promotion</p>
            <p style={{ color: "green" }}> - Rs 39.00-/-</p>
          </div>
          <div className="subtotal">
            <p>Taxes & Fees</p>
            <p style={{ fontSize: "15px" }}>Rs 57.00-/-</p>
          </div>
          <div className="subtotal">
            <p>Delivery Fee</p>
            <p style={{ fontSize: "15px" }}>Rs 49.00-/-</p>
          </div>
          <div className="subtotal">
            <p>CA driver benefits</p>
            <p style={{ fontSize: "15px" }}>Rs 29.00-/-</p>
          </div>

          <div className="subtotal">
            <p>Temporary fuel surcharge</p>
            <p style={{ fontSize: "15px" }}>Rs 19.00-/-</p>
          </div>
          <div style={{ width: "400px", marginLeft: "100px" }}>
            <hr></hr>
          </div> */}
          <div className="total">
            <p>Total</p>
            <p style={{ marginRight: "24px" }}>
              Rs{" "}
              {data.reduce((acc, curr) => {
                return acc + curr.qty * Math.ceil(+curr.price) + 154 / 2;
              }, 0)}{" "}
              -/-
            </p>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};
