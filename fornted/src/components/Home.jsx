

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Home.css";

import { useNavigate } from "react-router-dom";
import { Login } from "./login";
import Landing from "./landing";
import Sliders from "./Sliders";
 import Footer from "../components/Footer";
import { Login_detail } from "../redux/actions";
import { Nav } from "./Help";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((e) => e.MasaiReducer.product);

  const token = useSelector((e) => e.MasaiReducer.token);

  const localToken = localStorage.getItem("token");
  dispatch(Login_detail(localToken));

  

 

  return (
    <>
    <Nav/>
      {!token ? (
        <Login />
      ) : (
        <>
        <Sliders/>
      
           <Landing/>
              <Footer/>
       
       </>
       
      )}
    </>
  );
};

