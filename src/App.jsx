import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PaginatedList from "./Pages/PaginatedList";
import Home, { productsLoader } from "./Pages/Home";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Products from "./Component/Products/Products";
import { Routes } from "react-router-dom";

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setItems(data));
  }, []);

  return (
    <BrowserRouter>
<Routes>
<Route path="/pagenitedlist" element={<PaginatedList />} />
      <Route index="/home" element={<Home />} loader={productsLoader} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
</Routes>
      
    </BrowserRouter>
  );
};

export default App;
