import './App.css';
import AboutPage from './Components/AboutPage';
import Contacts from './Components/Contacts';
import Delivery from './Components/Delivery';

import HomePage from './Components/HomePage';
import Payment from './Components/Payment';
import Return from './Components/Return';
import Fashion from  "./Fashion"

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div >
     <BrowserRouter>  
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about-page" element={<AboutPage/>}></Route>
          <Route exact path="/delivery-page" element={<Delivery />}></Route>
          <Route exact path="/return-page" element={<Return />}></Route>
          <Route exact path="/payment-page" element={<Payment />}></Route>
          <Route exact path="/contacts-page" element={<Contacts />}></Route>
         </Routes>
       </BrowserRouter>      
       {/* <Fashion/> */}
    </div>
  );
}

export default App;
