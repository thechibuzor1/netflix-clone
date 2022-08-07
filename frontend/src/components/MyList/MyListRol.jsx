import React from "react";
import { imageUrl } from "../../constants";
import { useNavigate } from "react-router-dom";

function MyListRol(props) {
  const navigate = useNavigate();
  return (
    <div className="column">
      <h2 className="poster_title"></h2>
      <div className="column_posters">
        {props.url.map((movie) => (
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

export default MyListRol;
