import "./payment.css";

import { useState, useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { navCart } from "../redux/actions";

export const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((e) => e.logindata);

  const [data, setData] = useState([]);
  const [userDetail, setUserDetails] = useState({});
  console.log(userDetail, "user");
  const [modal, setModal] = useState(false);
  // const [rate,setRate]=useState(1)

  useEffect(() => {
    

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
      
      <div >
       
     
        <div style={{ width: "100%" }}>
         
         
          <div className="order_detail">
            <div className="item">
              <p>Your items</p>
            </div>
            <h1  style={{ marginLeft: "30px" }}>IN YOUR SHOPPING BAG</h1>
            {data.map((e) => (
              <div key={e._id}>
                <div className="product_name">
                <img
                    src={e.image}
                    alt=""
                    style={{ width: "5%", height: "10%" }}
                  />
                   <p style={{ fontWeight: "500" }}>{e.category}</p>
                  <select
                    name="Remove"
                    id="Remove"
                    onChange={(ev) => handleChange(e._id, ev)}
                  >
                    <option>QTY</option>
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
                  <button
                    onClick={() => handleRate(e._id)}
                    className="from"
                   
                    
                  >
                    Remove from cart
                  </button>
                </div>
              
              </div>
            ))}
          </div>
        </div>
        <div className="payment_detailss">
          
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
          <button
              className="place_order"
              onClick={() =>
                
                navigate("/payment")
              }
            >
              Payment
            </button>
          <hr></hr>
          {/* <div className="payment_order">
            <button
              className="place_order"
              onClick={() =>
                
                navigate("/payment")
              }
            >
              Payment
            </button>
           
            <hr></hr> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};