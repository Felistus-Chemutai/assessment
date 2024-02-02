import React from 'react'
import DarkMode from '../Component/PageList/DarkModeTheme/DarkMode'
import Products from '../Component/Products/Products'
import { useLoaderData } from 'react-router-dom';
export const productsLoader =async ()=>{
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products
}
const Home = () => {
  const products=useLoaderData()
  return (
    <>
    <div>
      <h1>This is homepage</h1>
    </div>
    <DarkMode/>
    <Products products={products} />
    </>
  )
}

export default Home
