import {API_KEY} from './constants';

export const trending=`trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy=`discover/movie?api_key=${API_KEY}&with_genres=35`
export const romance=`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`
export const search=`search/movie?api_key=${API_KEY}&language=en-US&query=`
export const theatres=`discover/movie?api_key=${API_KEY}&primary_release_date.gte=2022-07-15&primary_release_date.lte=2022-07-24`
export const rated=`discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`
export const popular=`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
export const kids=`discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
export const best=`discover/movie?api_key=${API_KEY}&primary_release_year=2010&sort_by=vote_average.desc`