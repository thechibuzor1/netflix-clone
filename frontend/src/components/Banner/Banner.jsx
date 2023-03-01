import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Axios";
import { imageUrl } from "../../constants";
import { trending } from "../../urls";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
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
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie
            ? movie.media_type === "movie"
              ? movie.title
              : movie.name
            : ""}
        </h1>
        <div className="banner_buttons">
          <div
            onClick={() =>
              navigate(`/Movie`, {
                state: { movie: movie },
              })
            }
            className="button"
          >
            <BsPlayFill className="play-Icon-Banner" />
            Play
          </div>
          <div onClick={() => navigate(`/MyList`)} className="list_button">
            <AiOutlineUnorderedList className="play-Icon-Banner" />
            List
          </div>
        </div>
        <h1 className="description">
          {movie ? movie.overview.slice(0, 100) + "..." : ""}
        </h1>
      </div>

      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
