import React, { useEffect, useState } from "react";
import "./Discover.css";
import { BiSearch, BiArrowBack } from "react-icons/bi";
import {
  discover,
  upcoming,
  genre,
  discover_Tv,
  nowPlayingTv,
  nowPlaying,
  topRated,
  popularTv,
  topRatedTv,
  airingToday,
  onTheAir,
  genreTv,
  searchActor,
} from "../../urls";
import axios from "../../Axios";
import RowPost from "../../components/RawPost/RowPost";
import { API_KEY } from "../../constants";
import loader from "../../assests/loader.json";
import Lottie from "lottie-react";
import Navbar from "../../components/Nav/Nav";

function Search() {
  const [genreListMovie, setGenreListMovie] = useState([]);
  const [genreListTv, setGenreListTv] = useState([]);
  const [searchText, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("movie");
  const [searchUrl, setSearchUrl] = useState(``);
  const [searchTvUrl, setSearchTvUrl] = useState(``);
  const [searchActorId, setSearchActorId] = useState(``);
  const [searchActor, setSearchActor] = useState([]);

  const searchPeople = (prop) => {
    setSearchActor([]);
    axios
      .get(`search/person?api_key=${API_KEY}&language=en-US&query=${prop}`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          setSearchActor(res.data.results);
          setSearchActorId(res.data.results[0].id);
          setLoading(false);
        }
      });
  };
  const handleSearch = (prop) => {
    setResults([]);

    if (prop.length > 0) {
      setLoading(true);
      searchPeople(prop);
      axios
        .get(`search/movie?api_key=${API_KEY}&language=en-US&query=${prop}`)
        .then((res) => {
          if (res.data.results.length !== 0) {
            setResults(res.data.results);
            setSearchUrl(
              `search/movie?api_key=${API_KEY}&language=en-US&query=${prop}`
            );
            setSearchTvUrl(
              `search/tv?api_key=${API_KEY}&language=en-US&query=${prop}`
            );
            setLoading(false);
          } else {
            setLoading(false); // if no results found
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get(genre) // get genre list
      .then((res) => {
        setGenreListMovie(res.data.genres);
      });
    axios
      .get(genreTv) // get genre list
      .then((res) => {
        setGenreListTv(res.data.genres);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="discover">
        <div className="discover_search">
          <BiArrowBack
            className="back_btn"
            onClick={() => {
              window.history.back();
            }}
          />
          <h1></h1>
        </div>
        <h1>Search</h1>
        <div className="search_bar">
          <BiSearch className="search_icon" />
          <input
            type="search"
            className="search_input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => handleSearch(searchText)}
            className="search_button"
          >
            Search
          </button>
        </div>
        {results.length !== 0 ? (
          <>
            <RowPost
              title="Search Results: Movies"
              /* url={`/${result.media_type || "movie"}/${
              result.title || result.name
            }`} */
              url={searchUrl}
              isSmall
            />
            <RowPost
              title="Search Results: TV Shows"
              /* url={`/${result.media_type || "movie"}/${
              result.title || result.name
            }`} */
              url={searchTvUrl}
              isSmall
            />
          </>
        ) : (
          <div className="search_results">
            {loading ? (
              <Lottie className="intro_logo" animationData={loader} />
            ) : (
              <> </>
            )}
          </div>
        )}
        {searchActor.length !== 0 ? (
          <>
            <RowPost
              title="Search Results: Actor"
              url={`/discover/movie?api_key=${API_KEY}&with_people=${searchActorId}&sort_by=popularity.desc`}
              isSmall
            />
          </>
        ) : (
          <></>
        )}

        <div className="discover_items">
          <div className="item">
            <h1>Discover</h1>
            <div className="discover_btns">
              <button
                onClick={() => {
                  setActive("movie");
                }}
                className={active === "movie" ? "active" : "inactive"}
              >
                Movies
              </button>
              <button
                onClick={() => {
                  setActive("tv");
                }}
                className={active === "tv" ? "active" : "inactive"}
              >
                TV Shows
              </button>
            </div>
            {active === "movie" && (
              <div>
                <RowPost url={discover} title="Discover Movies" />
                <RowPost url={upcoming} title="Upcoming Movies" />
                <RowPost url={nowPlaying} title="Now Playing" />
                <RowPost url={topRated} title="Top Rated" />
                {genreListMovie.map((genre) => (
                  <RowPost
                    url={`discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`}
                    title={genre.name}
                  />
                ))}
              </div>
            )}
            {active === "tv" && (
              <div>
                <RowPost url={discover_Tv} title="Discover Tv Shows" />
                <RowPost url={topRatedTv} title="Top Rated" />
                <RowPost url={popularTv} title="Popular" />
                <RowPost url={airingToday} title="Airing Today" />
                <RowPost url={onTheAir} title="On Air" />
                {genreListTv.map((genre) => (
                  <RowPost
                    url={`discover/tv?api_key=${API_KEY}&with_genres=${genre.id}`}
                    title={genre.name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
