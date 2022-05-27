import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { navCart } from "../redux/actions";
import Footer from "./Footer";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState({
    Address: "",
    Name: "",
    Pincode: "",
  });
  const [cart, setCart] = useState([]);

  const handlecheckout = (e) => {
    const { id, value } = e.target;
    setInput({
      ...input,
      [id]: value,
    });
  };
  const handleSubmit = () => {
    if (!input.Name || !input.Address || !input.Pincode) {
      toast.error("Please enter something", { position: "top-center" });
    } else {
      axios
        .post("https://mernbablicommerce.herokuapp.com/Checkout", {
          name: input.Name,
          Address: input.Address,
          pincode: input.Pincode,
        })
        .then(({ data }) => {
          toast.success("Address added now procced to payment", {
            position: "top-center",
          });
          navigate("/cart");
        })
        .catch((e) => {
          console.log(e.message);
          toast.error("something is wrong", { position: "top-center" });
        });
    }
  };
  useEffect(() => {
    handleCartDetail();
  }, []);
  const handleCartDetail = () => {
    axios.get("https://mernbablicommerce.herokuapp.com/cartproduct").then(({ data }) => {
      setCart(data);
    });
  };
  const handleRate = (id) => {
    axios.delete(`https://mernbablicommerce.herokuapp.com/cartproduct/${id}`).then((res) => {
      handleCartDetail();
      dispatch(navCart());
    });
  };

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "50%" }}>
          <Accordion
            id="accordion"
            expanded={expanded === "panel1"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
            sx={{ marginTop: "80px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ marginTop: "80px" }}
            >
              <Typography variant="h5">Name</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                variant="outlined"
                label="Enter Name"
                value={input.Name}
                fullWidth
                onChange={handlecheckout}
                id="Name"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            id="accordion"
            expanded={expanded === "panel2"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                variant="outlined"
                label="Enter Address"
                value={input.Address}
                fullWidth
                onChange={handlecheckout}
                id="Address"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            id="accordion"
            expanded={expanded === "panel3"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Pincode</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                variant="outlined"
                label="Enter Pincode"
                value={input.Pincode}
                type="Number"
                fullWidth
                onChange={handlecheckout}
                id="Pincode"
              />
            </AccordionDetails>
          </Accordion>
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: "black", marginTop: "50px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>

        <Paper>
          <div style={{ marginTop: "80px" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
            >
              {cart.map((e) => (
                <div>
                  <div style={{ textAlign: "center" }} key={e.id}>
                    <p style={{ fontWeight: "500", fontSize: "14px" }}>
                      {e.title}
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={e.image}
                      alt=""
                      style={{ width: "16%", height: "50%" }}
                    />
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "green",
                        margin: "0px",
                      }}
                    >
                      Rs {e.price} -/-
                    </p>

                    <p
                      style={{
                        margin: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {e.category}
                    </p>
                    <button
                      onClick={() => handleRate(e._id)}
                      style={{
                        marginBottom: "10px",
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
        </Paper>
      </div>

      <ToastContainer />
      <Footer/>
    </>
  );
};
