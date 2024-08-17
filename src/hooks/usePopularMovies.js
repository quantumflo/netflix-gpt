import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import { GET_MOVIES_OPTIONS, GET_POPULAR_MOVIES_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies?.popularMovies);


  const fetchMovies = async () => {
    const response  = await fetch(`${GET_POPULAR_MOVIES_URL}`, GET_MOVIES_OPTIONS)
    const data = await response.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {
    !movies && fetchMovies();
  }, []);

};

export default usePopularMovies;
