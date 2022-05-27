import {Navbar} from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar';
import { Home } from '../components/Home';
import { Productpage } from '../components/Productpage';
import {Routes,Route} from 'react-router-dom'
import {Productdetail} from '../components/Productdetail'
import { Signup } from '../components/Signup';
import { Login } from '../components/login';
import { Cart } from '../components/Cart';
import  Footer  from '../components/Footer';
import { Checkout } from '../components/Checkout';
import { Showuser } from '../components/Showuser';

function Router() {
  return (
    <>
    <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Productpage />} />
     <Route path="/product/:id" element={<Productdetail />} />
     <Route path="/register" element={<Signup />} />
     <Route path="/login" element={< Login/>} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/checkout" element={<Checkout />} />


     

   </Routes> 
   
    {/* <Footer /> */}

   

   </>
  );
}

export default Router;
