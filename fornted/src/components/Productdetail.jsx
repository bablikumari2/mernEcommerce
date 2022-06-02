import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import "./productdetail.css";
import { Stack, Rating, Typography, Button } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedproduct } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import { navCart } from "../redux/actions";

export const Productdetail = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.MasaiReducer.selectedproduct);
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  

  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://mernbablicommerce.herokuapp.com/products/${id}`).then(({ data }) => {
      dispatch(selectedproduct(data));

      setCart(data);
    });
  }, []);
  const handlesubmit = () => {
    const payload = {
      title: cart.title,
      price: cart.price,
      description: cart.description,
      category: cart.category,
      rating: cart.rating,
      image: cart.image,
    };
    axios
      .post("https://mernbablicommerce.herokuapp.com/cartproduct", payload)
      .then(({ data }) => {
        dispatch(navCart());
        dispatch(navCart());
        navigate("/checkout");
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="productcontainer">
        <div className="product_image">
          <img src={store.image} alt="product" />
        </div>
        <div className="product_detail">
          <h3>{store.title}</h3>
          <h4 style={{ padding: "0px" }}>{store.category} </h4>
          <h3>Rs {store.price} -/-</h3>
          <Stack spacing={2}>
            <Rating value={store.rating} precision={0.5} size="small" />
          </Stack>
         
          <Typography variant="body1" sx={{ lineHeight: "25px" }}>
            {store.description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "purple",
              fontFamily: "sans-serif",
              marginTop: "20px",
              mb: "30px",
            }}
            onClick={handlesubmit}
          >
            Add to Cart
          </Button>
         <Link to={"/product"}> <Button
           variant="contained"
           sx={{
             bgcolor: "purple",
             fontFamily: "sans-serif",
             marginTop: "20px",
             marginLeft:"50px",
             mb: "30px",
           }}>back</Button></Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};
