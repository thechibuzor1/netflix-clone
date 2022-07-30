import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import "./Watching.css";

const Watching = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userData } = state;
  return (
    <div className="watching-container">
      <Helmet>
        <title>User</title>
      </Helmet>
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="watching-header">
        <h1>Who's Watching?</h1>
      </div>
      <div className="watching-body">
        <img
          onClick={() => navigate("/Home")}
          className="watching-avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
        <h2>{userData.name}</h2>
      </div>
    </div>
  );
};

export default Watching;
