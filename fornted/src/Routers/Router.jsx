import {Navbar} from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar';
import { Home } from '../components/Home';
import { Productpage } from '../components/Productpage';
import {Routes,Route} from 'react-router-dom'
import {Productdetail} from '../components/Productdetail'
import { Signup } from '../components/Signup';
import { Login } from '../components/login';

import { Card } from '../components/Card';
import { Detail } from '../components/Deatail.jsx';
import { Checkout } from '../components/Checkout';

import {Debit} from "../components/Pay"


function Router() {
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Productpage />} />
     <Route path="/payment" element={<Debit/>} />
     <Route path="/product/:id" element={<Productdetail />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/login" element={< Login/>} />
  
     <Route path="/card" element={<Card />} />
     <Route path="/checkout" element={<Checkout />} />
     
     <Route path="/Detail" element={<Detail />} />


     

   </Routes> 
   
   

   

   </>
  );
}

export default Router;
