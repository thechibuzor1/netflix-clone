import React from "react";
import "./Nav.css";
import { useNavigate} from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/Home")}
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="right_icons">
        <BiSearch onClick={() => navigate("/Search")} className="search_icon" />
        <img
          onClick={() => navigate("/Profile")}
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
