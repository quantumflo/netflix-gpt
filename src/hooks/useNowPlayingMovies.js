import { GET_MOVIES_OPTIONS, GET_NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);


  const fetchMovies = async () => {
    const response = await fetch(`${GET_NOW_PLAYING_MOVIES_URL}`, GET_MOVIES_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !movies && fetchMovies();
  }, []);
  
};

export default useNowPlayingMovies;
