export const NF_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const NF_LOGO = "https://www.freepnglogos.com/uploads/netflix-logo-0.png";
export const USER_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const GET_NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const GET_POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const GET_TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const GET_UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const PLAY_IMG = "https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/1024px/25b6.png"
export const GET_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_API_TOKEN
    }
  };
export const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w780/';