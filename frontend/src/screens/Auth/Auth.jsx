import "./Auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../assests/home-bg.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Store } from "../../Store";
import { getError } from "../../utils";
import validator from "validator";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignup, setIsSignup] = useState(location.state.isSignup);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userData } = state;
  const [showPassword, setShowPassword] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isSignup) {
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
            const { data } = await Axios.post("/api/users/signup", {
              name,
              email,
              password,
            });
            ctxDispatch({
              type: "USER_SIGNIN",
              payload: data,
            });
            localStorage.setItem("userData", JSON.stringify(data));
            navigate("/Watch");
          } catch (err) {
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
    }
    if (!isSignup) {
      try {
        const { data } = await Axios.post("/api/users/signin", {
          email,
          password,
        });
        ctxDispatch({
          type: "USER_SIGNIN",
          payload: data,
        });
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/Watch");
      } catch (err) {
        toast.error(getError(err));
      }
    }
  };

  useEffect(() => {
    if (userData) {
      navigate("/Watch");
    }
  }, [navigate, userData]); // eslint-disable-line

  return (
    <div
      className="auth"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <ToastContainer position="bottom-center" limit={1} />
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="auth__form-container">
        <div className="auth__form">
          <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
          <form onSubmit={submitHandler}>
            {isSignup && (
              <div className="auth-input">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
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
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
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

            {isSignup && (
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
            )}
            <div className="auth-div">
              <button className="auth-button">
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
          <div className="auth-account">
            <p>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account? "}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
