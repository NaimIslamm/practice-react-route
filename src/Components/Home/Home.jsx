import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="main-container">
      <h1>Hello This is Home Page</h1>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <h1>loading...</h1> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
