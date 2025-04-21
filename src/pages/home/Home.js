import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";
import Herosection from "../../components/heroSection/Herosection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonials from "../../components/testimonials/Testimonials";
import Track from "../../components/track/Track";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)
  console.log(cartItem)
  const addCart = () =>{
    dispatch(addToCart("jeans"))
  } 

  const deleteCart = () => {
    dispatch(deleteFromCart("jeans"))
  }

  return (
    <Layout>
      <Herosection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'allproducts'}>
        <button className='bg-gray-300 px-5 py-2 rounded-xl'>See more</button></Link>
      </div>
      <Track />
      <Testimonials />
    </Layout>
  );
}

export default Home;
 