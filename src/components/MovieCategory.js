import MovieCard from "./MovieCard";

const MovieCategory = ({ title, movies }) => {
  return (
    <div className="p-4 pl-8">
      <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
        <MovieList movies={movies} />
    </div>
  );
};

export default MovieCategory;

const MovieList = ({ movies }) => {
  return (
    <div className="flex gap-6 overflow-x-scroll">
      {movies?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
