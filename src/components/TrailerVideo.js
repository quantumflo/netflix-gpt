import useMovieTrailer from "../hooks/useMovieTrailer";

const TrailerVideo = ({ movieId }) => {
const trailer = useMovieTrailer(movieId);

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
