import React from "react";
import { useState, useEffect, useContext } from "react";
import PageContext from "../../context/pagecontex";

const Products = ({ products }) => {


  return <div>
    {products.map((product)=>(
      <div key={product.id}>
        {product.name}</div>
    ))
    }
  </div>;
};

export default Products;
