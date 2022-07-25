import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Axios";
import { imageUrl, API_KEY } from "../../constants";
import { trending } from "../../urls";
import YouTube from "react-youtube";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(trending).then((response) => {
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    });
  }, []);
  console.log(movie);
  const opts = {
    height: "448",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [videoId, setVideoId] = useState("");
  const handleMovies = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setVideoId(response.data.results[0]);
        }
      });
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      {videoId && <YouTube opts={opts} videoId={videoId.key} />}
      <div className="content">
        <h1 className="title">{movie ? movie.media_type ==="movie" ? movie.title : movie.name :""}</h1>
        <div className="banner_buttons">
          <button onClick={() => handleMovies(movie.id)} className="button">
            Play
          </button>
          <button className="list_button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview.slice(0, 100)+"..."  : ""}</h1>
      </div>

      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
