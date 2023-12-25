import { GET_MOVIES_OPTIONS, GET_NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(`${GET_NOW_PLAYING_MOVIES_URL}`, GET_MOVIES_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  
};

export default useNowPlayingMovies;
