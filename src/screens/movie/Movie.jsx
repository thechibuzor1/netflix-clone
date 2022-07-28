import React, { useEffect, useState } from "react";
import "./Movie.css";
import { imageUrl, API_KEY } from "../../constants";
import axios from "../../Axios";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { BsPlay } from "react-icons/bs";
import ColumnPost from "../../components/column post/ColumnPost";
import Navbar from "../../components/Nav/Nav";

function Movie() {
  const [activeTab, setActiveTab] = useState("similar");
  const location = useLocation();
  const img_url = imageUrl + location.state.movie.backdrop_path;
  const similar_url =
    location.state.movie.media_type === "tv" ? "/tv/" : "/movie/";
  const similarUrl = `${similar_url}${location.state.movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [urlId, setUrlId] = useState("");
  const handleMovies = (id) => {
    console.log(id);
    axios
      .get(`${similar_url}${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="movie">
        <div className="movie_player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
            playIcon={<BsPlay className="play_btn" />}
            light={img_url}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="movie_description">
          <h1>{location.state.movie.title || location.state.movie.name}</h1>
          <h2>{location.state.movie.media_type} </h2>
          <p>{location.state.movie.overview}</p>
          <h2>
            Release Date:{" "}
            {location.state.movie.release_date ||
              location.state.movie.first_air_date}
          </h2>
          <h2>Language: {location.state.movie.original_language}</h2>
        </div>
        <div className="buttons">
          <div
            className={
              activeTab === "similar" ? "active_button" : "inactive_button"
            }
            onClick={() => setActiveTab("similar")}
          >
            <h5>More Like This</h5>
          </div>
          <div
            className={
              activeTab === "Trailer" ? "active_button" : "inactive_button"
            }
            onClick={() => {
              handleMovies(location.state.movie.id);
              setActiveTab("Trailer");
            }}
          >
            <h5>Trailer</h5>
          </div>
        </div>
        {activeTab === "similar" && (
          <div className="similar">
            <div className="similar_movies">
              <ColumnPost url={similarUrl} title="Similar Watch" />
            </div>
          </div>
        )}
        {activeTab === "Trailer" && (
          <div className="trailer">
            <YouTube opts={opts} videoId={urlId.key} />
          </div>
        )}
      </div>
    </>
  );
}

export default Movie;
