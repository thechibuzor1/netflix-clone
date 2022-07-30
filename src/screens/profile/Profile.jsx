import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Nav/Nav";
import { Store } from "../../Store";
import "./Profile.css";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import axios from "axios";
import validator from "validator";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

const Profile = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userData } = state;
  const [showPassword, setShowPassword] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (validator.isEmail(email)) {
      if (
        validator.isStrongPassword(password, {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        try {
          const { data } = await axios.put(
            "/api/users/profile",
            {
              name,
              email,
              password,
            },
            {
              headers: { Authorization: `Bearer ${userData.token}` },
            }
          );
          dispatch({
            type: "UPDATE_SUCCESS",
          });
          ctxDispatch({ type: "USER_SIGNIN", payload: data });
          localStorage.setItem("userData", JSON.stringify(data));
          toast.success("Profile update sucessfull");
        } catch (err) {
          dispatch({
            type: "FETCH_FAIL",
          });
          toast.error(getError(err));
        }
      } else {
        toast.error(
          "Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character"
        );
      }
    } else {
      toast.error("Enter a valid Email Address!");
    }
  };
  const signOut = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userData");
    navigate("/Landing");
  };

  return (
    <>
     <Helmet>
        <title>Profile</title>
      </Helmet>
      <Navbar />
      <div className="profile">
        <div className="discover_search">
          <BiArrowBack
            className="back_btn"
            onClick={() => {
              window.history.back();
            }}
          />
          <h1></h1>
        </div>
        <div className="profile-header">
          <img
            className="profile-avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
          />
          <div className="edit">
            <h1>{userData.name}</h1>{" "}
            <BiEdit
              onClick={() => setEditing(!editing)}
              className="edit-icon"
            />
          </div>
        </div>
        {editing && (
          <div className="edit-form">
            <h1>Edit your info.</h1>
            <form onSubmit={submitHandler}>
              <div className="auth-input">
                <input
                  name="fullName"
                  type="text"
                  value={name}
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="auth-input">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="auth-input">
                <Input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <Visibility className="passwordIcon" />
                        ) : (
                          <VisibilityOff className="passwordIcon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>

              <div className="auth-input">
                <Input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <Visibility className="passwordIcon" />
                        ) : (
                          <VisibilityOff className="passwordIcon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="auth-div">
                <button type="submit" className="auth-button">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="logout">
          <div className="auth-div">
            <button onClick={signOut} className="auth-button">
              Log out
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          <p>Copyright &copy; 2022</p>
        </p>
      </div>
    </>
  );
};

export default Profile;
