import GptRecommendedMovies from "./GptRecommendedMovies";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";

const GptSearchPage = () => {
  return (
    <div className="bg-black">
      <Header />
      <GptSearchBar />
      <GptRecommendedMovies />
    </div>
  );
};

export default GptSearchPage;
