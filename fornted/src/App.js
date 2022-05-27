import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar.jsx'
import Sidebar from './components/Sidebar';
import { Home } from './components/Home';
import { Productpage } from './components/Productpage';
import {Routes,Route} from 'react-router-dom'
import {Productdetail} from './components/Productdetail'
import { Signup } from './components/Signup';
import { Login } from './components/login';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Checkout } from './components/Checkout';
import { Showuser } from './components/Showuser';
import Router from './Routers/Router';

function App() {
  return (
    <>
   <Router/>

   </>
  );
}

export default App;
