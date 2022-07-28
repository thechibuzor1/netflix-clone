import React from "react";
import "./Landing.css";
import bg from "../../assests/home-bg.jpg";
import tv from "../../assests/home-tv.jpg";
import mobile from "../../assests/home-mobile.jpg";
import imac from "../../assests/home-imac.jpg";
const Landing = () => {
  return (
    <>
      <div className="navbar">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <div className="right_icons">
        <button className="login_btn">Login</button>
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
              <input type="text" placeholder="Email address" required/>
              <button className="search_button">TRY IT NOW {">"}</button>
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
              <h1>Enjoy on your TV.</h1>
              <h2>
                Watch on smart TVs, Playstations, Xbox, Chromecast, Apple TV,
                Blu-ray players and more
              </h2>
            </div>
            <div className="landing-Tv-image">
              <img className="landing-img-imac" src={imac} alt="imac" />
            </div>
          </div>
          <div style={{
            backgroundColor: "black",
          }} className="try">
            <div className="search_bar">
              <input type="text" placeholder="Email address" />
              <button className="search_button">TRY IT NOW {">"}</button>
            </div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="footer">
              <p>
                <span>creator: The_Chibuzor</span>
                <br />
                all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
