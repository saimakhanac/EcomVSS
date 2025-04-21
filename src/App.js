import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import MyState from './context/data/MyState';
import Login from "./pages/registration/Login";
import Registration from "./pages/registration/Registration";
import Productinfo from "./pages/productInfo/Productinfo";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AddProduct from "./pages/admin/pages/AddProduct";
import { ToastContainer } from "react-toastify";
import Allproducts from "./pages/allproducts/Allproducts";
const App = () => {
  return (
    <div>
      {/* <div>
        <h1 className="text-blue-400 text-center text-7xl bg-black p-3">Hello</h1>
      </div> */}
      {/* main */}
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<Allproducts />} />

            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/productinfo/:id" element={<Productinfo />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </div>
  );
};

export default App;

// for user

export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
    if(user){
      return children
    }
    else{
      return <Navigate to={'/login'} /> 
    } 
}

// for admin

export const ProtectedRouteForAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem("user"));
  if(admin.user.email === 'admin@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
