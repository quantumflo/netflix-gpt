import GptMovieRecommendation from "./GptMovieRecommendation";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";

const GptSearchPage = () => {
  return (
    <div>
      <Header />
      <GptSearchBar />
      <GptMovieRecommendation />
    </div>
  );
}

export default GptSearchPage;