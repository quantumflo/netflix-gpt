import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);



  return (
    <div className=" bg-black">
      <div className="-mt-[13rem] relative z-5 ">
        <MovieCategory title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieCategory title={"Upcoming"} movies={upcomingMovies} />
        <MovieCategory title={"Top Rated"} movies={topRatedMovies} />
        <MovieCategory title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
