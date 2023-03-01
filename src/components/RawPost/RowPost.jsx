import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl } from "../../constants";
import axios from "../../Axios";
import { useNavigate } from "react-router-dom";

function RowPost(props) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, [props.url]);
  return (
    <div className="row">
      <h2 className="poster_title">{props.title}</h2>
      <div className="posters">
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
            className={props.isSmall ? "smallPoster" : "poster"}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
