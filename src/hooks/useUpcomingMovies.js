import { GET_MOVIES_OPTIONS, GET_UPCOMING_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies?.upcomingMovies);

    const fetchMovies = async () => {
      const response = await fetch(`${GET_UPCOMING_MOVIES_URL}`, GET_MOVIES_OPTIONS);
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    };
  
    useEffect(() => {
      !movies && fetchMovies();
    }, []);
}

export default useUpcomingMovies;