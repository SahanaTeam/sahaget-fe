import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to SahaGet</h1>
      <div>
        Navigate to <Link to="/about">About page</Link> You can{" "}
        <Link to="/contact">Contact Us</Link> Here is Admin{" "}
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </>
  );
};

export default Home;
