import React, { useEffect, useState } from "react";
import "./ColumnPost.css";
import { imageUrl } from "../../constants";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function ColumnPost(props) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const url = props.url;
  const movieUrl = `/movie/` + url;
  const tvUrl = `/tv/` + url;
  useEffect(() => {
    axios
      .get(movieUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch(() => {
        axios.get(tvUrl).then((response) => {
          setMovies(response.data.results);
        });
      });
  }, [movieUrl, tvUrl]);

  return (
    <div className="column">
      <h2 className="poster_title">{props.title}</h2>
      <div className="column_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() =>
              navigate(`/Movie`, {
                state: { movie: movie },
              })
            }
            src={`${imageUrl + movie.poster_path}`}
            alt=""
            className="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default ColumnPost;
