import { useEffect, useState } from "react";
import { GET_MOVIES_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);

    const fetchTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        GET_MOVIES_OPTIONS
      );
      const data = await response.json();
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&showinfo=0&mute=1`;
      setTrailer(youtubeUrl);
    };
  
    useEffect(() => {
      fetchTrailer();
    }, [movieId]);

    return trailer;
}

export default useMovieTrailer;