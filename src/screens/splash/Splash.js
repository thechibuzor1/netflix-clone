import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/swoop.json";
import Lottie from "lottie-react";
import "./Splash.css";
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/Home");
    }, 4500);
  }, []);

  return (
    <div className="swoop">
      <Lottie className="intro_logo" animationData={logo} />
    </div>
  );
};

export default Splash;
