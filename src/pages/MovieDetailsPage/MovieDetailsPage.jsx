import MoviesItemHomePage from '../../components/MoviesItemHomePage';
import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
const MovieDetailsPage = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    overview,
    genre_ids,
    id,
  } = movie;
  return (
    <>
      <h1> here you will see MovieDetailsPage</h1>
      {/* <MoviesItemHomePage movie={movie} /> */}
      <div>
        <img
          src={`${BASE_IMAGE_URL}${poster_path}`}
          alt={`${id}-${original_title}`}
        />
        <h2> {title}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam
          accusantium ex explicabo tempore dolor.
          {overview}
        </p>
        <p>Genres: {genre_ids}</p>
      </div>
    </>
  );
};
export default MovieDetailsPage;
