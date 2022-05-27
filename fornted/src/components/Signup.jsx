import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export const Signup = () => {
  const [showerr, setShowerr] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (e.target.username.value === "" || e.target.password.value === "") {
      toast.error("Please fill all fields", { position: "top-center" });
      setShowerr(true);
    } else {
      setLoader(true);

      const payload = {
        username: e.target.username.value,
        email: e.target.email.value,
        mobile: e.target.mobile.value,
        password: e.target.password.value,
      };

      axios
        .post("https://mernbablicommerce.herokuapp.com/signup", payload)
        .then((res) => {
          toast.success("Register SuccessFull", { position: "top-center" });
          setTimeout(() => {
            setShowerr(false);
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          setShowerr(true);
          toast.error(err.response.data.errors[0]?.msg, { position: "top-center" });

          console.log(err.response.data.errors[0]?.msg);
        });
      setLoader(false);
    }
  };

  return (
    <>
   
      {loader ? (
        <img
          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      ) : (
        <>
          <Typography
            variant="h5"
            sx={{ marginTop: "100px", marginLeft: "40%" }}
          >
            Sign Up to make Account
          </Typography>
          <Box
            sx={{ width: "400px", margin: "auto", marginTop: "30px" }}
            component="form"
            onSubmit={handleRegister}
          >
            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              fullWidth
              id="username"
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              error={showerr}
              label={showerr ? "required" : "Username"}
              helperText={showerr ? "Enter valid username" : null}
            />

            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              id="email"
              fullWidth
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              error={showerr}
              label={showerr ? "required" : "Email"}
              helperText={showerr ? "Enter valid email" : null}
            />
            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              id="mobile"
              fullWidth
              error={showerr}
              label={showerr ? "required" : "Mobile"}
              helperText={
                showerr
                  ? "Enter valid Mobile"
                  : null
              }
            />
            <TextField
              sx={{ marginTop: "20px" }}
              type="password"
              variant="outlined"
              id="password"
              fullWidth
              error={showerr}
              label={showerr ? "required" : "Password"}
              helperText={
                showerr
                  ? "Enter valid  Password"
                  : "Password should have one Uppercase, specialcharacter, numeric and one Alphabet "
              }
            />
            <Button
              sx={{ marginTop: "30px", height: "40px", bgcolor: "black" }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
            <div style={{ display: "flex" }}>
              <p>If you are registered ?</p>
              <p
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                click here
              </p>
            </div>
            <ToastContainer />
          </Box>
          <Footer/>
        </>
      )}
    </>
  );
};
