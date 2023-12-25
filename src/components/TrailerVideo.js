import { useEffect, useState } from "react";
import { GET_MOVIES_OPTIONS } from "../utils/constants";

const TrailerVideo = ({ movieId }) => {
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
    console.log("trailer", trailer);
    const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&showinfo=0&mute=1`;
    setTrailer(youtubeUrl);
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
