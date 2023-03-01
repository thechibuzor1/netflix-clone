import React from "react";
import "./Notfound.css";
import img from "../../assests/quandale.png";
import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <div className="watching-container">
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="watching-header">
        <h1>404 page not found.</h1>
      </div>
      <div className="watching-body">
        <img className="watching-avatar" src={img} alt="Quandale" />
        <h2
          style={{
            marginTop: "20px",
          }}
        >
          sigh
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
