import { API_KEY } from "./constants";

export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`;
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`;
export const theatres = `discover/movie?api_key=${API_KEY}&primary_release_date.gte=2022-07-15&primary_release_date.lte=2023-07-24`;
export const rated = `discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`;
export const popular = `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
export const kids = `discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
export const best = `discover/movie?api_key=${API_KEY}&primary_release_year=2010&sort_by=vote_average.desc`;
export const discover = `discover/movie?api_key=${API_KEY}`;
export const discover_Tv = `discover/tv?api_key=${API_KEY}`;
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US`;
export const nowPlaying = `movie/now_playing?api_key=${API_KEY}&language=en-US`;
export const nowPlayingTv = `tv/now_playing?api_key=${API_KEY}&language=en-US`;
export const topRated = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const popularTv = `tv/popular?api_key=${API_KEY}&language=en-US`;
export const topRatedTv = `tv/top_rated?api_key=${API_KEY}&language=en-US`;
export const airingToday = `tv/airing_today?api_key=${API_KEY}&language=en-US`;
export const onTheAir = `tv/on_the_air?api_key=${API_KEY}&language=en-US`;
export const genreTv = `genre/tv/list?api_key=${API_KEY}&language=en-US`;
export const genre = `genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const actor = `person/popular?api_key=${API_KEY}&language=en-US`;
export const searchActor = `search/person?api_key=${API_KEY}&language=en-US&query=`;
