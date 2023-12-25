import { GET_MOVIES_OPTIONS, GET_TOP_RATED_MOVIES_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const fetchMovies = async () => {
      const response = await fetch(`${GET_TOP_RATED_MOVIES_URL}`, GET_MOVIES_OPTIONS);
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
}

export default useTopRatedMovies;