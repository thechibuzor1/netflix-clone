import React, { useState } from "react";
import "./Landing.css";
import bg from "../../assests/home-bg.jpg";
import tv from "../../assests/home-tv.jpg";
import mobile from "../../assests/home-mobile.jpg";
import imac from "../../assests/home-imac.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
const Landing = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (prop) => {
    if (prop.length !== 0) {
      navigate(`/Auth`, {
        state: { email: email, isSignup: true },
      });
    } else {
      toast.error("Please enter a valid email address");
    }
  };
  const login = () => {
    navigate(`/Auth`, {
      state: { email: email, isSignup: false },
    });
  };
  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <div className="right_icons">
          <button className="login_btn" onClick={() => login()}>
            Login
          </button>
        </div>
      </div>
      <div className="landing">
        <div className="landing-bg" style={{ backgroundImage: `url(${bg})` }}>
          <div className="try">
            <h1>
              Unlimited films, TV <br /> programmes and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <div className="search_bar">
              <input
                type="text"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="search_button"
                onClick={() => handleSubmit(email)}
              >
                TRY IT NOW {">"}
              </button>
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="fade_bottom"></div>
          <div className="landing-Tv">
            <div className="landing-Tv-text">
              <h1>Enjoy on your TV.</h1>
              <h2>
                Watch on smart TVs, Playstations, Xbox, Chromecast, Apple TV,
                Blu-ray players and more
              </h2>
            </div>
            <div className="landing-Tv-image">
              <img className="landing-img" src={tv} alt="tv" />
            </div>
          </div>
          <div className="landing-Tv">
            <div className="landing-Tv-image">
              <img className="landing-img-mobile" src={mobile} alt="mobile" />
            </div>
            <div className="landing-Tv-text">
              <h1>Download your programmes and movies to watch on the go. </h1>
              <h2>save your data and watch all your favourites offline.</h2>
            </div>
          </div>
          <div className="landing-Tv">
            <div className="landing-Tv-text">
              <h1>Watch Everywhere.</h1>
              <h2>
                Stream unlimited films and TV programmes on your phone, tablet,
                laptop and TV without paying more.
              </h2>
            </div>
            <div className="landing-Tv-image">
              <img className="landing-img-imac" src={imac} alt="imac" />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "black",
            }}
            className="try"
          >
            <div className="search_bar">
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="search_button"
                onClick={() => handleSubmit(email)}
              >
                TRY IT NOW {">"}
              </button>
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="footer">
              <p>
                <span>creator: The_Chibuzor</span>
                <br />
                <p>Copyright &copy; 2022</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
