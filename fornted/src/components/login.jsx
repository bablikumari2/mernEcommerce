import React from "react";
import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login_detail } from "../redux/actions";
import Footer from "./Footer";

export const Login = () => {
  const [showerr, setShowerr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (e.target.email.value === "" || e.target.password.value === "") {
      toast.error("Please fill all fields", { position: "top-center" });
      setShowerr(true);
    } else {
      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      axios
        .post("https://mernbablicommerce.herokuapp.com/login", payload)
        .then(({ data }) => {
          toast.success("Login SuccessFull", { position: "top-center" });
         setTimeout(()=>{
          dispatch(Login_detail(data.user));
          localStorage.setItem("token", data.token);
          setShowerr(false);
          navigate("/")
         },2000)

        })
        .catch((err) => {
          toast.error("Email and Password are invalid", { position: "top-center" });
          setShowerr(true);
          console.log(err);
          

        });
    }
  };
  return (
    <>
      <Typography variant="h5" sx={{ marginTop: "100px", marginLeft: "40%" }}>
        LogIn to your Account
      </Typography>
      <Box
        sx={{ width: "400px", margin: "auto", marginTop: "30px" }}
        component="form"
        onSubmit={handleLogin}
      >
        <TextField
          varient="outlined"
          sx={{ marginTop: "30px" }}
          fullWidth
          id="email"
          error={showerr}
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          label={showerr ? "" : "Email"}
          helperText={showerr ? "Enter valid email" : null}
        />

        <TextField
          varient="outlined"
          sx={{ marginTop: "30px" }}
          fullWidth
          type="password"
          id="password"
          InputLabelProps={showerr ? { style: { color: "red" } } : null}
          error={showerr}
          label={showerr ? "" : "Password"}
          helperText={showerr ? "Enter valid Password" : null}
        />
        <Button
          sx={{ marginTop: "20px", height: "40px", bgcolor: "black" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <div style={{ display: "flex" }}>
          <p>If you are not registered ?</p>
          <p
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            click here
          </p>
        </div>
        <ToastContainer />
      </Box>
      <Footer/>
    </>
  );
};
