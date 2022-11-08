import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import SingleProduct from "./SingleProduct/SingleProduct";
import Error from "./ErrorPage/Error";
import Header from "./Component/Header/Header";
import MobileMenu from "./Component/MobileMenu"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/MobileMenu" element={<MobileMenu />} />
</Routes>
     
    </div>
  );
}

export default App;
