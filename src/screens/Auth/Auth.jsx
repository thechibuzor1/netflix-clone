import React, { useState } from "react";
import "./Auth.css";
import { useLocation } from "react-router-dom";
import bg from '../../assests/home-bg.jpg';

const Auth = () => {
  const location = useLocation();
  const [isSignup, setIsSignup] = useState(location.state.isSignup);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth" style={{
        backgroundImage: `url(${bg})`,
    }}>
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
          <form>
            {isSignup && (
              <div className="auth-input">
                 
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
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
             
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isSignup && (
              <div className="auth-input">
                 
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="auth-div">
              <button className="auth-button">{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account? "}
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
