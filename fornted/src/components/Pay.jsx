
import React from 'react'
import "./Pay.css"
import Footer from './Footer';

import { useState } from 'react'

import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Debit = () => {
  const [data, setData] = useState({
    card_no: "",
    cvv: "",
    date: ""

  });
  
  const navigate = useNavigate();
  //   function myFunctions() {
  //     alert("Payment sucessfully done.")
  // }
  const handlechange = ({ currentTarget: input }) => {
    setData({ ...data, [input.id]: input.value });
  };
  console.log(data)
  const handlesubmit = async (e) => {
    e.preventDefault();
   
      axios.post(" https://mernbablicommerce.herokuapp.com/payment", data ).then(({ data }) => {
        alert("payment secuessfully");
        navigate("/checkout")
      }).catch((err)=>{
        console.log(err)
      })
  };
  return <>
  
    <form onSubmit={handlesubmit}>
      <div className='box'  >
        <h2 >Please Enter your Card Details</h2>
        <div className='boxleft'>
          <div className='photo'>
          </div><br />
          <label>Card Holder</label>
          <input type="text" className='in' placeholder="Card Owner's name*" required /><br /><br />
<label>Card No.</label>
          <input type="number" className='inn' placeholder='Card Number*' required id="card_no"

            onChange={handlechange}
            value={data.card_no} /><br /><br />
            <label>CVV</label>
          <input type="number" className='small' placeholder='Enter CVV*' id="cvv"

            onChange={handlechange}
            value={data.cvv} required />
          <input type="date" className='small' placeholder='Enter expiry date*' id="date"
            onChange={handlechange}
            value={data.date} required />
          {/* <input type="submit" className='last'/> */}
          {/* <Link to="/detail"><button onClick={()=>myFunctions()}>Confirm your Payment</button></Link> */}
          <button type="submit" className='comfirm' >Confirm your Payment</button>
        </div>
        <br /><br />

      </div>
    </form>
<Footer/>
  </>
}