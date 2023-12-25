import { GET_MOVIES_OPTIONS, GET_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    fetch(`${GET_MOVIES_URL}1`, GET_MOVIES_OPTIONS)
      .then((response) => response.json())
      .then((data) => dispatch(addNowPlayingMovies(data.results)))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useNowPlayingMovies;
