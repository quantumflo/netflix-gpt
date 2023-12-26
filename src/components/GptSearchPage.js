import GptMovieRecommendation from "./GptMovieRecommendation";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";

const GptSearchPage = () => {
  return (
    <div className="bg-black">
      <Header />
      <GptSearchBar />
      <GptMovieRecommendation />
    </div>
  );
}

export default GptSearchPage;