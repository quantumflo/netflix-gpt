import { useSelector } from "react-redux";
import TrailerTitle from "./TrailerTitle";
import TrailerVideo from "./TrailerVideo";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;
  const trailerMovie = movies[0];
  const { id, title, overview } = trailerMovie;

  return (
    <div>
      <TrailerTitle title={title} overview={overview} />
      <TrailerVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
