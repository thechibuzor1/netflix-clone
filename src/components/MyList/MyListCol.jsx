import React from "react";
import { imageUrl } from "../../constants";
import { useNavigate } from "react-router-dom";

function MyListCol(props) {
  const navigate = useNavigate();
  return (
    <div className="row">
      <h2 className="poster_title">{props.title}</h2>
      <div className="posters">
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
            className={props.isSmall ? "smallPoster" : "poster"}
          />
        ))}
      </div>
    </div>
  );
}

export default MyListCol;
