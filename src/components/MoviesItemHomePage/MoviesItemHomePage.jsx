import styles from './stylesMoviesItem.module.scss';
import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';

const MoviesItemHomePage = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    overview,
    genre_ids,
    genres,
    id,
  } = movie;
  // function genresMovieShort(element) {
  //   element.genre_ids = element.genre_ids
  //     .map(genreMovie => (genreMovie = genres[genreMovie]))
  //     .slice(0, 3)
  //     .join(', ');
  //   return element;
  // }
   // const movieGenres = genres.map(genre => genre.name + ' ');
  return (
    <div className={styles.moviesItem}>
      <img
        src={`${BASE_IMAGE_URL}${poster_path}`}
        alt={`${id}-${original_title}`}
      />
      <h2> {title}</h2>
      <p>User Score: {vote_average}</p>
      {/* <h3>Overview </h3>
      <p>{overview}</p> */}
      <p>Genres: {genre_ids}</p>
      {/* <p>Genres: {genres.map(genre => genre.name + ' ')}</p> */}
      {/* <p>{genresMovieShort({ genre_ids })}</p> */}
    </div>
  );
};

export default MoviesItemHomePage;
