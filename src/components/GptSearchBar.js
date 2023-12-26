import { useState } from "react";
import { openai } from "../utils/openai";
import { GET_MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();


  const searchMovie = async (movie) => {
    const url = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1";

    const data =  await fetch(url, GET_MOVIES_OPTIONS);
    const response = await data.json();

    return response.results;

  }

  const gptSearchHandler = async () => {
    const query = `Act as a movie recommendation system and suggest movies based on the following query: ${value}. Only give me 5 movies comma seperated like the example below: The Godfather, The Dark Knight, The Shawshank Redemption, Pulp Fiction, Star Wars: Episode V - The Empire Strikes Back.`;
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message.content.split(","));

    const movieNames = chatCompletion.choices[0].message.content.split(",");

    const gptMovies = await Promise.all(movieNames.map( (movie) => searchMovie(movie)));
    dispatch(addGptMovies({movieNames, gptMovies} ));
  };


  return (
    <div style={{backgroundColor: "darkslategray"}} className="z-10 pb-8 bg-blend-darken">
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-center items-center pt-24">
        <input
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          className="cursor-text rounded-l-lg p-4 w-1/2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Which movie do you want to watch today?"
        />
        <button
          onClick={gptSearchHandler}
          style={{backgroundColor: "darkseagreen"}}
          className="px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 uppercase border-t border-b border-r"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
