import { GET_MOVIES_OPTIONS, GET_TOP_RATED_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies?.topRatedMovies);

    const fetchMovies = async () => {
      const response = await fetch(`${GET_TOP_RATED_MOVIES_URL}`, GET_MOVIES_OPTIONS);
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    };
  
    useEffect(() => {
      !movies && fetchMovies();
    }, []);
}

export default useTopRatedMovies;