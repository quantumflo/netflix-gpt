import {MOVIE_POSTER} from '../utils/constants';

const MovieCard = ({movie}) => {
    const {poster_path} = movie;
    if(!poster_path) return null;
  return (
    <div className='flex-shrink-0 zoom'>
        <img className="w-[10rem]" src={MOVIE_POSTER + poster_path} alt={movie.title} />
    </div>
  );
}

export default MovieCard;