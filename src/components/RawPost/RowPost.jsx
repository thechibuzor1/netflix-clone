import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../constants";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function RowPost(props) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  const opts = {
    height: "390",
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
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  return (
    <div className="row">
      <h2 className="poster_title">{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() =>
              navigate(`/movie/${movie.title || movie.name}`, {
                state: { movie: movie, urlId: urlId, url: props.url },
              })
            }
            src={`${imageUrl + movie.poster_path}`}
            alt=""
            className={props.isSmall ? "smallPoster" : "poster"}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
