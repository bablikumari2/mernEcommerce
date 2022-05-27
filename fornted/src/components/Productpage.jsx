import { useEffect } from "react";
import ProductSidebar from "./Productsidebar";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../redux/actions";
import { Stack, Rating } from "@mui/material";
import Footer from "../components/Footer"
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Productpage = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.MasaiReducer.sortedData);
  const mainData = useSelector((e) => e.MasaiReducer.product);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://mernbablicommerce.herokuapp.com/products").then(({ data }) => {
      dispatch(setproducts(data));
    });
  }, []);
  

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: "1", marginTop: "5%" }}>
          <ProductSidebar />
        </div>

        <div className="cardiv">
          <div className="griddiv">
            {mainData.map((e) => (
              <div
                className="productdiv"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  cursor: "pointer",
                }}
                key={e._id}
                onClick={() => navigate(`/product/${e._id}`)}
              >
                <img
                  src={e.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <h3 style={{ fontSize: "14px", paddingLeft: "10px" }}>
                  {e.title}
                </h3>
                <h4 style={{ fontSize: "12px", paddingLeft: "10px" }}>
                  {" "}
                  Rs {e.price}
                </h4>
                <Stack spacing={2}>
                  <Rating value={e.rating} precision={0.5} size="small" />
                </Stack>
                {/* <p style={{ color: "red", paddingLeft: "10px" }}>
                  20% off for students
                </p> */}
              <button>Card</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};
