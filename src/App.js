import "./App.css";
import AboutPage from "./Components/AboutPage";
import Contacts from "./Components/Contacts";
import Delivery from "./Components/Delivery";
import HomePage from "./Components/HomePage";
import Payment from "./Components/Payment";
import Return from "./Components/Return";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Crud_Api/SearchPage";
import FormPage from "./Crud_Api/FormPage";
import Crud_Search from "./Crud_Api/Crud_Search";
import Crud_Form from "./Crud_Api/Crud_Form";
import Edit_Crud from "./Crud_Api/Edit_Crud";
import Crud_Page from "./Crud_Page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about-page" element={<AboutPage />}></Route>
          <Route exact path="/delivery-page" element={<Delivery />}></Route>
          <Route exact path="/return-page" element={<Return />}></Route>
          <Route exact path="/payment-page" element={<Payment />}></Route>
          <Route exact path="/contacts-page" element={<Contacts />}></Route>
          <Route exact path="/search-2" element={<Crud_Search />}></Route>
          <Route exact path="/form-2" element={<Crud_Form/>}></Route>
          <Route exact path="update/:id" element={<Edit_Crud/>}></Route>

          <Route exact path="/search-page" element={<SearchPage />}></Route>
          <Route exact path="/form-page" element={<FormPage />}></Route>
          <Route exact path="/crud-page" element={<Crud_Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
