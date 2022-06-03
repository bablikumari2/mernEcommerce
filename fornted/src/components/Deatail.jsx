import "./payment.css";

import { useState, useEffect } from "react";
import { Modal } from "./modal";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navCart } from "../redux/actions";
import { Nav } from "./Help";

export const Detail = () => {
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
    <Nav/>
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
           
            <hr></hr>
          </div>
         
          <div className="total">
            <p>Total</p>
            <p style={{ marginRight: "24px" }}>
              Rs{" "}
              {data.reduce((acc, curr) => {
                return acc + curr.qty * Math.ceil(+curr.price) ;
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
