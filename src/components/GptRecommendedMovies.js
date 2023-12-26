import { useSelector } from "react-redux";
import MovieCategory from "./MovieCategory";

const GptRecommendedMovies = () => {
  const { gptMovies, movieNames } = useSelector((state) => state.gpt);
  
  if(!gptMovies) return null;

  return (
    <div className="">
      {movieNames.map((movieName, index) => {
        return (
          <MovieCategory key={index} title={movieName} movies={gptMovies[index]} />
        )
      })}

    </div>
  );
}

export default GptRecommendedMovies;